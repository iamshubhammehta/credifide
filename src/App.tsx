import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useSpring, useMotionValue, useScroll, useTransform } from 'motion/react';
import { ASSETS, IconRenderer } from './constants';
import { PhysicsWorld, PhysicsBody } from './components/PhysicsEngine';
import About from './pages/About';
import Services from './pages/Services';
import InsuranceCredentialing from './pages/InsuranceCredentialing';
import MedicalBilling from './pages/MedicalBilling';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Blog from './pages/Blog';
import WhitePapers from './pages/WhitePapers';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Cursor Follower Component
const CursorFollower = React.memo(() => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 20);
      mouseY.set(e.clientY - 20);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="cursor-follower hidden md:block will-change-transform"
      style={{ x: cursorX, y: cursorY }}
    />
  );
});

// Removed: FlowingLine canvas (now handled per-page)
const FlowingLine = React.memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<{ x: number; y: number }[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const lastScrollRef = useRef(0);
  const requestRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    // Respect user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Check if hovering over interactive element
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, .interactive');
      if (isInteractive) {
        pointsRef.current.forEach((p, i) => {
          p.x += (Math.random() - 0.5) * 2;
          p.y += (Math.random() - 0.5) * 2;
        });
      }
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    resize();

    // Initialize points with a trail - fewer points on mobile for performance
    const isMobile = window.innerWidth < 768;
    const pointCount = isMobile ? 15 : 35;
    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    for (let i = 0; i < pointCount; i++) {
      pointsRef.current.push({ x: initialX, y: initialY });
    }

    const animate = (time: number) => {
      if (!ctx || !canvas) return;
      timeRef.current = time;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scrollDelta = scrollRef.current - lastScrollRef.current;
      lastScrollRef.current = scrollRef.current;

      // Target position
      const targetX = mouseRef.current.x;
      const targetY = mouseRef.current.y;

      // Update head point with easing
      const head = pointsRef.current[0];
      head.x += (targetX - head.x) * 0.12;
      head.y += (targetY - head.y) * 0.12;

      // Update trailing points with interpolation and scroll influence
      for (let i = 1; i < pointsRef.current.length; i++) {
        const p = pointsRef.current[i];
        const prev = pointsRef.current[i - 1];

        // Smooth interpolation - slightly slower for more fluid feel
        p.x += (prev.x - p.x) * 0.25;
        p.y += (prev.y - p.y) * 0.25;

        // Scroll influence: points "stay" in the world slightly
        const scrollInfluence = (1 - i / pointsRef.current.length) * 0.4;
        p.y -= scrollDelta * scrollInfluence;
      }

      // Draw the glowing path
      ctx.beginPath();
      ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y);

      // Use bezier curves for organic feel
      for (let i = 1; i < pointsRef.current.length - 2; i++) {
        const xc = (pointsRef.current[i].x + pointsRef.current[i + 1].x) / 2;
        const yc = (pointsRef.current[i].y + pointsRef.current[i + 1].y) / 2;
        ctx.quadraticCurveTo(pointsRef.current[i].x, pointsRef.current[i].y, xc, yc);
      }

      // Pulse effect based on time
      const pulse = Math.sin(time / 1000) * 0.2 + 0.8;

      // Style the line with a gradient
      const lastIdx = pointsRef.current.length - 1;
      const gradient = ctx.createLinearGradient(
        pointsRef.current[0].x, pointsRef.current[0].y,
        pointsRef.current[lastIdx].x, pointsRef.current[lastIdx].y
      );

      // Brand green: rgb(127, 191, 127)
      gradient.addColorStop(0, `rgba(127, 191, 127, ${0.8 * pulse})`);
      gradient.addColorStop(0.5, `rgba(127, 191, 127, ${0.4 * pulse})`);
      gradient.addColorStop(1, 'rgba(127, 191, 127, 0)');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Glow effect
      ctx.shadowBlur = 12;
      ctx.shadowColor = 'rgba(127, 191, 127, 0.5)';

      ctx.stroke();

      // Draw a small "head" point
      ctx.beginPath();
      ctx.arc(head.x, head.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(127, 191, 127, ${0.9 * pulse})`;
      ctx.fill();

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
});

// Subtle page-level background — soft gradient fade from near-dark to white as user scrolls
const Background = React.memo(() => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 5000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 1000], [0.15, 0.08]);

  // Mouse interaction for aurora blobs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 50, stiffness: 100 };
  const blobX = useSpring(mouseX, springConfig);
  const blobY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        const { clientX, clientY } = e;
        const moveX = (clientX - window.innerWidth / 2) / 25;
        const moveY = (clientY - window.innerHeight / 2) / 25;
        mouseX.set(moveX);
        mouseY.set(moveY);
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Very subtle brand glow that fades on scroll */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] rounded-full blur-[140px] will-change-transform"
        style={{ background: 'radial-gradient(ellipse, rgba(11, 107, 87, 0.04) 0%, transparent 70%)', opacity }}
      />
      <div className="absolute inset-0" style={{ background: '#FFFFFF' }} />
    </div>
  );
});

const Navbar = React.memo(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAboutPage = location.pathname === '/about';

  const scrollToSection = (id: string) => {
    if (isAboutPage) {
      navigate(`/#${id}`);
      // The hash navigation will be handled by the browser or a custom hook
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-4">
      <nav className="max-w-7xl mx-auto rounded-2xl px-4 sm:px-6 py-3 flex justify-between items-center transition-all duration-500 glass">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={ASSETS.brand.logoImage as string}
            alt="Credifide"
            className="h-8 sm:h-9 w-auto object-contain"
            loading="eager"
          />
        </Link>

        {/* Desktop Navigation */}
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
               <div className="bg-white border border-slate-100 rounded-2xl shadow-2xl p-4 w-72 backdrop-blur-xl">
                  <Link to="/services/insurance-credentialing" className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group/item">
                     <div className="w-10 h-10 rounded-lg bg-brand-deep/10 text-brand-deep flex items-center justify-center shrink-0">
                        <IconRenderer icon={ASSETS.features.shield} size={20} />
                     </div>
                     <div>
                        <div className="font-bold text-slate-900 text-sm mb-1 group-hover/item:text-brand-deep">Credentialing</div>
                        <p className="text-[11px] text-slate-500 leading-tight">Fast-tracked payer enrollment & compliance.</p>
                     </div>
                  </Link>
                  <Link to="/services/medical-billing" className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group/item">
                     <div className="w-10 h-10 rounded-lg bg-brand-light text-brand-deep flex items-center justify-center shrink-0">
                        <IconRenderer icon={ASSETS.ui.dollar} size={20} />
                     </div>
                     <div>
                        <div className="font-bold text-slate-900 text-sm mb-1 group-hover/item:text-brand-deep">Medical Billing</div>
                        <p className="text-[11px] text-slate-500 leading-tight">Optimized RCM and revenue recovery.</p>
                     </div>
                  </Link>
                  <div className="mt-2 pt-2 border-t border-slate-50 px-4">
                     <Link to="/services" className="text-[11px] font-bold text-slate-400 hover:text-brand-deep transition-colors flex items-center gap-1">
                        View All Services
                        <IconRenderer icon={ASSETS.nav.arrowRight} size={10} />
                     </Link>
                  </div>
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
               <div className="bg-white border border-slate-100 rounded-2xl shadow-2xl p-4 w-64 backdrop-blur-xl">
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

        <div className="hidden md:flex items-center gap-6">
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
        <div className="lg:hidden flex items-center gap-4">
           {/* Simple mobile menu logic could be added here, but preserving existing UI for now */}
           <button className="p-2 text-slate-900" aria-label="Menu">
             <IconRenderer icon={ASSETS.nav.menu} size={24} />
           </button>
        </div>
      </nav>
    </header>
  );

});

