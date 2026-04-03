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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-12 lg:pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
           {/* Refined Badge */}
           <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-brand-light bg-brand-light/30 text-brand-deep text-sm font-black uppercase tracking-[0.2em] mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-deep animate-pulse shadow-[0_0_8px_rgba(11,107,87,0.4)]" />
              Connect With Us
           </div>

          <h1 className="text-4xl md:text-7xl lg:text-7xl font-display font-black text-slate-900 mb-8 leading-[1.0] tracking-tighter">
            Let's Build Your <br />
            <span className="text-brand-deep">Revenue Engine</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Trusted by healthcare providers nationwide. We're here to help you navigate the complexities of RCM and credentialing.
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="saas-card p-8 bg-white border-brand-light shadow-2xl shadow-brand-deep/5 group flex-1"
            >
              <div className="w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center mb-6 text-brand-deep border border-brand-accent/20 group-hover:bg-brand-accent transition-all duration-500">
                <IconRenderer icon={ASSETS.nav.phone} size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Call Us</h3>
              <p className="text-slate-500 mb-5 font-medium text-sm">Monday - Friday, 9am - 6pm EST</p>
              <a href="tel:3215240606" className="text-xl font-bold text-brand-deep hover:underline transition-all">(321) 524-0606</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="saas-card p-8 bg-white border-brand-light shadow-2xl shadow-brand-deep/5 group flex-1"
            >
              <div className="w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center mb-6 text-brand-deep border border-brand-accent/20 group-hover:bg-brand-accent transition-all duration-500">
                <IconRenderer icon={ASSETS.nav.mail} size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Email Us</h3>
              <p className="text-slate-500 mb-5 font-medium text-sm">We'll respond within 24 hours.</p>
              <a href="mailto:connect@credifide.com" className="text-xl font-bold text-brand-deep hover:underline transition-all">connect@credifide.com</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="saas-card p-8 bg-white border-brand-light shadow-2xl shadow-brand-deep/5 group flex-1"
            >
              <div className="w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center mb-6 text-brand-deep border border-brand-accent/20 group-hover:bg-brand-accent transition-all duration-500">
                <IconRenderer icon={ASSETS.ui.target} size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Our Office</h3>
              <p className="text-slate-500 mb-1 font-medium text-sm leading-relaxed">407 E Ayre St #1480</p>
              <p className="text-slate-500 font-medium text-xs">Wilmington, DE 19804</p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="saas-card p-8 lg:p-14 bg-white border-brand-light shadow-2xl shadow-brand-deep/10 h-full flex flex-col"
            >
              <form className="space-y-7 flex-grow">
                <div className="grid md:grid-cols-2 gap-7">
                  <div className="space-y-2.5">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-brand-deep/5 focus:border-brand-deep transition-all font-medium bg-slate-50/30"
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-brand-deep/5 focus:border-brand-deep transition-all font-medium bg-slate-50/30"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-7">
                  <div className="space-y-2.5">
                    <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="(555) 000-0000"
                      className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-brand-deep/5 focus:border-brand-deep transition-all font-medium bg-slate-50/30"
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-sm font-bold text-slate-700 ml-1">Practice Name</label>
                    <input 
                      type="text" 
                      placeholder="Medical Group LLC"
                      className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-brand-deep/5 focus:border-brand-deep transition-all font-medium bg-slate-50/30"
                    />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <label className="text-sm font-bold text-slate-700 ml-1">Interested Services</label>
                  <select className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-brand-deep/5 focus:border-brand-deep transition-all font-medium appearance-none bg-slate-50/30">
                    <option>Insurance Credentialing</option>
                    <option>Medical Billing (RCM)</option>
                    <option>Both Services</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2.5 flex-grow">
                  <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                  <textarea 
                    rows={6}
                    placeholder="Tell us about your practice needs..."
                    className="w-full h-[calc(100%-40px)] px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-brand-deep/5 focus:border-brand-deep transition-all font-medium resize-none bg-slate-50/30"
                  ></textarea>
                </div>

                <button className="w-full py-6 bg-brand-deep text-white rounded-2xl font-bold text-xl hover:bg-brand-600 transition-all shadow-xl shadow-brand-deep/20 flex items-center justify-center gap-2 group mt-4">
                  Send Message
                  <IconRenderer icon={ASSETS.nav.arrowRight} size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-16 lg:mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative rounded-[40px] overflow-hidden shadow-2xl border border-brand-light shadow-brand-deep/10 aspect-[21/9] min-h-[400px]"
        >
           <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.189679168434!2d-75.5971488!3d39.713585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6f96614e5b72d%3A0xc34a8e6b9b3e9e1e!2s407%20E%20Ayre%20St%20%231480%2C%20Wilmington%2C%20DE%2019804%2C%20USA!5e0!3m2!1sen!2sin!4v1712160000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'opacity(0.9) contrast(1.1)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Credifide Office Location"
              className="absolute inset-0"
           />
           {/* Custom Overlay for modern look */}
           <div className="absolute inset-0 pointer-events-none border-[12px] border-white/40 rounded-[40px]" />
           <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.05)]" />
           
           {/* Floating Mini Badge */}
           <div className="absolute bottom-8 left-8 z-10 px-6 py-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-brand-light flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-deep text-white rounded-xl flex items-center justify-center">
                 <IconRenderer icon={ASSETS.ui.target} size={20} />
              </div>
              <div>
                 <div className="text-xs font-black uppercase tracking-widest text-brand-deep/60 mb-0.5">Headquarters</div>
                 <div className="text-sm font-bold text-slate-900">Wilmington, DE</div>
              </div>
           </div>
        </motion.div>
      </section>

      {/* CTA Section - Final Premium Section copied from About page style */}
      <section className="mt-20 lg:mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[48px] bg-brand-deep overflow-hidden p-12 lg:p-24 text-center">
            {/* Immersive background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-brand-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-brand-light/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-widest mb-8 backdrop-blur-md border border-white/20"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                Ready to Optimize?
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                Scale Your Practice with <br />
                <span className="text-brand-accent">Precision</span>
              </h2>
              
              <p className="text-xl text-brand-light/60 mb-12 font-medium leading-relaxed">
                Join hundreds of medical groups using Credifide to reduce overhead and focus on patient care. Your revenue engine starts here.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/contact" className="px-10 py-5 bg-white text-brand-deep rounded-2xl font-bold hover:scale-[1.05] transition-all shadow-2xl shadow-black/20 w-full sm:w-auto">
                  Book a Strategy Call
                </Link>
                <div className="flex items-center gap-3 text-white/60 font-medium">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-deep bg-slate-200" />
                    ))}
                  </div>
                  <span className="text-sm">Trusted by 500+ clinics</span>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
