import React, { useState } from 'react';
import { Copy, CheckCircle2, Image as ImageIcon, Link as LinkIcon, ExternalLink, HardDrive } from 'lucide-react';

const BrandAssets: React.FC = () => {
  const [filename, setFilename] = useState('operational-intelligence.png');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedHtml, setCopiedHtml] = useState(false);

  // The base URL for the production site
  const BASE_URL = 'https://credifide.com/';

  const directUrl = `${BASE_URL}${filename.replace(/^\/+/, '')}`;
  const htmlSnippet = `<img src="${directUrl}" alt="Credifide Asset" style="max-width: 100%; height: auto;" />`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(directUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyHtml = () => {
    navigator.clipboard.writeText(htmlSnippet);
    setCopiedHtml(true);
    setTimeout(() => setCopiedHtml(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6 font-sans mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 border border-slate-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-brand-deep rounded-2xl flex items-center justify-center text-white shadow-lg">
              <HardDrive size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-black text-slate-900">Asset Link Generator</h1>
              <p className="text-slate-500 font-medium mt-1">Private tool for generating Gmail carousel and email image links.</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8 text-blue-800 text-sm leading-relaxed">
            <h3 className="font-bold flex items-center gap-2 mb-2">
              <ImageIcon size={18} /> How to add new images:
            </h3>
            <ol className="list-decimal pl-5 space-y-2 font-medium">
              <li>Save your images into the <code className="bg-blue-100 px-2 py-0.5 rounded text-blue-900 font-mono">public/</code> folder in this project on your computer.</li>
              <li>Commit and push the code to Vercel.</li>
              <li>Once deployed, type the exact filename or click a Quick Link below to get your absolute URLs!</li>
            </ol>
          </div>

          <div className="mb-6 flex flex-wrap gap-3">
            <span className="text-sm font-black text-slate-400 uppercase tracking-wider flex items-center mr-2">Quick Links:</span>
            <button 
              onClick={() => setFilename('operational-intelligence.png')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${filename === 'operational-intelligence.png' ? 'bg-brand-deep text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              Operational Intelligence Banner
            </button>
            <button 
              onClick={() => setFilename('credifide-logo-badge.png')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${filename === 'credifide-logo-badge.png' ? 'bg-brand-deep text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              Credifide Verified Badge
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-black text-slate-700 mb-2 uppercase tracking-wider">
                Type Your Filename
              </label>
              <div className="flex bg-slate-50 rounded-xl border border-slate-200 focus-within:border-brand-deep focus-within:ring-2 focus-within:ring-brand-deep/20 transition-all overflow-hidden">
                <div className="px-4 py-4 bg-slate-100 border-r border-slate-200 text-slate-500 font-bold select-none flex items-center">
                  credifide.com/
                </div>
                <input
                  type="text"
                  value={filename}
                  onChange={(e) => setFilename(e.target.value)}
                  placeholder="e.g. promotional-image.png"
                  className="w-full bg-transparent px-4 py-4 outline-none font-bold text-slate-800"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-10 border-t border-slate-100 pt-10">
              {/* Preview Box */}
              <div>
                <h3 className="text-sm font-black text-slate-700 mb-4 uppercase tracking-wider flex items-center gap-2">
                  <ImageIcon size={16} /> Local Image Preview
                </h3>
                <div className="bg-slate-100 rounded-2xl border border-slate-200 aspect-video flex items-center justify-center overflow-hidden p-4 relative group">
                  {filename ? (
                    <img 
                      src={`/${filename.replace(/^\/+/, '')}`} 
                      alt="Preview" 
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%2394a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>';
                        (e.target as HTMLImageElement).classList.add('opacity-50');
                      }}
                      onLoad={(e) => {
                        (e.target as HTMLImageElement).classList.remove('opacity-50');
                      }}
                    />
                  ) : (
                    <span className="text-slate-400 font-bold">No file typed</span>
                  )}
                  
                  <a href={directUrl} target="_blank" rel="noreferrer" className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-deep hover:text-white">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Copy Links Area */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-black text-slate-700 mb-3 uppercase tracking-wider flex items-center gap-2">
                    <LinkIcon size={16} /> Direct URL Link
                  </h3>
                  <div className="flex gap-2">
                    <input 
                      readOnly 
                      value={directUrl} 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono text-slate-600 outline-none"
                    />
                    <button 
                      onClick={handleCopyLink}
                      className="bg-brand-deep text-white px-5 rounded-xl font-bold hover:bg-brand-deep/90 transition-colors shrink-0 flex items-center justify-center w-[120px]"
                    >
                      {copiedLink ? <CheckCircle2 size={18} /> : 'Copy Link'}
                    </button>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">Paste this link into Gmail image URL fields.</p>
                </div>

                <div>
                  <h3 className="text-sm font-black text-slate-700 mb-3 uppercase tracking-wider flex items-center gap-2">
                    <Copy size={16} /> Rich HTML For Email
                  </h3>
                  <div className="relative">
                    <textarea 
                      readOnly 
                      value={htmlSnippet} 
                      rows={3}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono text-slate-600 outline-none resize-none"
                    />
                    <button 
                      onClick={handleCopyHtml}
                      className="absolute bottom-3 right-3 bg-slate-800 text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-700 transition-colors flex items-center gap-2"
                    >
                      {copiedHtml ? <CheckCircle2 size={14} /> : 'Copy HTML'}
                    </button>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">Paste this code if you use custom HTML email builders.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandAssets;
