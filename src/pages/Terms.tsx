import React from 'react';
import { motion } from 'motion/react';

import { useSEO } from '../hooks/useSEO';

const Terms = () => {
  useSEO(
    'Terms of Service | Credifide',
    'Read Credifide\'s terms of service governing the use of our healthcare credentialing and medical billing platform and services.',
    '/terms',
    undefined,
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Terms of Service — Credifide',
      'url': 'https://credifide.com/terms'
    }
  );
  return (
    <div className="pt-8 pb-32 px-4 sm:px-6 lg:px-8 bg-white selection:bg-brand-light selection:text-brand-deep relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full blur-[120px] bg-brand-deep/5" />
         <div className="absolute bottom-[10%] left-[10%] w-[40vw] h-[40vw] rounded-full blur-[120px] bg-brand-accent/5" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">Terms and Conditions</h1>
          <p className="text-slate-500 mb-16 font-medium">Last Updated: May 20, 2024</p>
          
          <div className="space-y-12 text-slate-600 leading-relaxed text-lg">
             <section className="space-y-6">
                <h2 className="text-2xl font-bold text-brand-deep">1. Acceptance of Terms</h2>
                <p>
                   By accessing and using the services provided by Credifide ("the Company," "we," "us," or "our"), you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                </p>
                <p>
                   These Terms apply to all visitors, users, and others who access or use our Website or Platform.
                </p>
             </section>

             <section className="space-y-6 border-t border-brand-light pt-12">
                <h2 className="text-2xl font-bold text-brand-deep">2. Description of Services</h2>
                <p>
                   Credifide provides healthcare Revenue Cycle Management (RCM), insurance credentialing, medical billing, and practice consulting services. Our services are designed to assist healthcare providers in streamlining their administrative operations and optimizing revenue collection.
                </p>
             </section>

             <section className="space-y-6 border-t border-brand-light pt-12">
                <h2 className="text-2xl font-bold text-brand-deep">3. User Obligations</h2>
                <p>
                   You agree to provide accurate, current, and complete information during the onboarding process and to maintain the security of any login credentials provided to you. You are responsible for all activities that occur under your account.
                </p>
             </section>

             <section className="space-y-6 border-t border-brand-light pt-12">
                <h2 className="text-2xl font-bold text-brand-deep">4. Payment and Billing</h2>
                <p>
                   Fees for our services are outlined in separate service agreements or proposals. Payments are due according to the terms specified in such agreements. Failure to pay may result in suspension or termination of services.
                </p>
             </section>

             <section className="space-y-6 border-t border-brand-light pt-12">
                <h2 className="text-2xl font-bold text-brand-deep">5. Confidentiality and Data Security</h2>
                <p>
                   We take the security of your data seriously and comply with HIPAA regulations where applicable. However, you acknowledge that no transmission of data over the internet can be guaranteed as 100% secure.
                </p>
             </section>

             <section className="space-y-6 border-t border-brand-light pt-12">
                <h2 className="text-2xl font-bold text-brand-deep">6. Limitation of Liability</h2>
                <p>
                   In no event shall Credifide be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the services or website.
                </p>
             </section>

             <section className="space-y-6 border-t border-brand-light pt-12">
                <h2 className="text-2xl font-bold text-brand-deep">7. Changes to Terms</h2>
                <p>
                   We reserve the right to modify these Terms at any time. We will notify users of any significant changes by posting the new Terms on this site. Your continued use of the services after such changes constitutes acceptance of the new Terms.
                </p>
             </section>

             <section className="space-y-6 border-t border-brand-light pt-12">
                <h2 className="text-2xl font-bold text-brand-deep">8. Contact Information</h2>
                <p>
                   If you have any questions about these Terms, please contact us at:
                </p>
                <div className="bg-brand-light p-8 rounded-[32px] border border-brand-accent/20 shadow-xl shadow-brand-deep/5 transition-all hover:border-brand-accent">
                   <p className="font-bold text-brand-deep mb-2 text-xl">Credifide Legal Department</p>
                   <p className="mb-2 font-medium">Email: <a href="mailto:legal@credifide.com" className="text-brand-deep hover:underline">legal@credifide.com</a></p>
                   <p className="font-medium">Phone: <a href="tel:+13215240606" className="text-brand-deep hover:underline">+1-321-524-0606</a></p>
                </div>
             </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;

