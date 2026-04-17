import React from 'react';
import { motion } from 'motion/react';

const Privacy = () => {
  return (
    <div className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white selection:bg-brand-light selection:text-brand-deep relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] rounded-full blur-[120px] bg-brand-deep/5" />
         <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full blur-[120px] bg-brand-accent/5" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-500 mb-12 font-medium">Last Updated: May 20, 2024</p>
          
          <div className="space-y-10 text-slate-600 leading-relaxed text-lg">
             <section className="space-y-4">
                <h2 className="text-2xl font-bold text-brand-deep">1. Introduction</h2>
                <p>
                   At Credifide, we are committed to protecting the privacy and security of the information you share with us. This Privacy Policy describes how we collect, use, and share your personal information when you visit our website or use our services.
                </p>
                <p>
                   We understand the importance of data privacy, particularly in the healthcare industry, and we strive to handle all information with transparency and care.
                </p>
             </section>

             <section className="space-y-6 border-t border-brand-light pt-12">
                <h2 className="text-2xl font-bold text-brand-deep">2. Information We Collect</h2>
                <p>
                   We collect information that you provide directly to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                   <li>Request a consultation or information about our services</li>
                   <li>Complete forms on our website (e.g., download white papers, newsletter signups)</li>
                   <li>Interact with us via email, phone, or social media</li>
                   <li>Use our platform as a healthcare provider or practice manager</li>
                </ul>
                <p>
                   This information may include your name, email address, phone number, business address, and details about your healthcare practice and service interests.
                </p>
             </section>

             <section className="space-y-6 border-t border-brand-light pt-12">
                <h2 className="text-2xl font-bold text-brand-deep">3. How We Use Your Information</h2>
                <p>
                   We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                   <li>Provide, maintain, and improve our services</li>
                   <li>Process your requests and respond to your inquiries</li>
                   <li>Communicate with you about our services, updates, and promotions</li>
                   <li>Ensure compliance with healthcare regulations and legal obligations</li>
                   <li>Analyze website usage to optimize user experience</li>
                </ul>
             </section>

             <section className="space-y-6 border-t border-brand-light pt-12">
                <h2 className="text-2xl font-bold text-brand-deep">4. Sharing of Information</h2>
                <p>
                   We do not sell your personal information to third parties. We may share your information with service providers who perform work on our behalf, or when required by law or to protect our rights.
                </p>
             </section>

             <section className="space-y-6 border-t border-brand-light pt-12">
                <h2 className="text-2xl font-bold text-brand-deep">5. Data Security & HIPAA</h2>
                <p>
                   We implement appropriate technical and organizational measures to protect your information. For healthcare providers, we enter into Business Associate Agreements (BAAs) where applicable to ensure the protection of Protected Health Information (PHI) in compliance with HIPAA.
                </p>
             </section>

             <section className="space-y-6 border-t border-brand-light pt-12">
                <h2 className="text-2xl font-bold text-brand-deep">6. Cookies and Tracking</h2>
                <p>
                   We use cookies and similar technologies to enhance your experience on our website. You can control cookie settings through your browser.
                </p>
             </section>

             <section className="space-y-6 border-t border-brand-light pt-12">
                <h2 className="text-2xl font-bold text-brand-deep">7. Your Rights</h2>
                <p>
                   Depending on your location, you may have rights regarding your personal information, including the right to access, correct, or delete it. Please contact us to exercise these rights.
                </p>
             </section>

             <section className="space-y-6 border-t border-brand-light pt-12">
                <h2 className="text-2xl font-bold text-brand-deep">8. Contact Us</h2>
                <p>
                   If you have any questions or concerns regarding this Privacy Policy, please contact our Privacy Officer at:
                </p>
                <div className="bg-brand-light p-8 rounded-[32px] border border-brand-accent/20 shadow-xl shadow-brand-deep/5 transition-all hover:border-brand-accent">
                   <p className="font-bold text-brand-deep mb-2 text-xl">Credifide Privacy Office</p>
                   <p className="mb-2 font-medium">Email: <a href="mailto:privacy@credifide.com" className="text-brand-deep hover:underline">privacy@credifide.com</a></p>
                   <p className="font-medium">Phone: <a href="tel:+13215240606" className="text-brand-deep hover:underline">+1-321-524-0606</a></p>
                </div>
             </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;