const Hero = React.memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    let W = 0, H = 0;
    const resize = () => {
      W = canvas.offsetWidth; H = canvas.offsetHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);
    const N = 55;
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * 1920, y: Math.random() * 900,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.4, o: Math.random() * 0.4 + 0.15,
    }));
    const draw = () => {
      if (!W || !H) { rafRef.current = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, W, H);
      const grd = ctx.createRadialGradient(mouseRef.current.x, mouseRef.current.y, 0, mouseRef.current.x, mouseRef.current.y, 280);
      grd.addColorStop(0, 'rgba(127,191,127,0.06)'); grd.addColorStop(1, 'transparent');
      ctx.fillStyle = grd; ctx.fillRect(0, 0, W, H);
      pts.forEach(p => {
        p.x += p.vx + (mouseRef.current.x - W / 2) * 0.00006;
        p.y += p.vy + (mouseRef.current.y - H / 2) * 0.00006;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(127,191,127,${p.o})`; ctx.fill();
      });
      for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < 110) {
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(127,191,127,${0.07 * (1 - d / 110)})`; ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    const onMouse = (e: MouseEvent) => { const r = canvas.getBoundingClientRect(); mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top }; };
    window.addEventListener('mousemove', onMouse);
    draw();
    return () => { window.removeEventListener('resize', resize); window.removeEventListener('mousemove', onMouse); cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden bg-white" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Mesh gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div animate={{ x: [0, 50, 0], y: [0, 30, 0] }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[-10%] left-[-5%] w-[55%] h-[55%] rounded-full blur-[130px] will-change-transform"
          style={{ background: 'rgba(11, 107, 87, 0.05)' }} />
        <motion.div animate={{ x: [0, -35, 0], y: [0, 50, 0] }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-[-10%] right-[-5%] w-[55%] h-[55%] rounded-full blur-[150px] will-change-transform"
          style={{ background: 'rgba(127, 191, 127, 0.05)' }} />
      </div>
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(11, 107, 87, 1) 1px,transparent 1px),linear-gradient(90deg,rgba(11, 107, 87, 1) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #ffffff)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 pb-16 lg:pt-16 lg:pb-24">
        <PhysicsBody id="hero-badge" className="inline-block mb-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-brand-deep/20 bg-brand-light text-brand-deep text-sm font-bold backdrop-blur-sm shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-brand-deep animate-pulse" />
            Trusted by 500+ Healthcare Providers
          </motion.span>
        </PhysicsBody>

        <PhysicsBody id="hero-title" className="mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-black tracking-tight leading-[1.05] text-slate-900">
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }} className="block">
              Get Credentialed
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }} className="block relative">
              <span className="text-brand-deep">Faster.</span>{' '}
              Get Paid{' '}
              <span className="relative inline-block">
                Sooner.
                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1, duration: 1.2, ease: 'circOut' }}
                  className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-accent to-transparent origin-left" />
              </span>
            </motion.span>
          </h1>
        </PhysicsBody>

        <PhysicsBody id="hero-desc" className="mb-12">
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-slate-500">
            Credifide helps healthcare providers get credentialed, contracted, and reimbursed faster without delays or confusion.
          </motion.p>
        </PhysicsBody>

        <PhysicsBody id="hero-cta-primary">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link to="/contact"
              className="px-10 py-5 bg-brand-deep text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-deep/20 hover:bg-brand-600 transition-all flex items-center gap-2 group w-full sm:w-auto justify-center">
              Request a Consultation
              <IconRenderer icon={ASSETS.nav.arrowRight} size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </PhysicsBody>
      </div>

      {/* Scroll cue */}
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 will-change-transform">
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-slate-500 to-transparent" />
      </motion.div>
    </section>
  );
});

