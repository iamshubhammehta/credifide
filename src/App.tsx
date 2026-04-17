import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useSpring, useMotionValue, useScroll, useTransform } from 'motion/react';
import ProviderEnrollmentLP from './pages/ProviderEnrollmentLP';
import { ASSETS, IconRenderer } from './constants';
import { PhysicsWorld, PhysicsBody } from './components/PhysicsEngine';
import About from './pages/About';
import Services from './pages/Services';
import { useSEO } from './hooks/useSEO';
import { useAnimationSettings } from './hooks/useAnimationSettings';
import InsuranceCredentialing from './pages/InsuranceCredentialing';
import MedicalBilling from './pages/MedicalBilling';
import Contact from './pages/Contact';
import Resources from './pages/Resources';

// Security-First Lazy Loading for Blog system
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));

import WhitePapers from './pages/WhitePapers';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import logoMain from './assets/logo_main.png';
import footerLogo from './assets/footer_logo.png';


// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};



// Subtle page-level background - soft gradient fade from near-dark to white as user scrolls
const Background = React.memo(() => {
  const { scrollY } = useScroll();
  const animations = useAnimationSettings();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  const opacity = useTransform(scrollY, [0, 1000], [0.15, 0.08]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let W = 0, H = 0;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const N = Math.floor((W < 768 ? 40 : 100) * animations.particleDensity);
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * (animations.isMobile ? 0.2 : 0.4),
      vy: (Math.random() - 0.5) * (animations.isMobile ? 0.2 : 0.4),
      r: Math.random() * 2 + 0.5, o: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Radial glow around mouse
      const grd = ctx.createRadialGradient(mouseRef.current.x, mouseRef.current.y, 0, mouseRef.current.x, mouseRef.current.y, 350);
      grd.addColorStop(0, 'rgba(127,191,127,0.12)');
      grd.addColorStop(1, 'transparent');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, W, H);

      pts.forEach(p => {
        p.x += p.vx + (mouseRef.current.x - W / 2) * 0.00005;
        p.y += p.vy + (mouseRef.current.y - H / 2) * 0.00005;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(127,191,127,${p.o})`;
        ctx.fill();
      });

      // Connect particles
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(127,191,127,${0.12 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      rafRef.current = requestAnimationFrame(draw);
    };

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', onMouse);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animations.particleDensity, animations.isMobile]);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-white">
      {/* Particle canvas effect */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Very subtle brand glow that fades on scroll */}
      <motion.div
        className="absolute inset-0 w-full h-full blur-[160px] will-change-transform"
        style={{ background: 'radial-gradient(ellipse, rgba(11, 107, 87, 0.08) 0%, transparent 70%)', opacity }}
      />
    </div>
  );
});

const Navbar = React.memo(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAboutPage = location.pathname === '/about';
  const isLandingPage = location.pathname.startsWith('/lp/');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setResourcesOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    if (isAboutPage) {
      navigate(`/#${id}`);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full px-3 sm:px-6 lg:px-8 py-1 sm:py-2 bg-transparent">
        <nav className="max-w-7xl mx-auto rounded-2xl px-4 sm:px-6 py-3 flex justify-between items-center transition-all duration-500 glass">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={ASSETS.brand.logoImage as string}
              alt="Credifide"
              className="h-8 sm:h-9 w-auto object-contain"
              loading="eager"
            />
          </Link>          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 font-medium transition-colors duration-500 text-slate-600">
            <Link to="/" className={`hover:text-brand-deep transition-colors ${location.pathname === '/' ? 'text-brand-deep font-bold' : ''}`}>Home</Link>
            <Link to="/about" className={`underline-offset-4 hover:underline hover:text-brand-deep transition-colors ${location.pathname === '/about' ? 'text-brand-deep font-bold' : ''}`}>About Us</Link>
            <div className="relative group/nav">
              <Link to="/services" className={`flex items-center gap-1 underline-offset-4 hover:underline hover:text-brand-deep transition-colors ${location.pathname.startsWith('/services') ? 'text-brand-deep font-bold' : ''}`}>
                Services
                <IconRenderer icon={ASSETS.nav.chevronRight} size={14} className="rotate-90 group-hover/nav:translate-y-0.5 transition-transform" />
              </Link>

              {/* Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300">
                <div className="bg-white/70 border border-white/40 rounded-2xl shadow-2xl p-4 w-72 backdrop-blur-xl">
                  <a href="https://credifide.com/insurance-credentialing/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group/item">
                    <div className="w-10 h-10 rounded-lg bg-brand-deep/10 text-brand-deep flex items-center justify-center shrink-0">
                      <IconRenderer icon={ASSETS.features.shield} size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm mb-1 group-hover/item:text-brand-deep">Insurance Credentialing</div>
                      <p className="text-[11px] text-slate-500 leading-tight">Fast-tracked payer enrollment & compliance.</p>
                    </div>
                  </a>
                  <Link to="/services/medical-billing" className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group/item">
                    <div className="w-10 h-10 rounded-lg bg-brand-light text-brand-deep flex items-center justify-center shrink-0">
                      <IconRenderer icon={ASSETS.ui.dollar} size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm mb-1 group-hover/item:text-brand-deep">Medical Billing</div>
                      <p className="text-[11px] text-slate-500 leading-tight">Optimized RCM and revenue recovery.</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group/res">
              <Link to="/resources" className={`flex items-center gap-1 underline-offset-4 hover:underline hover:text-brand-deep transition-colors ${location.pathname.startsWith('/resources') ? 'text-brand-deep font-bold' : ''}`}>
                Resources
                <IconRenderer icon={ASSETS.nav.chevronRight} size={14} className="rotate-90 group-hover/res:translate-y-0.5 transition-transform" />
              </Link>

              {/* Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/res:opacity-100 group-hover/res:visible transition-all duration-300">
                <div className="bg-white/70 border border-white/40 rounded-2xl shadow-2xl p-4 w-64 backdrop-blur-xl">
                  <Link to="/resources/blog" className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group/item">
                    <div className="w-10 h-10 rounded-lg bg-brand-light text-brand-deep flex items-center justify-center shrink-0">
                      <IconRenderer icon={ASSETS.ui.fileText} size={20} />
                    </div>
                    <div className="font-bold text-slate-900 text-sm group-hover/item:text-brand-deep">Blog</div>
                  </Link>
                  <Link to="/resources/white-papers" className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group/item">
                    <div className="w-10 h-10 rounded-lg bg-brand-light text-brand-deep flex items-center justify-center shrink-0">
                      <IconRenderer icon={ASSETS.features.shield} size={20} />
                    </div>
                    <div className="font-bold text-slate-900 text-sm group-hover/item:text-brand-deep">White Papers</div>
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/contact" className={`hover:text-brand-deep transition-colors ${location.pathname === '/contact' ? 'text-brand-deep font-bold' : ''}`}>Contact</Link>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 font-medium transition-colors duration-500 text-slate-600 text-sm xl:text-base">
              <IconRenderer icon={ASSETS.nav.phone} size={18} className="text-brand-deep" />
              <span>(321) 524-0606</span>
            </div>
            <Link to="/contact" className="bg-brand-deep text-white px-6 py-2.5 rounded-xl font-bold hover:bg-brand-600 transition-all shadow-lg shadow-brand-deep/20 flex items-center gap-2 group text-sm xl:text-base">
              Book a Consultation
              <IconRenderer icon={ASSETS.nav.arrowRight} size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <a href="tel:3215240606" className="p-2 text-brand-deep" aria-label="Call us">
              <IconRenderer icon={ASSETS.nav.phone} size={20} />
            </a>
            <button
              className="p-2.5 text-slate-900 rounded-xl hover:bg-slate-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <IconRenderer icon={mobileMenuOpen ? ASSETS.nav.close : ASSETS.nav.menu} size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu-panel ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="p-6 pt-8">
          {/* Close button */}
          <div className="flex justify-between items-center mb-8">
            <img
              src={ASSETS.brand.logoImage as string}
              alt="Credifide"
              className="h-8 w-auto object-contain"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Close menu"
            >
              <IconRenderer icon={ASSETS.nav.close} size={24} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="space-y-1">
            <Link to="/" className={`block px-4 py-3.5 rounded-xl font-semibold text-base transition-colors ${location.pathname === '/' ? 'text-brand-deep bg-brand-light/50' : 'text-slate-700 hover:bg-slate-50'}`}>
              Home
            </Link>
            <Link to="/about" className={`block px-4 py-3.5 rounded-xl font-semibold text-base transition-colors ${location.pathname === '/about' ? 'text-brand-deep bg-brand-light/50' : 'text-slate-700 hover:bg-slate-50'}`}>
              About Us
            </Link>

            {/* Services Accordion */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-semibold text-base transition-colors ${location.pathname.startsWith('/services') ? 'text-brand-deep bg-brand-light/50' : 'text-slate-700 hover:bg-slate-50'}`}
              >
                Services
                <IconRenderer icon={ASSETS.nav.chevronRight} size={16} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-90' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-brand-light pl-4">
                  <a href="https://credifide.com/insurance-credentialing/" target="_blank" rel="noopener noreferrer" className="block px-3 py-3 rounded-lg text-sm font-medium text-slate-500 hover:text-brand-deep hover:bg-slate-50 transition-colors">
                    Insurance Credentialing
                  </a>
                  <Link to="/services/medical-billing" className="block px-3 py-3 rounded-lg text-sm font-medium text-slate-500 hover:text-brand-deep hover:bg-slate-50 transition-colors">
                    Medical Billing
                  </Link>
                </div>
              )}
            </div>

            {/* Resources Accordion */}
            <div>
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-semibold text-base transition-colors ${location.pathname.startsWith('/resources') ? 'text-brand-deep bg-brand-light/50' : 'text-slate-700 hover:bg-slate-50'}`}
              >
                Resources
                <IconRenderer icon={ASSETS.nav.chevronRight} size={16} className={`transition-transform duration-200 ${resourcesOpen ? 'rotate-90' : ''}`} />
              </button>
              {resourcesOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-brand-light pl-4">
                  <Link to="/resources/blog" className="block px-3 py-3 rounded-lg text-sm font-medium text-slate-500 hover:text-brand-deep hover:bg-slate-50 transition-colors">
                    Blog
                  </Link>
                  <Link to="/resources/white-papers" className="block px-3 py-3 rounded-lg text-sm font-medium text-slate-500 hover:text-brand-deep hover:bg-slate-50 transition-colors">
                    White Papers
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact" className={`block px-4 py-3.5 rounded-xl font-semibold text-base transition-colors ${location.pathname === '/contact' ? 'text-brand-deep bg-brand-light/50' : 'text-slate-700 hover:bg-slate-50'}`}>
              Contact
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
            <a href="tel:3215240606" className="flex items-center gap-3 px-4 py-3 text-slate-600 font-medium">
              <IconRenderer icon={ASSETS.nav.phone} size={18} className="text-brand-deep" />
              (321) 524-0606
            </a>
            <Link
              to="/contact"
              className="block w-full bg-brand-deep text-white py-4 rounded-2xl font-bold text-center shadow-lg shadow-brand-deep/20 active:scale-[0.97] transition-transform"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
});

const Hero = React.memo(() => {
  return (
    <section id="hero" className="relative overflow-hidden pt-6 lg:pt-8 lg:min-h-[95vh]" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {/* Mesh gradients removed as they are now global */}

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #ffffff)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-0 pb-10 lg:pt-4 lg:pb-12">
        <PhysicsBody id="hero-badge" className="inline-block mb-6">
          <motion.span
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex flex-row flex-wrap justify-center items-center gap-1 sm:gap-2.5 px-3 py-1.5 sm:px-5 sm:py-2 rounded-[2rem] border border-brand-deep/20 bg-brand-light/30 text-brand-deep text-[9px] min-[380px]:text-[10px] sm:text-sm font-black uppercase tracking-widest sm:tracking-[0.2em] backdrop-blur-md shadow-sm mb-4 leading-relaxed max-w-full"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-deep animate-pulse shadow-[0_0_8px_rgba(11,107,87,0.4)]" />
            Trusted by 300+ Healthcare Providers
          </motion.span>
        </PhysicsBody>

        <PhysicsBody id="hero-title" className="mb-10">
          <h1 className="text-[clamp(2.25rem,10vw,5.5rem)] sm:text-[clamp(3rem,6vw+0.5rem,5.5rem)] font-display font-black tracking-tighter leading-[0.95] text-slate-900 break-words">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  }
                }
              }}
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40, rotateX: 45 },
                  visible: { opacity: 1, y: 0, rotateX: 0 }
                }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="block will-change-transform"
              >
                Get Credentialed
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40, rotateX: 45 },
                  visible: { opacity: 1, y: 0, rotateX: 0 }
                }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="block relative will-change-transform"
              >
                <span className="text-brand-deep">Faster.</span>{' '}
                Get Paid{' '}
                <span className="relative inline-block">
                  Sooner.
                  <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.5, duration: 2, ease: 'circOut' }}
                    className="absolute -bottom-1 sm:-bottom-3 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-brand-accent to-transparent origin-left shadow-[0_0_15px_rgba(127,191,127,0.6)]" />
                </span>
              </motion.span>
            </motion.div>
          </h1>
        </PhysicsBody>

        <PhysicsBody id="hero-desc" className="mb-12">
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-[clamp(1rem,1.5vw+0.5rem,1.5rem)] leading-relaxed max-w-3xl mx-auto text-slate-500 px-2 sm:px-4 break-words">
            Credifide helps healthcare providers get credentialed, contracted, and reimbursed faster without delays or confusion.
          </motion.p>
        </PhysicsBody>

        <PhysicsBody id="hero-cta-primary">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link to="/contact"
              className="px-8 py-4 sm:px-10 sm:py-5 bg-brand-deep text-white rounded-2xl font-bold text-base sm:text-lg shadow-xl shadow-brand-deep/20 hover:bg-brand-600 active:scale-[0.97] transition-all flex items-center gap-2 group w-full sm:w-auto justify-center">
              Request a Consultation
              <IconRenderer icon={ASSETS.nav.arrowRight} size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </PhysicsBody>
      </div>

    </section>
  );
});

