import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Clock, 
  BarChart3, 
  ArrowRight,
  Mail,
  Phone,
  MessageCircle,
  Users,
  X
} from 'lucide-react';
import { ASSETS } from '../constants';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-light selection:text-brand-deep">
      {/* MINIMAL NAVBAR (LOGO ONLY) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://credifide.com/wp-content/uploads/2025/03/Final-Logo2-3-26.png" 
              alt="Credifide Logo" 
              className="h-10 w-auto object-contain"
            />
          </Link>
          <div className="hidden md:block">
            <a 
              href="#contact-form" 
              className="bg-brand-deep text-white px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-brand-deep/20"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] rounded-full blur-[120px] bg-brand-light/20 -z-10" />
            <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full blur-[120px] bg-brand-accent/10 -z-10" />
          </div>

          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light/50 border border-brand-light text-brand-deep text-sm font-bold mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-deep opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-deep"></span>
                </span>
                Optimized Revenue Cycle Management
              </div>

              <h1 className="text-5xl md:text-7xl font-display font-black text-slate-950 mb-8 leading-[1.1]">
                Stop Losing <span className="text-brand-deep bg-clip-text text-transparent bg-gradient-to-r from-brand-deep to-brand-accent">Revenue</span> to <br />
                Credentialing Delays.
              </h1>
              <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                We handle the heavy lifting of Medical Billing and Payer Enrollment so you can focus on patient care. Achieve up to 98% accuracy and 35% faster approvals.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="#contact-form" 
                  className="w-full sm:w-auto bg-brand-deep text-white px-10 py-5 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-brand-deep/30 transition-all flex items-center justify-center gap-2"
                >
                  Book Free Consultation
                  <ArrowRight size={20} />
                </a>
                <Link 
                  to="/services" 
                  className="w-full sm:w-auto bg-brand-light/40 text-brand-deep border border-brand-light px-10 py-5 rounded-2xl font-black text-lg hover:bg-brand-light/60 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROBLEM → SOLUTION FLOW */}
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-black mb-6">Why High-Performing Clinics <span className="text-brand-deep">Choose Us</span></h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">Modern healthcare requires modern efficiency. We solve the bottlenecks that drain your practice's time and money.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Problem List */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:border-red-100/50 transition-colors">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <X size={80} className="text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center font-black">!</span>
                    The Problem
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      Endless credentialing delays stalling provider revenue.
                    </li>
                    <li className="flex items-center gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      Persistent claim denials and billing inaccuracies.
                    </li>
                    <li className="flex items-center gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      Administrative burn-out and compliance risks.
                    </li>
                  </ul>
                </div>

                <ArrowRight className="mx-auto text-brand-deep animate-float rotate-90 md:rotate-0" size={32} />

                <div className="bg-white p-8 rounded-3xl border border-brand-light shadow-xl shadow-brand-deep/5 relative overflow-hidden group hover:border-brand-accent/50 transition-colors">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <CheckCircle2 size={80} className="text-brand-deep" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-brand-light text-brand-deep flex items-center justify-center">
                      <Zap size={20} />
                    </span>
                    The Solution
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-deep" />
                      Accelerated workflows for <Link to="/services/insurance-credentialing" className="text-brand-deep font-bold hover:underline">faster payer enrolment</Link>.
                    </li>
                    <li className="flex items-center gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-deep" />
                      AI-enhanced <Link to="/services/medical-billing" className="text-brand-deep font-bold hover:underline">medical billing</Link> with 99.9% clean claims.
                    </li>
                    <li className="flex items-center gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-deep" />
                      Complete compliance with automated audit trails.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Benefits Visual */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Onboarding Speed", value: "35% Faster", icon: Clock },
                  { label: "Claim Accuracy", value: "98% Rate", icon: ShieldCheck },
                  { label: "Revenue Growth", value: "15% Increase", icon: BarChart3 },
                  { label: "Active Clients", value: "500+", icon: Users },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 text-center flex flex-col items-center justify-center gap-2 hover:shadow-lg transition-all duration-500">
                    <item.icon className="text-brand-deep mb-2" size={24} />
                    <div className="text-2xl font-black text-slate-900">{item.value}</div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-display font-black mb-16 underline decoration-brand-accent/30 decoration-8 underline-offset-8">Proven Results</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 rounded-[40px] bg-brand-deep text-white text-left relative group">
                <blockquote className="text-2xl font-medium mb-8 leading-relaxed italic">
                   "Credifide transformed our RCM in less than 90 days. Our credentialing delays—which were costing us thousands—simply disappeared."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center font-black text-brand-accent">JD</div>
                  <div>
                    <div className="font-bold">Dr. James David</div>
                    <div className="text-brand-accent text-sm">Managing Partner, HealthGrid</div>
                  </div>
                </div>
              </div>

              <div className="p-10 rounded-[40px] bg-brand-light/30 border border-brand-light text-slate-900 text-left relative group">
                <blockquote className="text-2xl font-medium mb-8 leading-relaxed italic">
                   "The billing accuracy is unmatched. We saw a 22% drop in denials within the first month of switching to their automated workflows."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-deep flex items-center justify-center font-black text-white">MK</div>
                  <div>
                    <div className="font-bold">Mary Katherine</div>
                    <div className="text-brand-deep text-sm">Clinic Administrator, MedLink</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LEAD CAPTURE SECTION */}
        <section id="contact-form" className="py-24 bg-white relative">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-slate-50 rounded-[40px] p-8 md:p-16 border border-slate-100 shadow-2xl relative">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-display font-black mb-4">Start Your <span className="text-brand-deep">Recovery</span></h2>
                <p className="text-slate-500">Fill out the form below and our specialists will reach out within 24 hours.</p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-deep/20 focus:border-brand-deep transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@clinic.com" 
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-deep/20 focus:border-brand-deep transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+1 (555) 000-0000" 
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-deep/20 focus:border-brand-deep transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Service Interest</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-deep/20 focus:border-brand-deep transition-all appearance-none cursor-pointer">
                      <option>Insurance Credentialing</option>
                      <option>Medical Billing</option>
                      <option>Full RCM Suite</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Professional Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your practice's current challenges..." 
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-deep/20 focus:border-brand-deep transition-all resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-brand-deep text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-brand-deep/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                   Book Free Consultation
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* STICKY MOBILE CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-[60]">
        <a 
          href="#contact-form" 
          className="w-full bg-brand-deep text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 shadow-2xl shadow-brand-deep/40 active:scale-95 transition-transform"
        >
          <MessageCircle size={18} />
          Book Consultation
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