interface ServiceIllustrationProps {
  id: string;
  icon: any;
}

const ServiceIllustration = React.memo(({ id, icon: Icon }: ServiceIllustrationProps) => {
  if (id === "feat-1") {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Document Base */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
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
          animate={{
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
  const { icon: Icon, title, desc, id, color } = service;

  return (
    <section
      className={`h-[80vh] lg:h-[90vh] lg:sticky flex items-center ${color} border border-slate-200/50 py-12 lg:py-0 rounded-[28px] lg:rounded-[48px] mx-3 lg:mx-8 overflow-hidden`}
      style={{
        zIndex: index + 10,
        top: `${72 + index * 32}px`,
        marginBottom: index === 2 ? '0' : '12vh',
        boxShadow: `0 ${24 + index * 8}px ${60 + index * 20}px rgba(0,0,0,${0.07 + index * 0.03})`,
      }}
    >
      {/* Background Grid Accent */}
      <div className="absolute inset-0 opacity-20 transition-opacity duration-1000 bg-grid-slate-100 rounded-[32px] lg:rounded-[60px] overflow-hidden" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
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
              className="text-3xl lg:text-6xl font-display font-bold leading-tight transition-colors duration-1000 text-slate-900 will-change-transform"
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
            <Link
              to="/contact"
              className="flex items-center gap-2 text-brand-deep font-bold text-base lg:text-lg hover:gap-4 transition-all group will-change-transform"
            >
              Learn more about this service
              <IconRenderer icon={ASSETS.nav.arrowRight} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-square max-w-md mx-auto will-change-transform"
            >
              <div className="relative h-full w-full group/card">
                {/* Main Card with Green Shadow */}
                <motion.div
                   className="saas-card p-8 lg:p-12 flex flex-col items-center justify-center text-center h-full relative shadow-2xl shadow-brand-deep/10 overflow-hidden group-hover/card:shadow-brand-deep/25 transition-all duration-500 bg-white border-brand-light"
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
  // Sequential reveal logic: 0-0.25, 0.3-0.55, 0.6-0.85
  const start = index * 0.28;
  const end = start + 0.25;

  // Smooth spring-based transforms
  const rawY = useTransform(scrollYProgress, [start, end], [300, 0]);
  const rawOpacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const rawScale = useTransform(scrollYProgress, [start, end], [0.85, 1]);

  const y = useSpring(rawY, { damping: 25, stiffness: 60 });
  const opacity = useSpring(rawOpacity, { damping: 35, stiffness: 80 });
  const scale = useSpring(rawScale, { damping: 25, stiffness: 60 });

  return (
    <motion.div
      style={{
        y,
        opacity,
        scale,
      }}
      className="w-full will-change-transform"
    >
      <PhysicsBody id={card.id} className="w-full h-full">
        <div className="saas-card p-8 flex flex-col items-start text-left h-full min-h-[380px] lg:min-h-[420px] overflow-hidden relative group/approach transition-colors duration-500 bg-white border-slate-200 will-change-transform">
          <div className={`${card.gradient} absolute inset-0 pointer-events-none opacity-60 transition-opacity duration-500 group-hover/approach:opacity-90`} />

          <div className="relative z-10 flex flex-col h-full">
            <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand-deep mb-6 shadow-inner group-hover/approach:scale-110 transition-transform duration-500 will-change-transform">
              <IconRenderer icon={card.icon} size={32} />
            </div>

            <h3 className="text-xl lg:text-2xl font-bold mb-4 leading-tight transition-colors duration-1000 text-slate-900">
              {card.title}
            </h3>

            <p className="text-sm lg:text-base leading-relaxed mb-6 flex-grow transition-colors duration-1000 text-slate-600">
              {card.desc}
            </p>

            <div className="pt-6 border-t w-full transition-colors duration-1000 border-slate-100">
              <p className="font-bold text-xs lg:text-sm leading-snug transition-colors duration-1000 text-slate-900">
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
      highlight: "Accuracy isn’t a goal. It’s built into the system.",
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
      icon: ASSETS.ui.users,
      title: "Full Transparency, Always",
      desc: "You always know what’s happening. Credifide provides clear status updates, documented progress, and visibility into every stage of credentialing and RCM.",
      highlight: "No black boxes. No unanswered questions. Just clear information.",
      gradient: "saas-card-gradient-4"
    }
  ];

  return (
    <section id="approach" ref={containerRef} className="relative h-[200vh] bg-white z-20">
      {/* Sticky container with more top offset to avoid header (Navbar is h-20) */}
      <div className="sticky top-24 h-[calc(100vh-96px)] flex flex-col items-center justify-start overflow-hidden px-6 pt-6">
        {/* Background Gradient */}
        <div className="absolute inset-0 pointer-events-none transition-colors duration-1000 bg-gradient-to-b from-white via-brand-light to-white" />

        <div className="w-full max-w-7xl relative z-10">
          <div className="text-center mb-10">
            <PhysicsBody id="approach-badge" className="inline-block mb-3">
              <span className="text-brand-deep font-bold tracking-wider uppercase text-xs">Our Methodology</span>
            </PhysicsBody>
            <PhysicsBody id="approach-title" className="mb-3">
              <h2 className="text-3xl lg:text-5xl font-display font-bold transition-colors duration-1000 text-slate-900">
                Our Approach
              </h2>
            </PhysicsBody>
            <PhysicsBody id="approach-subtitle">
              <p className="max-w-2xl mx-auto text-base lg:text-lg transition-colors duration-1000 text-slate-500">
                A smarter, transparent, and automation-driven way to manage credentialing and revenue cycle operations.
              </p>
            </PhysicsBody>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
            {approachData.map((card, index) => (
              <ApproachCard
                key={card.id}
                card={card}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Spacer to ensure footer doesn't overlap sticky content at the end */}
      <div className="h-[20vh]" />
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
      color: "bg-white"
    },
    {
      id: "feat-2",
      icon: ASSETS.ui.activity,
      title: "Revenue Cycle Management",
      desc: "Maximize your revenue with our AI-driven RCM solutions. We identify gaps, reduce denials, and accelerate your reimbursement cycles.",
      color: "bg-white"
    },
    {
      id: "feat-3",
      icon: ASSETS.features.clock,
      title: "Billing Assessments",
      desc: "Stay compliant and secure with focused billing assessments. We uncover hidden risks and provide actionable insights for financial stability.",
      color: "bg-white"
    }
  ];

  return (
    <div id="features" className="relative">
      {/* Intro section for services */}
      <section className="py-20 lg:py-24 bg-white border-b transition-colors duration-1000 border-slate-100">
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
    <div className="flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default group mx-3 border bg-white border-slate-100 will-change-transform">
      <div className="text-brand-500 group-hover:scale-110 transition-transform will-change-transform">
        <IconRenderer icon={item.icon} size={24} />
      </div>
      <span className="font-medium whitespace-nowrap transition-colors duration-1000 text-slate-700">{item.name}</span>
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
      className="bg-white/70 backdrop-blur-2xl rounded-[48px] shadow-2xl shadow-slate-200/50 p-12 flex flex-col items-center text-center border border-white/80 relative overflow-hidden group h-full cursor-pointer will-change-transform"
    >
      {/* Top Avatar */}
      <div
        style={{ transform: "translateZ(50px)" }}
        className="relative mb-8"
      >
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
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
        <h4 className="font-bold text-slate-900 text-2xl mb-1 tracking-tight">{review.name}</h4>
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
          { id: 1, name: "Dr. Sarah L.", role: "Founder / CEO", rating: 5, text: "Huge Time Saver for My Mental Health Practice. I have been very happy with Credifide." },
          { id: 2, name: "Michael R.", role: "Medical Director", rating: 5, text: "I have been very happy with Credifide. They are very responsive and easy to work with." },
          { id: 3, name: "Dr. James Chen", role: "Practice Manager", rating: 5, text: "The RCM services provided by Credifide are top-notch. Significant reduction in denials." },
          { id: 4, name: "Emily Watson", role: "Operations Lead", rating: 5, text: "Credifide transformed our billing process. The automation is seamless and reliable." },
          { id: 5, name: "Dr. Robert King", role: "Clinical Specialist", rating: 5, text: "The most intuitive credentialing platform I've used. Highly recommend to any practice." },
          { id: 6, name: "Jessica Miller", role: "Office Administrator", rating: 5, text: "Customer support is exceptional. They really care about our success." },
          { id: 7, name: "Dr. David Wilson", role: "Solo Provider", rating: 5, text: "Finally, a solution that actually works for solo practitioners. Saved me hours of paperwork." },
          { id: 8, name: "Linda Garcia", role: "Billing Coordinator", rating: 5, text: "The transparency is refreshing. I can track every claim in real-time." },
          { id: 9, name: "Dr. Kevin Park", role: "Chief of Surgery", rating: 5, text: "The efficiency gains we've seen are remarkable. Credifide is a game-changer for hospital operations." },
          { id: 10, name: "Sarah Thompson", role: "HR Director", rating: 5, text: "Onboarding new providers has never been easier. The platform is intuitive and powerful." }
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
    <section id="reviews" className="bg-slate-50/30 py-20 lg:py-24 relative overflow-hidden">
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
            Discover what our satisfied customers have to say <br className="hidden md:block" /> about their experiences with our products/services.
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
                className="min-w-[400px] max-w-[400px] select-none"
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
                <span>TrustScore 4.9</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-slate-500 font-medium">128 reviews</span>
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
    <section id="contact" className="relative py-20 lg:py-24 overflow-hidden bg-white">
      {/* Futuristic Background */}
      <div className="absolute inset-0 transition-colors duration-1000 bg-white" />
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
          className="rounded-[40px] overflow-hidden shadow-2xl border transition-colors duration-1000 bg-white border-slate-200"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left Side: Content */}
            <div className="p-8 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r transition-colors duration-1000 border-slate-100">
              <PhysicsBody id="contact-badge" className="inline-block mb-6">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border transition-colors duration-1000 bg-brand-light border-brand-deep/10 text-brand-deep w-fit font-bold">
                  <IconRenderer icon={ASSETS.ui.sparkles} size={14} />
                  <span className="text-xs tracking-wider uppercase">Get Started</span>
                </div>
              </PhysicsBody>

              <PhysicsBody id="contact-title" className="mb-6">
                <h2 className="text-4xl lg:text-6xl font-display font-bold leading-tight transition-colors duration-1000 text-slate-900">
                  Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-deep to-brand-accent">Credentialing</span> Journey Today
                </h2>
              </PhysicsBody>

              <PhysicsBody id="contact-subtitle" className="mb-10">
                <p className="text-lg leading-relaxed max-w-xl transition-colors duration-1000 text-slate-600">
                  Experience faster approvals, zero confusion, and complete visibility with AI-powered workflows built for healthcare providers.
                </p>
              </PhysicsBody>

              <div className="space-y-6">
                {[
                  { text: "98% Accuracy Rate", icon: ASSETS.ui.shieldCheck },
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
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-brand-light text-brand-deep group-hover:bg-brand-deep group-hover:text-white">
                      <IconRenderer icon={item.icon} size={20} />
                    </div>
                    <span className="font-bold transition-colors duration-1000 text-slate-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side: Interactive Form */}
            <div className="p-8 lg:p-16 relative transition-colors duration-1000 bg-slate-50/50">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
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
                <div className="h-full flex flex-col">
                  {/* Progress Indicator */}
                  <div className="flex items-center justify-between mb-12 relative">
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
                          <div className="grid grid-cols-2 gap-4">
                            {providerTypes.map((type) => (
                              <button
                                key={type}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, providerType: type });
                                  handleNext();
                                }}
                                className={`p-4 rounded-2xl border text-left transition-all duration-300 group ${formData.providerType === type
                                  ? 'bg-brand-deep/10 border-brand-deep text-brand-deep'
                                  : 'bg-white border-brand-light text-slate-500 hover:border-brand-accent hover:bg-brand-light/30'
                                  }`}
                              >
                                <div className={`w-8 h-8 rounded-lg mb-3 flex items-center justify-center transition-colors ${formData.providerType === type
                                  ? 'bg-brand-deep text-white'
                                  : 'bg-brand-light text-brand-deep/50 group-hover:bg-brand-accent group-hover:text-brand-deep'
                                  }`}>
                                  <IconRenderer icon={ASSETS.ui.users} size={16} />
                                </div>
                                <span className="font-bold text-sm tracking-tight">{type}</span>
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
                                className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between group ${formData.serviceNeeded === service
                                  ? 'bg-brand-deep/10 border-brand-deep text-brand-deep font-bold'
                                  : 'bg-white border-brand-light text-slate-500 hover:border-brand-accent hover:bg-brand-light/30'
                                  }`}
                              >
                                <div className="flex items-center gap-4">
                                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${formData.serviceNeeded === service
                                    ? 'bg-brand-deep text-white'
                                    : 'bg-brand-light text-brand-deep/50 group-hover:bg-brand-accent group-hover:text-brand-deep'
                                    }`}>
                                    <IconRenderer icon={ASSETS.features.zap} size={18} />
                                  </div>
                                  <span className="font-bold tracking-tight">{service}</span>
                                </div>
                                <IconRenderer icon={ASSETS.ui.chevronRight} size={18} className={formData.serviceNeeded === service ? 'text-brand-deep' : 'text-slate-400'} />
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
    { name: "Orthopedic", icon: ASSETS.specialties.orthopedics },
    { name: "Mental Health", icon: ASSETS.specialties.mentalHealth },
    { name: "Tele Health", icon: ASSETS.specialties.telehealth },
    { name: "Physical Therapy", icon: ASSETS.specialties.physicalTherapy },
    { name: "Cardiology", icon: ASSETS.specialties.cardiology },
    { name: "Internal Medicine", icon: ASSETS.specialties.general },
    { name: "Dentistry", icon: ASSETS.specialties.dentistry },
    { name: "Laboratory", icon: ASSETS.specialties.dermatology },
  ];

  const row2 = [
    { name: "Urology", icon: ASSETS.specialties.urology },
    { name: "Neurology", icon: ASSETS.features.zap },
    { name: "Lactation Consultant", icon: ASSETS.specialties.pediatrics },
    { name: "Home Care", icon: ASSETS.specialties.homeHealth },
    { name: "Medical Equipment", icon: ASSETS.specialties.pharmacy },
    { name: "OBGYN", icon: ASSETS.ui.userPlus },
    { name: "Urgent Care", icon: ASSETS.features.clock },
    { name: "General Practice", icon: ASSETS.features.check },
  ];

  return (
    <section id="specialties" className="py-16 lg:py-20 bg-white overflow-hidden relative">
      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none transition-colors duration-1000 bg-gradient-to-r from-slate-50 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none transition-colors duration-1000 bg-gradient-to-l from-slate-50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-block mb-4">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-xs">Our Coverage</span>
        </div>
        <div className="mb-4">
          <h2 className="text-4xl lg:text-5xl font-display font-bold transition-colors duration-1000 text-slate-900">
            Specialties We Support
          </h2>
        </div>
        <div>
          <p className="max-w-2xl mx-auto text-lg transition-colors duration-1000 text-slate-500">
            Supporting a broad range of healthcare disciplines with tailored solutions.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 pause-on-hover">
        {/* Row 1: Scrolls Left */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-marquee-left">
            {[...row1, ...row1, ...row1, ...row1].map((item, i) => (
              <SpecialtyCard key={`r1-${i}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2: Scrolls Right */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-marquee-right">
            {[...row2, ...row2, ...row2, ...row2].map((item, i) => (
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
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-brand-100 selection:text-brand-700">
      <ScrollToTop />
      <CursorFollower />
      <PhysicsWorld>
        <Background />
        <div className="relative">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/insurance-credentialing" element={<InsuranceCredentialing />} />
            <Route path="/services/medical-billing" element={<MedicalBilling />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/blog" element={<Blog />} />
            <Route path="/resources/white-papers" element={<WhitePapers />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<Home />} />
          </Routes>

          {/* Sticky Mobile CTA */}
          <div className="md:hidden fixed bottom-6 left-6 right-6 z-[60]">
             <Link to="/contact" className="w-full bg-brand-deep text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-2xl shadow-brand-deep/40 active:scale-95 transition-transform">
                Book Free Consultation
                <IconRenderer icon={ASSETS.nav.arrowRight} size={18} />
             </Link>
          </div>

          <footer className="bg-[#0B302B] py-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="flex flex-col items-center">
                {/* Logo Section */}
                <div className="mb-10">
                   <Link to="/" className="flex items-center">
                     <img
                       src="https://credifide.com/wp-content/uploads/2025/03/Final-Logo2-3-26.png"
                       alt="Credifide"
                       className="h-10 sm:h-12 w-auto object-contain"
                       loading="lazy"
                     />
                   </Link>
                </div>

                {/* Primary Links */}
                <nav className="flex flex-wrap justify-center gap-x-10 gap-y-6 mb-12 text-lg font-bold text-brand-100/90">
                   <Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link>
                   <Link to="/resources/blog" className="hover:text-brand-accent transition-colors">Blog</Link>
                   <Link to="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link>
                   <Link to="/terms" className="hover:text-brand-accent transition-colors">Terms & Conditions</Link>
                   <Link to="/contact" className="hover:text-brand-accent transition-colors">Contact Us</Link>
                </nav>

                {/* Info Bar */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 py-10 border-t border-white/10">
                   <a href="tel:+13215240606" className="text-brand-100 text-xl font-bold hover:text-brand-accent transition-colors">
                      +1-321-524-0606
                   </a>

                   <div className="flex gap-8">
                      {[ASSETS.social.facebook, ASSETS.social.instagram, ASSETS.social.twitter, ASSETS.social.linkedin].map((social, idx) => (
                        <div key={idx} className="text-brand-100/60 hover:text-brand-accent transition-colors cursor-pointer">
                          <IconRenderer icon={social} size={24} />
                        </div>
                      ))}
                   </div>

                   <a href="mailto:connect@credifide.com" className="text-brand-100 text-xl font-bold hover:text-brand-accent transition-colors">
                      connect@credifide.com
                   </a>
                </div>
              </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-[#0D3B35] py-5 text-center">
               <p className="text-xs uppercase font-black tracking-[0.2em] text-brand-accent/80">
                  © 2026 <span className="text-white">Credifide</span>, All Rights Reserved
               </p>
            </div>
          </footer>

        </div>
      </PhysicsWorld>
    </div>
  );
}
