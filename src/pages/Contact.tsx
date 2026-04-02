import React from 'react';
import { motion } from 'motion/react';
import { ASSETS, IconRenderer } from '../constants';

const Contact = () => {
  return (
    <div className="pt-20 pb-32 bg-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] rounded-full blur-[120px] bg-brand-deep/5" />
         <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full blur-[120px] bg-brand-accent/5" />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="saas-card p-10 bg-brand-deep text-white shadow-2xl shadow-brand-deep/20 border-none relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-brand-accent group-hover:text-brand-deep transition-all duration-500">
                <IconRenderer icon={ASSETS.nav.phone} size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Call Us</h3>
              <p className="text-brand-100/70 mb-6 font-medium">Monday - Friday, 9am - 6pm EST</p>
              <a href="tel:+13215240606" className="text-2xl font-bold hover:text-brand-accent transition-colors block">
                +1-321-524-0606
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="saas-card p-10 bg-white border-brand-light shadow-2xl shadow-brand-deep/5 group"
            >
              <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center mb-8 text-brand-deep border border-brand-accent/20 group-hover:bg-brand-accent transition-all duration-500">
                <IconRenderer icon={ASSETS.nav.mail} size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Email Us</h3>
              <p className="text-slate-500 mb-6 font-medium">We'll respond within 24 hours</p>
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
              className="saas-card p-8 md:p-12"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 rounded-[20px] border border-brand-light focus:outline-none focus:ring-4 focus:ring-brand-deep/5 focus:border-brand-deep transition-all bg-brand-light/20 text-slate-900 font-medium placeholder:text-slate-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-6 py-4 rounded-[20px] border border-brand-light focus:outline-none focus:ring-4 focus:ring-brand-deep/5 focus:border-brand-deep transition-all bg-brand-light/20 text-slate-900 font-medium placeholder:text-slate-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-6 py-4 rounded-[20px] border border-brand-light focus:outline-none focus:ring-4 focus:ring-brand-deep/5 focus:border-brand-deep transition-all bg-brand-light/20 text-slate-900 font-medium placeholder:text-slate-300"
                      placeholder="+1 (321) 000-0000"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Service Interested In</label>
                    <div className="relative">
                       <select className="w-full px-6 py-4 rounded-[20px] border border-brand-light focus:outline-none focus:ring-4 focus:ring-brand-deep/5 focus:border-brand-deep transition-all bg-brand-light/20 text-slate-900 font-medium appearance-none">
                         <option>Insurance Credentialing</option>
                         <option>Medical Billing</option>
                         <option>Revenue Cycle Management</option>
                         <option>Consulting</option>
                       </select>
                       <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <IconRenderer icon={ASSETS.ui.chevronDown} size={18} />
                       </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all bg-slate-50/50"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-500/20 hover:bg-brand-600 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-48 mb-24">
        <div className="bg-brand-deep rounded-[48px] p-12 md:p-24 text-center overflow-hidden relative shadow-2xl shadow-brand-deep/20">
          <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-light/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
              Ready to Optimize <br />
              Your Practice?
            </h2>
            <p className="text-xl text-brand-100/70 mb-12 max-w-2xl mx-auto font-medium">
              Join hundreds of providers who have streamlined their operations with Credifide.
            </p>
            <button className="bg-white text-brand-deep px-12 py-5 rounded-2xl font-black text-lg hover:bg-brand-accent transition-all shadow-2xl shadow-black/10 active:scale-95 duration-300">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
