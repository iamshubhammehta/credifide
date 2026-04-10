import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Shield, 
  Zap, 
  Clock, 
  Search, 
  Users, 
  Layers, 
  Award, 
  RefreshCw, 
  FileBarChart, 
  Handshake, 
  ClipboardList, 
  FileCheck,
  UserPlus,
  Sparkles
} from 'lucide-react';
import { ASSETS, IconRenderer } from '../constants';
import { useSEO } from '../hooks/useSEO';
import aboutMissionBranded from '../assets/about_mission_branded.png';

const ProviderEnrollmentV2: React.FC = () => {
  useSEO(
    'Payer & Provider Enrollment Services | Credifide',
    'Credifide offers provider enrollment services to help healthcare providers complete payer enrollment, reduce delays, and start billing insurance faster.'
  );

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1: HERO & ZOHO FORM */}
      <section className="relative pt-12 pb-0 lg:pt-16 lg:pb-0 overflow-hidden bg-slate-50/50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-light/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-brand-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-deep/5 text-brand-deep text-[10px] font-black uppercase tracking-widest mb-8 border border-brand-deep/10">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                Strategic Enrollment Partner
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-black text-slate-900 leading-[1.1] mb-8">
                Your All-in-One <br />
                <span className="text-brand-deep">Provider Enrollment</span> <br />
                and Credentialing Partner.
              </h1>
              
              <ul className="space-y-4 mb-10">
                {[
                  '98% First-Submission Accuracy',
                  '100% Real-Time Visibility',
                  'AI-Powered Precision',
                  '30% Faster Turnaround Times',
                  'Dedicated Credentialing Specialist',
                  'HIPAA-Compliant & Secure'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 font-bold">
                    <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-deep shrink-0">
                      <CheckCircle2 size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full"
            >
                <iframe 
                  aria-label='Book a Consultation with our experts' 
                  frameBorder="0" 
                  scrolling="no"
                  style={{ height: '1050px', width: '100%', border: 'none', overflow: 'hidden' }} 
                  src='https://forms.zohopublic.com/credifide1/form/BookaConsultationwithourexperts1/formperma/RIFpP_m9bbkkzpYAcOVv811Nx32ooYsAE17hBbEAdVU'
                  title="Zoho Contact Form"
                />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR SERVICES */}
      <section className="pt-0 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-4">Our Services</h2>
            <div className="w-20 h-1.5 bg-brand-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Primary Source Verification', icon: FileCheck },
              { title: 'Payer Enrollment', icon: UserPlus },
              { title: 'CAQH Profile Management', icon: Layers },
              { title: 'Initial Provider Credentialing', icon: Award },
              { title: 'Recredentialing Management', icon: RefreshCw },
              { title: 'Insurance Contracting Coordination', icon: FileBarChart },
              { title: 'Contract Rate Negotiation', icon: Handshake },
              { title: 'NPI Registration', icon: ClipboardList },
            ].map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100/50 hover:bg-white hover:shadow-2xl hover:shadow-brand-deep/5 transition-all duration-500 flex flex-col items-start h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-light/30 flex items-center justify-center text-brand-deep mb-8">
                  <s.icon size={28} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 leading-tight mb-4">{s.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CTA BLUE BANNER */}
      <section className="bg-brand-deep py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-10 leading-tight">
            Call Us Today to Schedule a Consultation
          </h2>
          <Link to="/contact" className="px-10 py-5 bg-brand-accent text-brand-deep rounded-2xl font-black text-lg hover:bg-white transition-all shadow-2xl shadow-black/20">
            Book A Strategy Call
          </Link>
        </div>
      </section>

      {/* SECTION 4: WHY CREDIFIDE */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-12">Why Credifide</h2>
              <div className="space-y-10">
                {[
                  { title: 'AI-Powered Precision', desc: 'AI-driven and automated workflows designed to minimize human error.', icon: Sparkles },
                  { title: 'Dedicated Specialists', desc: 'Dedicated Insurance Credentialing specialists on every account.', icon: Users },
                  { title: 'Radical Transparency', desc: 'Clear timelines and transparent communication at every stage.', icon: Search },
                  { title: 'Architectural Scale', desc: 'Scalable solutions for solo providers, groups, and organizations.', icon: Layers },
                  { title: 'Zero-Trust Security', desc: 'Secure, compliant systems built for healthcare operations.', icon: Shield }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-light/30 flex items-center justify-center text-brand-deep shrink-0">
                      <IconRenderer icon={item.icon} size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden grayscale brightness-90">
                 <img src={aboutMissionBranded} alt="Modern Office" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-brand-accent p-8 rounded-[2rem] shadow-2xl max-w-xs">
                 <p className="text-brand-deep font-black text-xl italic">"Precision at every step."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR PROCESS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-4">Our Process</h2>
            <div className="w-20 h-1.5 bg-brand-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-deep/5 -translate-y-1/2 z-0" />
            
            {[
              { step: '1', title: 'Credentialing Review', desc: 'We analyze your data for gaps and tracks progress with real-time updates.' },
              { step: '2', title: 'Application Submission', desc: 'We handle the entire application process for each health plan.' },
              { step: '3', title: 'Contracting Support', desc: 'Assisting in reviewing and negotiating your participation contract.' },
              { step: '4', title: 'Ongoing Support', desc: 'Remaining your partner beyond credentialing for all ongoing needs.' }
            ].map((p, i) => (
              <motion.div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 relative z-10 text-center shadow-lg shadow-brand-deep/5">
                <div className="w-12 h-12 rounded-full bg-brand-deep text-white flex items-center justify-center font-black mx-auto mb-6">
                  {p.step}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{p.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHO WE SUPPORT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { type: 'Physicians & Specialty Providers', desc: 'Less time chasing approvals. More time seeing patients. We handle the credentialing maze.' },
              { type: 'Medical groups & clinics', desc: 'Growing teams bring operational complexity. We bring structure, clarity, and consistency.' },
              { type: 'Behavioral & Telehealth', desc: 'Complex payer rules. Multi-state challenges. We navigate the nuances smoothly.' },
              { type: 'Multi-provider practices', desc: 'Managing multiple providers shouldn’t mean multiple headaches. Streamlined communication.' },
              { type: 'Healthcare startups', desc: 'Launching is hard. Backend operations shouldn’t slow you down. From first enrollment to operational setup.' }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-brand-light/20 flex flex-col items-start gap-6">
                 <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-deep">
                    <IconRenderer icon={ASSETS.ui.users} size={24} />
                 </div>
                 <h4 className="text-xl font-bold text-slate-900">{item.type}</h4>
                 <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: SPECIALTIES GRID */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-4">Specialties We Support</h2>
            <div className="w-20 h-1.5 bg-brand-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
             {[
               'Orthopedic', 'Mental Health', 'Tele Health', 'Physical Therapy', 'Cardiology',
               'Internal Medicine', 'Dentistry', 'Laboratory', 'Urology', 'Neurology',
               'Lactation Consultant', 'Home Care', 'Medical Equipment', 'OBGYN', 'Urgent Care'
             ].map((name, i) => (
                <div key={i} className="p-6 bg-white border border-slate-100 rounded-[2rem] flex flex-col items-center justify-center text-center gap-3">
                   <div className="w-10 h-10 bg-brand-light/30 rounded-xl flex items-center justify-center text-brand-deep">
                      <IconRenderer icon={ASSETS.features.shield} size={20} />
                   </div>
                   <span className="text-sm font-bold text-slate-900">{name}</span>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: STRATEGIC APPROACH */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-4xl font-display font-black text-slate-900 mb-10">How Credifide Approaches <br /> Insurance Credentialing</h2>
           <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>Credifide treats Insurance Credentialing as operational infrastructure, not administrative paperwork. Every credentialing workflow is structured, monitored, and governed from start to finish.</p>
              <p>We use automated workflows to guide each provider through payer-specific requirements while applying validation checks before submissions occur. This reduces preventable errors and minimizes back-and-forth with payers.</p>
              <p>Human expertise remains central to the process. Experienced credentialing specialists oversee each account to ensure accuracy, compliance, and appropriate escalation when needed.</p>
           </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="mb-24 px-6">
         <div className="max-w-7xl mx-auto rounded-[3.5rem] bg-[#0f3d3a] p-12 lg:p-24 overflow-hidden relative text-center">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="relative z-10">
               <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Schedule Your Free <br /> <span className="text-brand-accent">Consultation</span></h2>
               <p className="text-white/60 text-xl font-medium mb-12 max-w-2xl mx-auto">Join hundreds of medical groups using Credifide to reduce overhead and focus on patient care. Your revenue engine starts here.</p>
               <Link to="/contact" className="px-12 py-6 bg-white text-brand-deep rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-black/40 inline-flex items-center gap-3">
                  Book A Strategy Call
                  <ArrowRight size={24} />
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default ProviderEnrollmentV2;
