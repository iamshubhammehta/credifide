import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ASSETS, IconRenderer } from '../constants';

const WhitePapers = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState<any>(null);

  const whitePapers = [
    {
      id: 1,
      title: 'The Provider Enrollment Survival Guide (2024 Edition)',
      description: 'A comprehensive 45-page blueprint for navigating the complexities of payer enrollment and maintaining compliance across state lines.',
      image: 'https://images.unsplash.com/photo-1586769852044-692d6e37035/0?q=80&w=2070&auto=format&fit=crop',
      pages: 45,
      filesize: '4.2 MB'
    },
    {
      id: 2,
      title: 'Optimizing Revenue Cycle Management Performance',
      description: 'Master the metrics that matter. This white paper details how top-performing practices achieve 98% clean claim rates and reduced AR days.',
      image: 'https://images.unsplash.com/photo-1543269664-76bc3/216?q=80&w=2070&auto=format&fit=crop',
      pages: 32,
      filesize: '3.8 MB'
    },
    {
      id: 3,
      title: 'Healthcare Compliance & The Future of Billing',
      description: 'An executive analysis of current and upcoming regulatory changes and how they will shape the healthcare landscape through 2026.',
      image: 'https://images.unsplash.com/photo-1532012197367-e856ff/5e8?q=80&w=2070&auto=format&fit=crop',
      pages: 28,
      filesize: '2.5 MB'
    }
  ];

  const handleDownload = (paper: any) => {
    setSelectedPaper(paper);
    setShowModal(true);
  };

  return (
    <div className="pt-32 pb-48 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="text-center mb-24"
        >
          <span className="text-brand-500 font-bold uppercase tracking-widest text-sm mb-4 block">Premium Resources</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">Executive White Papers</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Deep-dive research and strategic guides for healthcare leaders seeking sustainable practice growth and peak operational performance.
          </p>
        </motion.div>

        {/* White Paper Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
           {whitePapers.map((paper, i) => (
              <motion.div
                 key={paper.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: i * 0.1 }}
                 className="saas-card group flex flex-col md:flex-row h-full bg-white border-brand-100 overflow-hidden"
              >
                 <div className="md:w-2/5 aspect-[4/5] md:aspect-auto relative overflow-hidden bg-slate-900">
                    <img 
                       src={paper.image} 
                       alt={paper.title} 
                       className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
                       loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-6 left-6 text-white group-hover:-translate-y-2 transition-transform duration-500">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-md border border-white/30 mb-2">
                           <IconRenderer icon={ASSETS.ui.fileText} size={20} />
                        </div>
                        <p className="text-xs font-bold uppercase tracking-widest opacity-80">{paper.pages} Pages • {paper.filesize}</p>
                    </div>
                 </div>

                 <div className="md:w-3/5 p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-500 transition-colors leading-tight">{paper.title}</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed">{paper.description}</p>
                    <button
                       onClick={() => handleDownload(paper)}
                       className="flex items-center justify-center gap-3 w-full bg-brand-deep text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-deep/20 hover:bg-brand-600 transition-all active:scale-95"
                    >
                       Download White Paper
                       <IconRenderer icon={ASSETS.nav.arrowRight} size={20} className="stroke-[3px]" />
                    </button>
                 </div>
              </motion.div>
           ))}
        </div>

        {/* Lead Capture Modal */}
        <AnimatePresence>
           {showModal && (
              <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
              >
                 <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    className="bg-white rounded-3xl w-full max-w-lg shadow-2xl relative overflow-hidden"
                 >
                    <button 
                       onClick={() => setShowModal(false)}
                       className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors z-10 p-2"
                    >
                       <IconRenderer icon={ASSETS.nav.close} size={24} />
                    </button>

                    <div className="p-10 pt-16 text-center">
                       <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-500 mb-6 mx-auto">
                          <IconRenderer icon={ASSETS.nav.mail} size={32} />
                       </div>
                       <h3 className="text-2xl font-bold text-slate-900 mb-4">Final Step</h3>
                       <p className="text-slate-500 mb-8">Enter your business email to receive the direct download link for <strong>"{selectedPaper?.title}"</strong>.</p>
                       
                       <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
                          <input
                             type="email"
                             required
                             placeholder="you@company.com"
                             className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all bg-slate-50/50 text-center"
                          />
                          <button
                             type="submit"
                             className="w-full bg-brand-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-500/20 hover:bg-brand-600 transition-all"
                          >
                             Send Download Link
                          </button>
                       </form>
                       <p className="text-xs text-slate-400 mt-6 leading-relaxed">By submitting, you agree to receive communications from Credifide. We never spam.</p>
                    </div>
                 </motion.div>
              </motion.div>
           )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WhitePapers;