interface ServiceIllustrationProps {
  id: string;
  icon: any;
}

const ServiceIllustration = React.memo(({ id, icon: Icon }: ServiceIllustrationProps) => {
  const animations = useAnimationSettings();
  if (id === "feat-1") {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Document Base */}
        <motion.div
          animate={animations.floating || {}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-48 h-64 bg-white rounded-xl shadow-2xl border border-brand-light relative p-6 overflow-hidden will-change-transform"
        >
          <div className="space-y-4">
            <div className="h-4 bg-brand-light/50 rounded w-3/4" />
            <div className="h-4 bg-brand-light/50 rounded w-full" />
            <div className="h-4 bg-brand-light/50 rounded w-5/6" />
            <div className="h-4 bg-brand-light/50 rounded w-2/3" />
            <div className="h-4 bg-brand-light/50 rounded w-full" />
          </div>

          {/* Animated Checkmark */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="absolute bottom-6 right-6 w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center text-brand-deep shadow-lg shadow-brand-accent/30 style={{ transform: 'translateZ(20px)' }} will-change-transform"
          >
            <IconRenderer icon={ASSETS.ui.check} size={32} className="stroke-[3px]" />
          </motion.div>
        </motion.div>

        {/* Floating Shield */}
        <motion.div
          animate={animations.isMobile ? {} : {
            y: [-20, 20, -20],
            rotate: [-5, 5, -5]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -right-10 w-32 h-32 bg-brand-deep rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-brand-deep/40 z-20 will-change-transform"
        >
          <IconRenderer icon={ASSETS.features.shield} size={64} />
        </motion.div>

        {/* Floating Badges */}
        <motion.div
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-5 -left-10 bg-white p-4 rounded-2xl shadow-xl border border-brand-light flex items-center gap-3 z-20 will-change-transform"
        >
          <div className="w-8 h-8 bg-brand-accent/20 rounded-lg flex items-center justify-center text-brand-deep">
            <IconRenderer icon={ASSETS.ui.fileText} size={18} />
          </div>
          <div className="text-left">
            <div className="text-[10px] font-bold text-slate-400 uppercase">Status</div>
            <div className="text-sm font-bold text-slate-900">Verified</div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (id === "feat-2") {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Graph Container */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-64 h-48 bg-white rounded-2xl shadow-2xl border border-brand-light relative p-6 flex items-end gap-3 will-change-transform"
        >
          {[40, 70, 55, 90, 100].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 1, ease: "easeOut" }}
              className="flex-1 bg-gradient-to-t from-brand-deep to-brand-accent rounded-t-lg relative group will-change-[height]"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-deep text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                +${height}% Recovery
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Money Icons */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100],
              x: [0, (i - 1) * 30],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeOut"
            }}
            className="absolute text-brand-deep z-20 will-change-transform"
            style={{ bottom: '20%', left: '45%' }}
          >
            <IconRenderer icon={ASSETS.ui.dollar} size={32} />
          </motion.div>
        ))}

        {/* Floating Growth Indicator */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 2, 0]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-10 -right-5 bg-brand-deep p-6 rounded-3xl shadow-2xl text-white z-20 will-change-transform"
        >
          <IconRenderer icon={ASSETS.ui.trendingUp} size={48} />
          <div className="mt-2 text-xs font-bold uppercase tracking-widest text-brand-accent">Recovery</div>
        </motion.div>
      </div>
    );
  }

  if (id === "feat-3") {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Analysis Board */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-64 h-64 bg-brand-light rounded-3xl shadow-2xl relative p-8 overflow-hidden border border-brand-accent/20 will-change-transform"
        >
          <div className="grid grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-16 bg-white/50 rounded-xl animate-pulse" />
            ))}
          </div>

          {/* Scanning Line */}
          <motion.div
            animate={{ y: [0, 200, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 h-1 bg-brand-deep shadow-[0_0_15px_rgba(11,107,87,0.4)] z-10 will-change-transform"
          />
        </motion.div>

        {/* Floating Magnifying Glass */}
        <motion.div
          animate={{
            x: [-20, 20, -20],
            y: [-10, 10, -10],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute z-20 text-brand-deep will-change-transform"
        >
          <IconRenderer icon={ASSETS.ui.search} size={120} className="stroke-[1.5px]" />
        </motion.div>

        {/* Floating Alert Icons */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-0 -left-5 w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-deep shadow-xl z-30 will-change-transform"
        >
          <IconRenderer icon={ASSETS.ui.alert} size={32} />
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-5 -right-5 w-20 h-20 bg-brand-deep rounded-full flex items-center justify-center text-white shadow-xl z-30 will-change-transform"
        >
          <IconRenderer icon={ASSETS.features.clock} size={40} />
        </motion.div>
      </div>
    );
  }

  return <IconRenderer icon={Icon} size={140} className="text-brand-deep opacity-10" />;
});

interface ServiceSectionProps {
  service: any;
  index: number;
}

const ServiceSection: React.FC<ServiceSectionProps> = React.memo(({ service, index }) => {
  const animations = useAnimationSettings();
  const { icon: Icon, title, desc, id, color } = service;

  return (
    <section
      className={`${animations.isMobile ? 'relative h-auto py-16' : 'min-h-[70vh] lg:min-h-[80vh] sticky'} flex items-center ${color} border-t border-slate-200/30 lg:py-12 rounded-[32px] lg:rounded-[60px] mx-3 lg:mx-8 overflow-hidden`}
      style={animations.isMobile ? {} : {
        zIndex: index + 10,
        top: `calc(4vh + ${index * 3}vh)`,
        marginBottom: index === 2 ? '0' : '8vh',
        boxShadow: `0 ${20 + index * 6}px ${50 + index * 15}px rgba(0,0,0,${0.06 + index * 0.02})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center relative z-10">
        <div className="text-left order-2 lg:order-1">
          <div className="inline-block mb-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-16 h-16 lg:w-20 lg:h-20 bg-brand-light rounded-2xl lg:rounded-3xl flex items-center justify-center text-brand-deep shadow-inner"
            >
              <IconRenderer icon={Icon} size={32} className="lg:size-10" />
            </motion.div>
          </div>

          <div className="mb-6">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-6xl font-display font-bold leading-tight transition-colors duration-1000 text-slate-900 will-change-transform"
            >
              {title}
            </motion.h2>
          </div>

          <div className="mb-10">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-base lg:text-xl leading-relaxed max-w-xl transition-colors duration-1000 text-slate-600 will-change-transform"
            >
              {desc}
            </motion.p>
          </div>

          <div>
            {service.path?.startsWith('http') ? (
              <a
                href={service.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-deep font-bold text-base lg:text-lg hover:gap-4 transition-all group will-change-transform"
              >
                Learn more about this service
                <IconRenderer icon={ASSETS.nav.arrowRight} className="group-hover:translate-x-2 transition-transform" />
              </a>
            ) : (
              <Link
                to={service.path || "/contact"}
                className="flex items-center gap-2 text-brand-deep font-bold text-base lg:text-lg hover:gap-4 transition-all group will-change-transform"
              >
                Learn more about this service
                <IconRenderer icon={ASSETS.nav.arrowRight} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            )}
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-square w-full max-w-[min(400px,80vw)] mx-auto will-change-transform"
            >
              <div className="relative h-full w-full group/card">
                {/* Main Card with Green Shadow */}
                <motion.div
                  className="saas-card p-6 lg:p-10 flex flex-col items-center justify-center text-center h-full relative shadow-2xl shadow-brand-deep/10 overflow-hidden group-hover/card:shadow-brand-deep/25 transition-all duration-500 bg-white border-brand-light"
                >
                  <div className="absolute inset-0 opacity-100 transition-colors duration-1000 bg-gradient-to-br from-white via-brand-light/20 to-brand-light/40" />
                  <div className="saas-card-glow" />

                  {/* Illustration Container */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <ServiceIllustration id={id} icon={Icon} />
                  </div>

                  {/* Extra decorative blobs for more color */}
                  <div className="absolute top-1/4 -left-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute bottom-1/4 -right-10 w-44 h-44 bg-brand-light rounded-full blur-3xl animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

const ApproachCard = React.memo(({ card, index, scrollYProgress }: { card: any, index: number, scrollYProgress: any }) => {
  const animations = useAnimationSettings();
  // Sequential reveal logic: 0-0.25, 0.3-0.55, 0.6-0.85
  const start = index * 0.28;
  const end = start + 0.25;

  // Desktop: Smooth spring-based transforms (preserved exactly)
  const rawY = useTransform(scrollYProgress, [start, end], [300, 0]);
  const rawOpacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const rawScale = useTransform(scrollYProgress, [start, end], [0.85, 1]);

  const y = useSpring(rawY, { damping: 25, stiffness: 60 });
  const opacity = useSpring(rawOpacity, { damping: 35, stiffness: 80 });
  const scale = useSpring(rawScale, { damping: 25, stiffness: 60 });

  if (animations.isMobile) {
    return (
      <div className="w-full mb-6">
        <PhysicsBody id={card.id} className="w-full h-full">
          <div className="saas-card p-8 bg-white border-slate-200 shadow-2xl relative overflow-hidden h-full group flex flex-col">
            <div className={`${card.gradient} absolute inset-0 pointer-events-none opacity-60`} />
            <div className="relative z-10 flex flex-col flex-1">
              <div className="w-12 h-12 bg-brand-deep/10 rounded-xl flex items-center justify-center text-brand-deep mb-6 border border-brand-deep/20">
                <IconRenderer icon={card.icon} size={22} className="stroke-[1.5px]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{card.title}</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-8 flex-1">{card.desc}</p>

              <div className="pt-6 border-t border-slate-100 mt-auto">
                <p className="font-bold text-sm text-slate-900 leading-snug">
                  {card.highlight}
                </p>
              </div>
            </div>
          </div>
        </PhysicsBody>
      </div>
    );
  }

  return (
    <motion.div
      style={{
        y,
        opacity,
        scale,
      }}
      className="w-full will-change-transform h-full"
    >
      <PhysicsBody id={card.id} className="w-full h-full">
        <div className="saas-card p-8 sm:p-10 flex flex-col items-center text-center relative group/approach transition-colors duration-500 bg-white border-slate-200 shadow-xl hover:shadow-brand-deep/10 will-change-transform h-full">
          <div className={`${card.gradient} absolute inset-0 pointer-events-none opacity-60 transition-opacity duration-500 group-hover/approach:opacity-90`} />

          <div className="relative z-10 flex flex-col w-full flex-1">
            <div className="w-12 h-12 bg-brand-deep/10 rounded-xl flex items-center justify-center text-brand-deep mb-6 border border-brand-deep/20 group-hover/approach:scale-110 transition-transform duration-500 will-change-transform mx-auto">
              <IconRenderer icon={card.icon} size={22} className="stroke-[1.5px]" />
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold mb-5 leading-tight transition-colors duration-1000 text-slate-900 text-center">
              {card.title}
            </h3>

            <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 transition-colors duration-1000 text-slate-600 text-center flex-1">
              {card.desc}
            </p>

            <div className="pt-6 border-t w-full transition-colors duration-1000 border-slate-200 mt-auto">
              <p className="font-bold text-sm lg:text-base leading-snug transition-colors duration-1000 text-slate-900 text-center">
                {card.highlight}
              </p>
            </div>
          </div>
        </div>
      </PhysicsBody>
    </motion.div>
  );
});

const OurApproach = React.memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const approachData = [
    {
      id: "approach-1",
      icon: ASSETS.ui.target,
      title: "Precision by Design",
      desc: "Credifide is built on AI-powered and automated workflows that reduce manual touchpoints and eliminate preventable errors. Every credentialing, enrollment, and billing step is tracked, validated, and documented.",
      highlight: "Accuracy isn't a goal. It's built into the system.",
      gradient: "saas-card-gradient-1"
    },
    {
      id: "approach-2",
      icon: ASSETS.ui.clipboard,
      title: "Automation with Accountability",
      desc: "Automation improves speed, but accountability ensures trust. Our workflows are automated, while experienced healthcare specialists oversee every process to ensure accuracy and compliance.",
      highlight: "Technology handles repetition. People ensure correctness.",
      gradient: "saas-card-gradient-2"
    },
    {
      id: "approach-3",
      icon: ASSETS.ui.fileText,
      title: "Full Transparency, Always",
      desc: "You always know what's happening. Credifide provides clear status updates, documented progress, and visibility into every stage of credentialing and RCM.",
      highlight: "No black boxes. No unanswered questions. Just clear information.",
      gradient: "saas-card-gradient-4"
    }
  ];

  const animations = useAnimationSettings();

  if (animations.isMobile) {
    return (
      <section id="approach" className="py-20 px-6 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-brand-deep font-bold tracking-wider uppercase text-xs">Our Methodology</span>
            <h2 className="text-3xl font-display font-black text-slate-900 mt-4 mb-4">Our Approach</h2>
            <p className="max-w-2xl mx-auto text-base text-slate-500 font-medium">
              A smarter, transparent, and automation-driven way to manage credentialing and revenue cycle operations.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {approachData.map((card, index) => (
              <ApproachCard
                key={card.id}
                card={card}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link to="/about" className="px-8 py-4 bg-brand-deep text-white rounded-2xl font-bold text-base shadow-xl shadow-brand-deep/20 hover:bg-brand-600 active:scale-[0.97] transition-all flex items-center gap-2 group">
              Who We Are
              <IconRenderer icon={ASSETS.nav.arrowRight} size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="approach" ref={containerRef} className="relative h-[220vh] bg-transparent z-20">
      {/* Sticky container */}
      <div className="sticky top-16 flex flex-col items-center justify-center px-6 py-12 sm:py-16 overflow-visible">
        {/* Background Gradient */}
        <div className="absolute inset-0 pointer-events-none transition-colors duration-1000 bg-gradient-to-b from-transparent via-brand-light/20 to-transparent" />

        <div className="w-full max-w-7xl relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <PhysicsBody id="approach-badge" className="inline-block mb-3">
              <span className="text-brand-deep font-bold tracking-[0.2em] uppercase text-xs">Our Methodology</span>
            </PhysicsBody>
            <PhysicsBody id="approach-title" className="mb-4">
              <h2 className="text-[clamp(2rem,4vw+1rem,4rem)] font-display font-bold transition-colors duration-1000 text-slate-900">
                Our Approach
              </h2>
            </PhysicsBody>
            <PhysicsBody id="approach-subtitle">
              <p className="max-w-3xl mx-auto text-base lg:text-xl transition-colors duration-1000 text-slate-500 font-medium">
                A smarter, transparent, and automation-driven way to manage credentialing and revenue cycle operations.
              </p>
            </PhysicsBody>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full items-stretch">
            {approachData.map((card, index) => (
              <ApproachCard
                key={card.id}
                card={card}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          <div className="flex justify-center mt-16 sm:mt-20">
            <Link to="/about" className="px-10 py-5 bg-brand-deep text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-deep/20 hover:bg-brand-600 active:scale-[0.97] transition-all flex items-center gap-3 group">
              Who We Are
              <IconRenderer icon={ASSETS.nav.arrowRight} size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
      {/* Spacer */}
      <div className="h-[15vh]" />
    </section>
  );
});

const Features = React.memo(() => {
  const services = [
    {
      id: "feat-1",
      icon: ASSETS.features.shield,
      title: "Provider Credentialing",
      desc: "Our automated systems handle the entire enrollment process, ensuring your providers are credentialed and contracted with payers faster than ever.",
      path: "https://credifide.com/insurance-credentialing/",
      color: "bg-white"
    },
    {
      id: "feat-2",
      icon: ASSETS.ui.activity,
      title: "Revenue Cycle Management",
      desc: "Maximize your revenue with our AI-driven RCM solutions. We identify gaps, reduce denials, and accelerate your reimbursement cycles.",
      path: "/services/medical-billing",
      color: "bg-white"
    },
    {
      id: "feat-3",
      icon: ASSETS.features.clock,
      title: "Billing Assessments",
      desc: "Stay compliant and secure with focused billing assessments. We uncover hidden risks and provide actionable insights for financial stability.",
      path: "/services/medical-billing",
      color: "bg-white"
    }
  ];

  return (
    <div id="features" className="relative">
      {/* Intro section for services */}
      <section className="py-12 lg:py-16 bg-transparent border-b transition-colors duration-1000 border-slate-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PhysicsBody id="features-badge" className="inline-block mb-4">
            <span className="font-bold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full border transition-colors duration-1000 bg-brand-light border-brand-deep/10 text-brand-deep">
              Our Expertise
            </span>
          </PhysicsBody>
          <PhysicsBody id="features-title" className="mb-6">
            <h2 className="text-4xl lg:text-6xl font-display font-bold tracking-tight transition-colors duration-1000 text-slate-900">
              Solutions for <span className="text-brand-deep">Modern Healthcare</span>
            </h2>
          </PhysicsBody>
          <PhysicsBody id="features-subtitle">
            <p className="max-w-3xl mx-auto text-lg lg:text-xl leading-relaxed transition-colors duration-1000 text-slate-500">
              Transform your operations with AI-powered systems that automate credentialing, contracting, and revenue workflows.
            </p>
          </PhysicsBody>
        </div>
      </section>

      {/* Stacking Sections */}
      <div className="flex flex-col gap-0 pb-[10vh]">
        {services.map((service, index) => (
          <ServiceSection
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>
    </div>
  );
});

interface SpecialtyCardProps {
  item: any;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = React.memo(({ item }) => {
  return (
    <div className="flex-shrink-0 flex items-center gap-2.5 sm:gap-4 px-5 py-3 sm:px-8 sm:py-5 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default group mx-2 sm:mx-4 border bg-white/40 backdrop-blur-md border-white/50 will-change-transform">
      <div className="text-brand-500 group-hover:scale-110 transition-transform will-change-transform">
        <IconRenderer icon={item.icon} size={20} className="sm:size-[28px]" />
      </div>
      <span className="font-bold text-sm sm:text-lg whitespace-nowrap transition-colors duration-1000 text-slate-800">{item.name}</span>
    </div>
  );
});

const ReviewCard = React.memo(({ review }: { review: any }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }, [x, y]);

  const handleMouseLeave = React.useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white/70 backdrop-blur-2xl rounded-[24px] sm:rounded-[48px] shadow-2xl shadow-slate-200/50 p-6 sm:p-12 flex flex-col items-center text-center border border-white/80 relative overflow-hidden group h-full cursor-pointer will-change-transform"
    >
      {/* Top Avatar */}
      <div
        style={{ transform: "translateZ(50px)" }}
        className="relative mb-8"
      >
        <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
          <img
            src={`https://picsum.photos/seed/${review.name.split(' ')[0]}/200/200`}
            alt={review.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.classList.add('bg-brand-100', 'flex', 'items-center', 'justify-center', 'text-brand-700', 'font-bold', 'text-3xl');
              (e.target as HTMLImageElement).parentElement!.innerHTML = review.name.charAt(0);
            }}
          />
        </div>
        {/* Decorative glow */}
        <div className="absolute -inset-4 rounded-full bg-brand-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div
        style={{ transform: "translateZ(30px)" }}
        className="flex-grow flex flex-col items-center"
      >
        <h4 className="font-bold text-slate-900 text-lg sm:text-2xl mb-1 tracking-tight">{review.name}</h4>
        <p className="text-slate-400 font-medium text-sm mb-6">
          {review.role || "Healthcare Partner"}
        </p>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>

        <p className="text-slate-500 text-base leading-relaxed line-clamp-3 font-medium px-4">
          "{review.text}"
        </p>
      </div>
    </motion.div>
  );
});

const ReviewsSection = React.memo(() => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        const roles = ["Founder / CEO", "Medical Director", "Practice Manager", "Operations Lead", "Clinical Specialist"];
        const enrichedData = data.map((r: any, i: number) => ({
          ...r,
          role: roles[i % roles.length]
        }));
        setReviews(enrichedData.slice(0, 8));
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setReviews([
          { id: 1, name: "Gatil Y.", role: "Mental Health Practice Owner", rating: 5, text: "As a small mental health practice owner, credentialing always ended up on the 'I'll deal with it later' list. Since working with Credifide, I'm not chasing updates anymore. They handle the back-and-forth and keep me informed, which has made a big difference." },
          { id: 2, name: "Simran R.R.", role: "Healthcare Provider", rating: 5, text: "I have been very happy with Credifide so far. Initially I was clueless about the entire process and a bit hesitant but thanks to Tyler. They were able to get me 2 contracts within the first month. I would highly recommend Credifide." },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      if (contentRef.current && containerRef.current) {
        setWidth(contentRef.current.scrollWidth - containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [reviews, isLoading]);

  return (
    <section id="reviews" className="bg-transparent py-12 lg:py-16 relative overflow-hidden">
      {/* SaaS Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-40" />

      {/* Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-50/20 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.a
            href="https://www.trustpilot.com/review/credifide.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200 mb-10 shadow-sm hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <span className="text-slate-500 font-semibold text-xs uppercase tracking-widest">Review us on</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-6 h-6 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span className="text-xl font-bold text-slate-900 tracking-tight">Trustpilot</span>
            </div>
          </motion.a>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-display font-bold text-slate-900 mb-8 tracking-tight"
          >
            Review us on Trustpilot
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Discover what our satisfied customers have to say <br className="hidden md:block" /> about their experiences with our services.
          </motion.p>
        </div>

        {/* Slider Layout - Draggable Mouse Slide */}
        <div className="relative w-full overflow-hidden py-10" ref={containerRef}>
          <motion.div
            ref={contentRef}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            className="flex gap-8 w-max px-4 cursor-grab"
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="min-w-[280px] max-w-[280px] sm:min-w-[400px] sm:max-w-[400px] select-none"
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </motion.div>

          {/* Edge Fades */}
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-slate-50/50 to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-slate-50/50 to-transparent pointer-events-none z-10" />
        </div>

        <div className="text-center mt-24 relative z-10">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-3">
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-[#00b67a] flex items-center justify-center rounded-sm shadow-sm">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <span className="text-slate-500 font-medium">2 reviews</span>
              </div>
            </div>

            <motion.a
              href="https://www.trustpilot.com/review/credifide.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-12 py-5 rounded-2xl bg-slate-900 text-white font-bold shadow-2xl shadow-slate-900/20 hover:bg-brand-600 transition-all duration-500 group"
            >
              SEE ALL REVIEWS
              <IconRenderer icon={ASSETS.nav.arrowRight} size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
});

const ContactSection = React.memo(() => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    providerType: '',
    serviceNeeded: '',
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const steps = [
    { title: "Provider Type", icon: ASSETS.ui.users },
    { title: "Service", icon: ASSETS.features.zap },
    { title: "Contact Info", icon: ASSETS.nav.phone }
  ];

  const providerTypes = ["Solo Provider", "Clinic", "Group Practice", "Telehealth"];
  const services = ["Credentialing", "RCM", "Both"];

  return (
    <section id="contact" className="relative py-12 lg:py-16 overflow-hidden bg-transparent">
      {/* Futuristic Background */}
      <div className="absolute inset-0 transition-colors duration-1000 bg-transparent" />
      <div className="absolute inset-0 transition-opacity duration-1000 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/20 via-brand-accent/10 to-transparent animate-gradient-move" />
        <div className="absolute inset-0 bg-grid-brand-100/[0.05] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[40px] overflow-hidden shadow-2xl border transition-colors duration-1000 bg-white/50 backdrop-blur-md border-slate-200"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left Side: Content */}
            <div className="p-8 sm:p-12 lg:p-20 flex flex-col border-b lg:border-b-0 lg:border-r transition-colors duration-1000 border-slate-100 bg-transparent">
              <div className="w-full">
                <PhysicsBody id="contact-badge" className="inline-block mb-6">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full border transition-colors duration-1000 bg-brand-light border-brand-deep/10 text-brand-deep w-fit font-bold">
                    <IconRenderer icon={ASSETS.ui.sparkles} size={14} />
                    <span className="text-xs tracking-wider uppercase">Get Started</span>
                  </div>
                </PhysicsBody>

                <PhysicsBody id="contact-title" className="mb-6">
                  <h2 className="text-[clamp(2rem,4vw+1rem,4rem)] font-display font-bold leading-tight transition-colors duration-1000 text-slate-900">
                    Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-deep to-brand-accent">Credentialing</span> Journey Today
                  </h2>
                </PhysicsBody>

                <PhysicsBody id="contact-subtitle" className="mb-10">
                  <p className="text-[clamp(1rem,1.5vw+0.5rem,1.125rem)] leading-relaxed max-w-xl transition-colors duration-1000 text-slate-600">
                    Experience faster approvals, zero confusion, and complete visibility with AI-powered workflows built for healthcare providers.
                  </p>
                </PhysicsBody>

                <div className="space-y-6">
                  {[
                    { text: "99% Accuracy Rate", icon: ASSETS.ui.shieldCheck },
                    { text: "30% Faster Credentialing", icon: ASSETS.features.zap },
                    { text: "Full Workflow Transparency", icon: ASSETS.ui.barChart }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-brand-light text-brand-deep group-hover:bg-brand-deep group-hover:text-white shrink-0">
                        <IconRenderer icon={item.icon} size={20} />
                      </div>
                      <span className="font-bold transition-colors duration-1000 text-slate-700 text-sm sm:text-base">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Interactive Form */}
            <div className="p-8 sm:p-12 lg:p-20 relative transition-all duration-700 bg-slate-50/50 flex flex-col">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12 flex-grow"
                >
                  <div className="w-20 h-20 bg-brand-deep rounded-full flex items-center justify-center text-white mb-8 shadow-lg shadow-brand-deep/20">
                    <IconRenderer icon={ASSETS.features.check} size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 transition-colors duration-1000 text-slate-900">Request Received!</h3>
                  <p className="max-w-xs mx-auto mb-8 transition-colors duration-1000 text-slate-600">
                    Our AI-powered system is processing your request. A specialist will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-brand-deep hover:text-brand-accent font-bold flex items-center gap-2 transition-colors"
                  >
                    Send another request <IconRenderer icon={ASSETS.nav.arrowRight} size={16} />
                  </button>
                </motion.div>
              ) : (
                <div className="flex-grow flex flex-col h-full">
                  {/* Progress Indicator */}
                  <div className="flex items-center justify-between mb-8 sm:mb-12 relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 transition-colors duration-1000 bg-brand-light" />
                    <div
                      className="absolute top-1/2 left-0 h-0.5 bg-brand-accent -translate-y-1/2 transition-all duration-500"
                      style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
                    />

                    {steps.map((s, i) => {
                      const isActive = step === i + 1;
                      const isCompleted = step > i + 1;
                      return (
                        <div key={i} className="relative z-10 flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-brand-deep text-white shadow-lg shadow-brand-deep/20 scale-110' :
                            isCompleted ? 'bg-brand-accent text-brand-deep' :
                              'bg-brand-light text-brand-deep/40'
                            }`}>
                            {isCompleted ? <IconRenderer icon={ASSETS.features.check} size={18} /> : <IconRenderer icon={s.icon} size={18} />}
                          </div>
                          <span className={`absolute top-12 text-[10px] uppercase font-bold tracking-widest whitespace-nowrap transition-colors duration-500 ${isActive ? 'text-brand-deep' : 'text-slate-400'
                            }`}>
                            {s.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <form onSubmit={handleSubmit} className="flex-grow flex flex-col">
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6"
                        >
                          <h3 className="text-xl font-bold mb-6 transition-colors duration-1000 text-slate-900">What type of provider are you?</h3>
                          <div className="grid grid-cols-2 gap-4 lg:gap-5">
                            {providerTypes.map((type) => (
                              <button
                                key={type}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, providerType: type });
                                  handleNext();
                                }}
                                className={`p-5 sm:p-8 rounded-[2rem] border text-left transition-all duration-300 group hover:scale-[1.02] shadow-sm hover:shadow-md flex flex-col justify-center min-h-[140px] lg:min-h-[160px] ${formData.providerType === type
                                  ? 'bg-brand-deep/10 border-brand-deep text-brand-deep'
                                  : 'bg-white border-brand-light text-slate-500 hover:border-brand-accent hover:bg-brand-light/30'
                                  }`}
                              >
                                <div className={`w-12 h-12 rounded-2xl mb-4 flex items-center justify-center shrink-0 transition-colors ${formData.providerType === type
                                  ? 'bg-brand-deep text-white'
                                  : 'bg-brand-light text-brand-deep/50 group-hover:bg-brand-accent group-hover:text-brand-deep'
                                  }`}>
                                  <IconRenderer icon={ASSETS.ui.users} size={24} />
                                </div>
                                <span className="font-bold text-base lg:text-lg tracking-tight block leading-tight">{type}</span>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6"
                        >
                          <h3 className="text-xl font-bold mb-6 transition-colors duration-1000 text-slate-900">What do you need help with?</h3>
                          <div className="space-y-4">
                            {services.map((service) => (
                              <button
                                key={service}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, serviceNeeded: service });
                                  handleNext();
                                }}
                                className={`w-full p-6 sm:p-7 rounded-3xl border text-left transition-all duration-300 flex items-center justify-between group hover:scale-[1.01] shadow-sm hover:shadow-xl ${formData.serviceNeeded === service
                                  ? 'bg-brand-deep/10 border-brand-deep text-brand-deep font-bold'
                                  : 'bg-white border-brand-light text-slate-500 hover:border-brand-accent hover:bg-brand-light/30'
                                  }`}
                              >
                                <div className="flex items-center gap-5">
                                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${formData.serviceNeeded === service
                                    ? 'bg-brand-deep text-white'
                                    : 'bg-brand-light text-brand-deep/50 group-hover:bg-brand-accent group-hover:text-brand-deep'
                                    }`}>
                                    <IconRenderer icon={ASSETS.features.zap} size={22} />
                                  </div>
                                  <span className="font-bold text-lg tracking-tight">{service}</span>
                                </div>
                                <IconRenderer icon={ASSETS.ui.chevronRight} size={22} className={formData.serviceNeeded === service ? 'text-brand-deep' : 'text-slate-400'} />
                              </button>
                            ))}
                          </div>
                          <button
                            type="button"
                            onClick={handleBack}
                            className="text-sm font-medium transition-colors text-slate-400 hover:text-slate-600"
                          >
                            Back to Step 1
                          </button>
                        </motion.div>
                      )}

                      {step === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6"
                        >
                          <h3 className="text-xl font-bold mb-6 transition-colors duration-1000 text-slate-900">Almost there! Your contact info:</h3>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 ml-1 transition-colors duration-1000 text-slate-400">Full Name</label>
                              <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="John Doe"
                                className="w-full border rounded-2xl px-5 py-4 outline-none transition-all duration-1000 bg-white border-slate-200 text-slate-900 placeholder:text-slate-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/5"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 ml-1 transition-colors duration-1000 text-slate-400">Email Address</label>
                              <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="john@example.com"
                                className="w-full border rounded-2xl px-5 py-4 outline-none transition-all duration-1000 bg-white border-slate-200 text-slate-900 placeholder:text-slate-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/5"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 ml-1 transition-colors duration-1000 text-slate-400">Phone Number</label>
                              <input
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                placeholder="(555) 000-0000"
                                className="w-full border rounded-2xl px-5 py-4 outline-none transition-all duration-1000 bg-white border-slate-200 text-slate-900 placeholder:text-slate-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/5"
                              />
                            </div>
                          </div>

                          {/* Disclaimer Box */}
                          <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl text-[10px] text-slate-500 leading-relaxed font-medium">
                            By providing your phone number, you agree to receive a text message from Credifide. Message and Data rates may apply, Message frequency varies. To stop receiving messages, reply 'STOP' at any time. For more information, reply 'HELP'.{' '}
                            <Link to="/privacy" className="text-brand-deep hover:underline font-bold">Privacy Policy</Link> | <Link to="/terms" className="text-brand-deep hover:underline font-bold">Terms and Conditions</Link>
                          </div>

                          {/* Acceptance Checkbox */}
                          <label className="flex items-start gap-3 cursor-pointer group">
                            <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                              <input
                                type="checkbox"
                                className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-slate-200 checked:border-brand-deep checked:bg-brand-deep transition-all"
                                required
                              />
                              <IconRenderer icon={ASSETS.ui.check} size={14} className="pointer-events-none absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                            </div>
                            <span className="text-xs text-slate-600 font-medium select-none group-hover:text-slate-900 transition-colors">
                              I accept the <Link to="/terms" className="text-brand-deep font-bold hover:underline">Terms and Conditions</Link>.
                            </span>
                          </label>

                          <div className="flex items-center gap-4 pt-4">
                            <button
                              type="button"
                              onClick={handleBack}
                              className="text-sm font-medium transition-colors text-slate-400 hover:text-slate-600"
                            >
                              Back
                            </button>
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="flex-grow bg-brand-deep hover:bg-brand-accent hover:text-brand-deep text-white font-bold py-4 rounded-2xl shadow-lg shadow-brand-deep/20 transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
                            >
                              {isSubmitting ? (
                                <IconRenderer icon={ASSETS.ui.loader} className="animate-spin" size={20} />
                              ) : (
                                <>
                                  <span>Get Free Consultation</span>
                                  <IconRenderer icon={ASSETS.nav.arrowRight} size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                              )}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

const Specialties = React.memo(() => {
  const row1 = [
    { name: "Orthopedics", icon: ASSETS.specialties.orthopedics },
    { name: "Mental Health", icon: ASSETS.specialties.mentalHealth },
    { name: "Telehealth", icon: ASSETS.specialties.telehealth },
    { name: "Physical Therapy", icon: ASSETS.specialties.physicalTherapy },
    { name: "Cardiology", icon: ASSETS.specialties.cardiology },
    { name: "Home Care", icon: ASSETS.specialties.homeHealth },
    { name: "Gastroenterology", icon: ASSETS.specialties.gastroenterology },
    { name: "Dermatology", icon: ASSETS.specialties.dermatology },
    { name: "Pain Management", icon: ASSETS.specialties.painManagement },
  ];
  
  const row2 = [
    { name: "Internal Medicine", icon: ASSETS.specialties.general },
    { name: "Dentistry", icon: ASSETS.specialties.dentistry },
    { name: "Laboratory", icon: ASSETS.specialties.laboratory },
    { name: "Urology", icon: ASSETS.specialties.urology },
    { name: "Neurology", icon: ASSETS.specialties.mentalHealth },
    { name: "Lactation Consultant", icon: ASSETS.specialties.pediatrics },
    { name: "Medical Equipment", icon: ASSETS.specialties.pharmacy },
    { name: "OBGYN / Women's Health", icon: ASSETS.specialties.obgyn },
    { name: "Urgent Care", icon: ASSETS.specialties.urgentCare },
  ];

  return (
    <section className="py-12 lg:py-16 bg-transparent relative overflow-hidden">
      {/* Edge Fades - Desktop Only */}
      <div className="hidden lg:block absolute inset-y-0 left-0 w-40 z-10 pointer-events-none transition-colors duration-1000 bg-gradient-to-r from-slate-50 to-transparent" />
      <div className="hidden lg:block absolute inset-y-0 right-0 w-40 z-10 pointer-events-none transition-colors duration-1000 bg-gradient-to-l from-slate-50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="inline-block mb-4">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-xs">Our Coverage</span>
        </div>
        <div className="mb-6">
          <h2 className="text-[clamp(2rem,4vw+1rem,3.5rem)] font-display font-bold transition-colors duration-1000 text-slate-900">
            Specialties We Support
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-5 sm:gap-10 pause-on-hover px-4 sm:px-0">
        {/* Row 1: Scrolls Left */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-marquee-left">
            {[...row1, ...row1, ...row1].map((item, i) => (
              <SpecialtyCard key={`r1-${i}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2: Scrolls Right */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-marquee-right">
            {[...row2, ...row2, ...row2].map((item, i) => (
              <SpecialtyCard key={`r2-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

const Home = React.memo(() => {
  const { hash } = useLocation();

  useSEO(
    'Credifide - Modern Healthcare RCM & Provider Enrollment',
    'Streamline your healthcare operations with Credifide. We specialize in Provider Enrollment, Insurance Credentialing, and Medical Billing for modern clinical success.'
  );

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300); // Small delay to ensure content is rendered
      }
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <Features />
      <OurApproach />

      <Specialties />
      <ReviewsSection />
      <ContactSection />
    </>
  );
});

export default function App() {
  const location = useLocation();
  const isLandingPage = location.pathname.startsWith('/lp/');

  return (
    <div className="min-h-screen bg-transparent text-slate-900 selection:bg-brand-100 selection:text-brand-700">

      <ScrollToTop />
      <PhysicsWorld>
        <Background />
        <div className="relative">
          <Navbar />

          <React.Suspense fallback={
            <div className="flex flex-col items-center justify-center py-32">
              <div className="w-12 h-12 border-4 border-slate-100 border-t-brand-deep rounded-full animate-spin mb-4" />
              <p className="text-slate-400 font-bold text-xs uppercase tracking-widest animate-pulse">Loading Journal...</p>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/insurance-credentialing" element={<InsuranceCredentialing />} />
              <Route path="/services/medical-billing" element={<MedicalBilling />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/blog" element={<Blog />} />
              <Route path="/resources/blog/:slug" element={<BlogPost />} />
              <Route path="/resources/white-papers" element={<WhitePapers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/lp/provider-enrollment-excellence" element={<ProviderEnrollmentLP />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </React.Suspense>

          <footer className="bg-[#0f3d3a] pt-2 sm:pt-4 md:pt-6 lg:pt-8 pb-0 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
              {/* Logo */}
              <div className="mb-1 sm:mb-2 md:mb-5">
                <Link to="/" className="flex items-center">
                  <img
                    src={footerLogo}
                    alt="Credifide"
                    className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
                    loading="lazy"
                  />
                </Link>
              </div>

              {/* Navigation with dashes */}
              <nav className="flex flex-wrap justify-center items-center gap-x-2 md:gap-x-4 gap-y-0.5 mb-2 sm:mb-3 md:mb-5 text-xs md:text-sm lg:text-base font-bold text-white/90 px-1">
                <Link to="/about" className="hover:text-brand-accent transition-colors py-1 px-0.5 md:py-1.5 md:px-2">About Us</Link>
                <span className="text-white/20 hidden sm:inline">-</span>
                <Link to="/resources/blog" className="hover:text-brand-accent transition-colors py-1 px-0.5 md:py-1.5 md:px-2">Blog</Link>
                <span className="text-white/20 hidden sm:inline">-</span>
                <Link to="/privacy" className="hover:text-brand-accent transition-colors py-1 px-0.5 md:py-1.5 md:px-2">Privacy Policy</Link>
                <span className="text-white/20 hidden sm:inline">-</span>
                <Link to="/terms" className="hover:text-brand-accent transition-colors py-1 px-0.5 md:py-1.5 md:px-2">Terms</Link>
                <span className="text-white/20 hidden sm:inline">-</span>
                <Link to="/contact" className="hover:text-brand-accent transition-colors py-1 px-0.5 md:py-1.5 md:px-2">Contact</Link>
                <span className="text-white/20 hidden sm:inline">-</span>
                <Link to="/about" className="hover:text-brand-accent transition-colors py-1 px-0.5 md:py-1.5 md:px-2">Unsubscribe</Link>
              </nav>

              {/* Bottom Row: Phone | Socials | Email */}
              <div className="w-full flex flex-row flex-wrap justify-center md:justify-center items-center gap-x-3 md:gap-x-10 gap-y-1.5 md:gap-y-3 pb-[max(8px,env(safe-area-inset-bottom))] md:pb-6">

                {/* Phone */}
                <div className="order-1 md:order-1 flex items-center">
                  <a href="tel:+13215240606" className="text-xs md:text-sm lg:text-base font-bold text-white/80 hover:text-brand-accent transition-colors flex items-center gap-1.5 py-0.5 px-1.5 md:p-0">
                    <div className="md:hidden flex items-center gap-1">
                      <IconRenderer icon={ASSETS.nav.phone} size={10} className="opacity-80" />
                      <span>Call Us</span>
                    </div>
                    <div className="hidden md:flex items-center gap-1.5">
                      <IconRenderer icon={ASSETS.nav.phone} size={14} className="opacity-80" />
                      <span>+1 321 524 0606</span>
                    </div>
                  </a>
                </div>

                {/* Email */}
                <div className="order-2 md:order-3 flex items-center">
                  <a href="mailto:connect@credifide.com" className="text-xs md:text-sm lg:text-base font-bold text-white/80 hover:text-brand-accent transition-colors flex items-center gap-1.5 py-0.5 px-1.5 md:p-0">
                    <div className="md:hidden flex items-center gap-1">
                      <IconRenderer icon={ASSETS.nav.mail} size={10} className="opacity-80" />
                      <span>Email Us</span>
                    </div>
                    <div className="hidden md:flex items-center gap-1.5">
                      <IconRenderer icon={ASSETS.nav.mail} size={14} className="opacity-80" />
                      <span>connect@credifide.com</span>
                    </div>
                  </a>
                </div>

                {/* Socials */}
                <div className="order-3 md:order-2 w-full md:w-auto flex justify-center items-center gap-2 md:gap-4 mt-1 md:mt-0 border-t border-white/5 md:border-0 pt-2 md:pt-0">
                  <a href="https://www.linkedin.com/company/credifide/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors p-1.5 md:p-2.5 bg-white/5 md:bg-transparent rounded-full md:rounded-none">
                    <IconRenderer icon={ASSETS.social.linkedin} size={14} className="md:w-[18px] md:h-[18px]" />
                  </a>
                  <a href="https://www.facebook.com/people/Credifide/61588273853682/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors p-1.5 md:p-2.5 bg-white/5 md:bg-transparent rounded-full md:rounded-none">
                    <IconRenderer icon={ASSETS.social.facebook} size={14} className="md:w-[18px] md:h-[18px]" />
                  </a>
                  <a href="https://www.youtube.com/@Credifide" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors p-1.5 md:p-2.5 bg-white/5 md:bg-transparent rounded-full md:rounded-none">
                    <svg className="w-[14px] h-[14px] md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/credifide/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors p-1.5 md:p-2.5 bg-white/5 md:bg-transparent rounded-full md:rounded-none">
                    <IconRenderer icon={ASSETS.social.instagram} size={14} className="md:w-[18px] md:h-[18px]" />
                  </a>
                </div>

              </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-[#A3BD6A] py-1.5 text-center">
              <p className="text-[10px] sm:text-[11px] font-bold text-[#0f3d3a]">
                © 2026 <span className="font-extrabold uppercase tracking-widest">Credifide</span>, All Rights Reserved
              </p>
            </div>
          </footer>

        </div>
      </PhysicsWorld>
    </div>
  );
}
