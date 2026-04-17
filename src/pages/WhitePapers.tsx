import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ASSETS, IconRenderer } from '../constants';

const WhitePapers = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState<any>(null);

  const whitePapers = [
    {
      id: 1,
      title: 'Insurance Credentialing in 2026: A Complete Guide',
      description: 'Credentialing is no longer a background process - it is a direct driver of provider activation speed, revenue flow, and compliance standing for healthcare organizations of every size. Drawing on industry benchmarks from MGMA and CAQH, this paper examines the forces reshaping provider enrollment and the operational strategies high-performing organizations use to scale.',
      additionalInfo: 'This whitepaper, "Insurance Credentialing in 2026: Industry Insights & Innovation," examines the forces reshaping provider enrollment today and the operational strategies that high-performing organizations are using to pull ahead. Drawing on industry benchmarks and data from MGMA, CAQH, and the AMA, it maps where credentialing stands in 2026 and where it is going. Designed for practice administrators, physicians, and healthcare founders, the paper delivers a practical framework for benchmarking credentialing maturity, evaluating the Build vs. Buy vs. Partner decision, and implementing the workflows and technologies that reduce turnaround times, prevent denials, and support sustainable growth.',
      gradient: 'from-[#3D5A54] to-[#8CB369]',
      date: 'March 18, 2026',
      pages: 42,
    },
    {
      id: 2,
      title: 'Outsourcing Credentialing for Multispecialty Clinics',
      description: 'As practices expand across specialties and payer networks, in-house credentialing often becomes fragmented and slow. This whitepaper explores operational inflection points where outsourcing becomes a strategic advantage. It provides a structured roadmap to evaluate readiness, identify bottlenecks, and implement scalable workflows.',
      additionalInfo: 'Scaling a multispecialty clinic requires more than just clinical excellence; it requires an administrative engine that can keep pace with growth. This research dive into clinical operations highlights the hidden costs of managing complex provider rosters in-house. We analyze the specific triggers - such as high denial rates, 90+ day delay cycles, and high staff turnover - that indicate it is time to transition to a specialized partner. Learn how top-tier groups are standardizing their workflows across 15+ specialties while maintaining 100% compliance transparency.',
      gradient: 'from-brand-deep to-brand-accent',
      date: 'January 29, 2026',
      pages: 38,
    }
  ];

  const handleDownload = (paper: any) => {
    setSelectedPaper(paper);
    setShowModal(true);
    // Lock scroll
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-[#3D5A54] py-16 lg:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
           }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight mb-4"
          >
            White Papers
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {whitePapers.map((paper, i) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handleDownload(paper)}
              >
                {/* Visual Cover using Gradients & Patterns */}
                <div className={`relative aspect-[16/10] rounded-[24px] overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all duration-500 bg-gradient-to-br ${paper.gradient} flex items-center justify-center`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full" style={{
                      backgroundImage: 'linear-gradient(45deg, white 25%, transparent 25%), linear-gradient(-45deg, white 25%, transparent 25%), linear-gradient(45deg, transparent 75%, white 75%), linear-gradient(-45deg, transparent 75%, white 75%)',
                      backgroundSize: '20px 20px',
                      backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                    }} />
                  </div>
                  <div className="relative z-10 text-center px-12">
                    <IconRenderer icon={ASSETS.ui.fileText} size={48} className="text-white/40 mb-4 mx-auto" />
                    <h4 className="text-white text-xl lg:text-2xl font-bold leading-tight">{paper.title}</h4>
                    <p className="text-white/60 text-xs mt-3 uppercase tracking-widest font-black">2026 Executive Report</p>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-white/90 backdrop-blur-sm text-[#3D5A54] text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg border border-white/50">
                      White Paper
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-left">
                  <p className="text-slate-400 text-sm font-medium mb-3">{paper.date}</p>
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-slate-900 group-hover:text-[#3D5A54] transition-colors leading-tight">
                    {paper.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center">
             <button className="bg-[#8CB369] hover:bg-[#7aa158] text-white font-bold px-10 py-4 rounded-xl transition-all shadow-lg shadow-[#8CB369]/20">
                Load More
             </button>
          </div>
        </div>
      </section>

      {/* Detail & Download Modal - Redesigned to match screenshot */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="bg-white rounded-[32px] w-full max-w-6xl shadow-2xl relative overflow-hidden my-auto"
            >
              <button 
                onClick={closeModal}
                className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors z-20 p-2 bg-white rounded-full shadow-md"
              >
                <IconRenderer icon={ASSETS.nav.close} size={24} />
              </button>

              <div className="flex flex-col lg:flex-row h-auto min-h-0">
                {/* Left: About Section */}
                <div className="lg:w-7/12 p-8 lg:p-16 overflow-y-auto max-h-[80vh] lg:max-h-none">
                  <h2 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
                    {selectedPaper?.title}
                  </h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                    {selectedPaper?.description}
                  </p>
                  <div className="space-y-6 text-slate-500 text-base leading-relaxed">
                    {selectedPaper?.additionalInfo.split('. ').map((sentence: string, i: number) => (
                      <p key={i}>{sentence}.</p>
                    ))}
                  </div>
                </div>

                {/* Right: Form Section (Matched to screenshot) */}
                <div className="lg:w-5/12 bg-slate-50 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="bg-white rounded-[24px] shadow-2xl overflow-hidden border border-slate-100">
                    <div className="bg-[#0B3D33] p-8 text-center">
                      <h3 className="text-white text-2xl font-bold mb-2">Download the White Paper</h3>
                      <p className="text-white/60 text-sm">Complete the form to get the White paper on your E-mail</p>
                    </div>
                    
                    <form className="p-8 space-y-5" onSubmit={(e) => { e.preventDefault(); closeModal(); }}>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-500 ml-1">First Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="First Name"
                            className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#8CB369] transition-all bg-white text-sm"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-500 ml-1">Last Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="Last Name"
                            className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#8CB369] transition-all bg-white text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 ml-1">Phone *</label>
                        <input
                          type="tel"
                          required
                          placeholder="Phone Number"
                          className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#8CB369] transition-all bg-white text-sm"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 ml-1">Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="Email Address"
                          className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#8CB369] transition-all bg-white text-sm"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 ml-1">Specialty *</label>
                        <input
                          type="text"
                          required
                          placeholder="Provider Specialty"
                          className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#8CB369] transition-all bg-white text-sm"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#0B3D33] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-black transition-all mt-4 uppercase tracking-widest text-xs"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-6 text-center leading-relaxed">
                    By submitting, you agree to receive communications from Credifide regarding this resource and our services.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhitePapers;

