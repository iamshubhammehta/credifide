import React from 'react';
import { motion } from 'motion/react';
import { ASSETS, IconRenderer } from '../constants';
import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router-dom';

const Contact = () => {
  useSEO(
    'Contact Us | Credifide',
    'Get in touch with Credifide. Book a strategy call or contact our team to build your revenue engine and simplify your provider enrollment.'
  );

  return (
    <div className="pt-0 pb-16 lg:pb-20 bg-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] rounded-full blur-[120px] bg-brand-deep/5" />
         <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full blur-[120px] bg-brand-accent/5" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-10 pb-12 lg:pt-14 lg:pb-16 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-5 leading-tight">
              Let's Build Your <br />
              <span className="text-brand-deep">Revenue Engine</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              Trusted by healthcare providers nationwide. We're here to help you navigate the complexities of RCM and credentialing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="saas-card p-8 bg-white border-brand-light shadow-2xl shadow-brand-deep/5 group"
            >
              <div className="w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center mb-6 text-brand-deep border border-brand-accent/20 group-hover:bg-brand-accent transition-all duration-500">
                <IconRenderer icon={ASSETS.nav.phone} size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Call Us</h3>
              <p className="text-slate-500 mb-4 font-medium text-sm">Monday - Friday, 9am - 6pm EST</p>
              <a href="tel:+13215240606" className="text-lg font-bold text-brand-deep hover:text-brand-accent transition-colors block">
                +1-321-524-0606
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="saas-card p-8 bg-white border-brand-light shadow-2xl shadow-brand-deep/5 group"
            >
              <div className="w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center mb-6 text-brand-deep border border-brand-accent/20 group-hover:bg-brand-accent transition-all duration-500">
                <IconRenderer icon={ASSETS.nav.mail} size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Email Us</h3>
              <p className="text-slate-500 mb-4 font-medium text-sm">We'll respond within 24 hours</p>
              <a href="mailto:connect@credifide.com" className="text-lg font-bold text-brand-deep hover:text-brand-accent transition-colors block">
                connect@credifide.com
              </a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="saas-card p-8 md:p-10"
            >
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-5 py-3.5 rounded-[20px] border border-brand-light focus:outline-none focus:ring-4 focus:ring-brand-deep/5 focus:border-brand-deep transition-all bg-brand-light/20 text-slate-900 font-medium placeholder:text-slate-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-5 py-3.5 rounded-[20px] border border-brand-light focus:outline-none focus:ring-4 focus:ring-brand-deep/5 focus:border-brand-deep transition-all bg-brand-light/20 text-slate-900 font-medium placeholder:text-slate-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-5 py-3.5 rounded-[20px] border border-brand-light focus:outline-none focus:ring-4 focus:ring-brand-deep/5 focus:border-brand-deep transition-all bg-brand-light/20 text-slate-900 font-medium placeholder:text-slate-300"
                      placeholder="+1 (321) 000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Service Interested In</label>
                    <div className="relative">
                       <select className="w-full px-5 py-3.5 rounded-[20px] border border-brand-light focus:outline-none focus:ring-4 focus:ring-brand-deep/5 focus:border-brand-deep transition-all bg-brand-light/20 text-slate-900 font-medium appearance-none">
                         <option>Insurance Credentialing</option>
                         <option>Medical Billing</option>
                         <option>Revenue Cycle Management</option>
                         <option>Consulting</option>
                       </select>
                       <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <IconRenderer icon={ASSETS.ui.chevronDown} size={18} />
                       </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-5 py-3.5 rounded-[20px] border border-brand-light focus:outline-none focus:ring-4 focus:ring-brand-deep/5 focus:border-brand-deep transition-all bg-brand-light/20 text-slate-900 font-medium placeholder:text-slate-300"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-deep text-white font-bold py-4 rounded-2xl shadow-lg shadow-brand-deep/20 hover:bg-brand-600 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <IconRenderer icon={ASSETS.nav.arrowRight} size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section — Premium animated design matching About page */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[48px] overflow-hidden shadow-2xl shadow-brand-deep/20"
        >
          {/* Animated gradient BG */}
          <motion.div
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #0B6B57, #095646, #074235, #0B6B57)',
              backgroundSize: '300% 300%',
            }}
          />

          {/* Floating Orbs */}
          <motion.div
            animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-white/5 rounded-full blur-[100px] will-change-transform"
          />
          <motion.div
            animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-[-20%] right-[-10%] w-80 h-80 bg-brand-accent/20 rounded-full blur-[80px] will-change-transform"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[40%] left-[50%] w-64 h-64 bg-brand-light/10 rounded-full blur-[80px] will-change-transform"
          />

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />

          {/* Noise Texture */}
          <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

          <div className="relative z-10 py-20 px-8 lg:px-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm font-semibold mb-8"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-brand-400"
              />
              Let's Get Started
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight"
            >
              Ready to Optimize <br />
              <span className="text-brand-400">Your Practice?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-light/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Join hundreds of providers who have streamlined their operations with Credifide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5"
            >
              <Link
                to="/contact"
                className="px-10 py-5 bg-brand-accent text-brand-deep rounded-2xl font-bold text-lg shadow-2xl shadow-black/10 hover:scale-105 transition-all flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                Start Your Journey Today
                <IconRenderer icon={ASSETS.nav.arrowRight} size={20} />
              </Link>
              <div className="text-brand-light/60 text-sm flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border border-brand-light/30 flex items-center justify-center text-[10px]">✓</span>
                No commitment required
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
