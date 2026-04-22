import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { ASSETS, IconRenderer } from '../constants';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { useAnimationSettings } from '../hooks/useAnimationSettings';
import aboutBeginning from '../assets/about_beginning.png';
import aboutInsight from '../assets/about_insight.png';
import aboutMissionBranded from '../assets/about_mission_branded.png';

// ─── Utility: Animate on scroll ───────────────────────────────────────────────
const FadeUp: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children, delay = 0, className = ''
}) => {
  const animations = useAnimationSettings();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: animations.isMobile ? 10 : 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ─── 1. HERO ──────────────────────────────────────────────────────────────────
const HeroSection: React.FC = () => {
  const animations = useAnimationSettings();

  return (
    <section className="relative flex flex-col bg-transparent pt-6 lg:pt-10 pb-0">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(127,191,127,1) 1px, transparent 1px),linear-gradient(90deg, rgba(127,191,127,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center pt-0 pb-2 sm:pt-2 sm:pb-4 lg:pt-4 lg:pb-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-brand-deep/20 bg-brand-light/30 text-brand-deep text-sm font-black uppercase tracking-[0.2em] mb-6 backdrop-blur-md shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-brand-deep animate-pulse" />
          Our Story
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[1.85rem] sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.05] tracking-tight mb-4 sm:mb-6"
        >
          We Build the{' '}
          <span className="text-brand-400">Infrastructure</span>
          <br />
          Healthcare Deserves
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-base sm:text-xl lg:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2"
        >
          Credifide was created to eliminate the invisible friction that keeps providers away from patients. We don't manage processes. We replace them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link
            to="/contact"
            className="px-9 py-4 bg-brand-deep text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-deep/20 hover:bg-brand-600 transition-all w-full sm:w-auto"
          >
            Book a Consultation
          </Link>
          <Link
            to="/services"
            className="flex items-center gap-2 text-slate-500 hover:text-brand-deep transition-colors cursor-default font-semibold"
          >
            Learn how it works
            <IconRenderer icon={ASSETS.nav.arrowRight} size={18} />
          </Link>
        </motion.div>

      </div>

      {/* Floating dashboard preview shifted down to separate section for better viewport management */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full pb-16">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 relative max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute -inset-6 rounded-[36px] bg-brand-500/10 blur-3xl pointer-events-none" />

            {/* Browser chrome */}
            <div className="bg-[#f5f6fa] border border-slate-200/60 rounded-[24px] shadow-[0_30px_80px_rgba(0,0,0,0.25)] overflow-hidden">

              {/* Title bar */}
              <div className="bg-white border-b border-slate-100 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex items-center gap-2">
                  <div className="flex-1 bg-slate-100 rounded-md h-6 flex items-center px-3 gap-2">
                    <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    <span className="text-[10px] text-slate-400 font-mono">app.credifide.com/dashboard</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-brand-500"
                  />
                  <span className="text-[10px] text-brand-600 font-semibold">Live</span>
                </div>
              </div>

              {/* Dashboard body */}
              <div className="flex" style={{ minHeight: '340px' }}>

                {/* Sidebar - hidden on very small screens */}
                <div className="w-36 bg-white border-r border-slate-100 flex-col py-4 px-3 gap-1 shrink-0 hidden sm:flex">
                  <div className="flex items-center gap-2 px-2 py-1.5 mb-3">
                    <div className="w-5 h-5 bg-brand-500 rounded-md" />
                    <span className="text-[11px] font-bold text-slate-800">Credifide</span>
                  </div>
                  {[
                    { label: 'Overview', active: true, dot: '#7FBF7F' },
                    { label: 'Credentialing', active: false, dot: null },
                    { label: 'Enrollment', active: false, dot: null },
                    { label: 'Revenue', active: false, dot: null },
                    { label: 'Analytics', active: false, dot: null },
                    { label: 'Settings', active: false, dot: null },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[10px] font-medium ${item.active ? 'bg-brand-50 text-brand-700' : 'text-slate-400'}`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${item.active ? 'bg-brand-500' : 'bg-slate-200'}`} />
                      {item.label}
                    </div>
                  ))}
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 px-2">
                      <div className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 text-[8px] font-bold">JD</div>
                      <div>
                        <p className="text-[8px] font-bold text-slate-700">Dr. James D.</p>
                        <p className="text-[7px] text-slate-400">Admin</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="flex-1 p-4 overflow-hidden">

                  {/* Header row */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-[11px] font-bold text-slate-800">Good morning, Dr. James</p>
                      <p className="text-[9px] text-slate-400">Here's what's happening today</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        className="w-5 h-5 bg-brand-50 rounded-md flex items-center justify-center relative"
                      >
                        <svg className="w-3 h-3 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-brand-500 rounded-full border border-white" />
                      </motion.div>
                    </div>
                  </div>

                  {/* KPI Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                    {[
                      { label: 'Total Apps', val: '248', change: '+12', up: true, color: '#7FBF7F' },
                      { label: 'Approved', val: '194', change: '+8', up: true, color: '#34d399' },
                      { label: 'In Review', val: '41', change: '-3', up: false, color: '#f59e0b' },
                      { label: 'Revenue', val: '$2.1M', change: '+18%', up: true, color: '#38bdf8' },
                    ].map((kpi, i) => (
                      <motion.div
                        key={kpi.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + i * 0.1 }}
                        className="bg-white rounded-xl p-2.5 border border-slate-100 shadow-sm"
                      >
                        <p className="text-[8px] text-slate-400 font-medium mb-1">{kpi.label}</p>
                        <p className="text-[14px] font-bold text-slate-800 leading-none mb-1">{kpi.val}</p>
                        <div className="flex items-center gap-1">
                          <span style={{ color: kpi.up ? '#22c55e' : '#ef4444' }} className="text-[8px] font-bold">{kpi.change}</span>
                          <svg className="w-2 h-2" style={{ color: kpi.up ? '#22c55e' : '#ef4444' }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d={kpi.up ? 'M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z' : 'M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'} clipRule="evenodd" />
                          </svg>
                          <span className="text-[7px] text-slate-400">vs last mo.</span>
                        </div>
                        <div className="mt-1.5 h-0.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            style={{ backgroundColor: kpi.color }}
                            className="h-full rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: i === 0 ? '80%' : i === 1 ? '65%' : i === 2 ? '40%' : '55%' }}
                            transition={{ delay: 1.6 + i * 0.1, duration: 0.8, ease: 'easeOut' }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Charts + Activity row */}
                  <div className="grid grid-cols-5 gap-2 mb-3">
                    {/* Revenue sparkline */}
                    <div className="col-span-3 bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="text-[9px] font-bold text-slate-700">Revenue Cycle</p>
                          <p className="text-[8px] text-slate-400">Last 8 months</p>
                        </div>
                        <span className="text-[8px] font-bold text-brand-600 bg-brand-50 px-1.5 py-0.5 rounded-full">+24%</span>
                      </div>
                      {/* SVG line chart */}
                      <svg viewBox="0 0 220 60" className="w-full" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#7FBF7F" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#7FBF7F" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <motion.path
                          d="M0 50 L28 42 L56 38 L84 30 L112 34 L140 18 L168 22 L196 10 L220 8"
                          fill="none"
                          stroke="#7FBF7F"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ delay: 1.8, duration: 1.5, ease: 'easeInOut' }}
                        />
                        <motion.path
                          d="M0 50 L28 42 L56 38 L84 30 L112 34 L140 18 L168 22 L196 10 L220 8 L220 60 L0 60 Z"
                          fill="url(#chartGrad)"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2.5, duration: 0.5 }}
                        />
                        {/* Data points */}
                        {[[0, 50], [28, 42], [56, 38], [84, 30], [112, 34], [140, 18], [168, 22], [196, 10], [220, 8]].map(([x, y], i) => (
                          <motion.circle
                            key={i}
                            cx={x} cy={y} r="2.5"
                            fill="white"
                            stroke="#7FBF7F"
                            strokeWidth="1.5"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 2.2 + i * 0.08 }}
                          />
                        ))}
                      </svg>
                      <div className="flex justify-between mt-1">
                        {['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'].map(m => (
                          <span key={m} className="text-[7px] text-slate-300">{m}</span>
                        ))}
                      </div>
                    </div>

                    {/* Pipeline donut */}
                    <div className="col-span-2 bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
                      <p className="text-[9px] font-bold text-slate-700 mb-2">Pipeline Status</p>
                      <div className="flex items-center justify-center mb-2">
                        <div className="relative w-16 h-16">
                          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                            <circle cx="18" cy="18" r="14" fill="none" stroke="#f1f5f9" strokeWidth="4" />
                            <motion.circle cx="18" cy="18" r="14" fill="none" stroke="#7FBF7F" strokeWidth="4" strokeDasharray="87.96" strokeDashoffset="87.96" strokeLinecap="round"
                              animate={{ strokeDashoffset: 22 }}
                              transition={{ delay: 2, duration: 1.2, ease: 'easeOut' }}
                            />
                            <motion.circle cx="18" cy="18" r="14" fill="none" stroke="#38bdf8" strokeWidth="4" strokeDasharray="87.96" strokeDashoffset="87.96" strokeLinecap="round"
                              animate={{ strokeDashoffset: 65 }}
                              transition={{ delay: 2.2, duration: 1, ease: 'easeOut' }}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[10px] font-bold text-slate-700">78%</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        {[
                          { label: 'Approved', pct: '78%', color: '#7FBF7F' },
                          { label: 'Pending', pct: '16%', color: '#38bdf8' },
                          { label: 'Denied', pct: '6%', color: '#f87171' },
                        ].map(s => (
                          <div key={s.label} className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                            <span className="text-[8px] text-slate-500 flex-1">{s.label}</span>
                            <span className="text-[8px] font-bold text-slate-700">{s.pct}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Provider table */}
                  <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="px-3 py-2 border-b border-slate-50 flex items-center justify-between">
                      <p className="text-[9px] font-bold text-slate-700">Recent Applications</p>
                      <span className="text-[8px] text-brand-600 font-semibold">View all</span>
                    </div>
                    <div className="divide-y divide-slate-50">
                      {[
                        { name: 'Dr. Sarah Mitchell', spec: 'Family Medicine', status: 'Approved', statusColor: '#22c55e', days: '18d' },
                        { name: 'Dr. James Carter', spec: 'Cardiology', status: 'In Review', statusColor: '#f59e0b', days: '32d' },
                        { name: 'Dr. Priya Sharma', spec: 'Telehealth', status: 'Submitted', statusColor: '#38bdf8', days: '7d' },
                      ].map((row, i) => (
                        <motion.div
                          key={row.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 2 + i * 0.15 }}
                          className="flex items-center gap-2 px-3 py-1.5"
                        >
                          <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[7px] font-bold text-slate-500 shrink-0">
                            {row.name.split(' ').map(n => n[0]).slice(1, 3).join('')}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[9px] font-semibold text-slate-700 truncate">{row.name}</p>
                            <p className="text-[7px] text-slate-400 truncate">{row.spec}</p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="text-[7px] text-slate-400">{row.days}</span>
                            <span
                              className="text-[7px] font-bold px-1.5 py-0.5 rounded-full"
                              style={{ backgroundColor: `${row.statusColor}15`, color: row.statusColor }}
                            >
                              {row.status}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right panel - notifications (hidden on mobile) */}
                <div className="w-32 bg-white border-l border-slate-100 flex-col py-4 px-3 shrink-0 hidden md:flex">
                  <p className="text-[8px] font-bold text-slate-500 uppercase tracking-wider mb-3">Notifications</p>
                  <div className="space-y-3 flex-1">
                    {[
                      { msg: 'BCBS approved Dr. Mitchell', time: '2m ago', color: '#22c55e' },
                      { msg: 'New document required for Dr. Carter', time: '18m ago', color: '#f59e0b' },
                      { msg: 'Dr. Sharma credentialing complete', time: '1h ago', color: '#7FBF7F' },
                      { msg: 'Claim #4821 submitted', time: '2h ago', color: '#38bdf8' },
                    ].map((n, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.2 + i * 0.15 }}
                        className="flex gap-2"
                      >
                        <div className="w-1 rounded-full shrink-0 mt-0.5" style={{ minHeight: '24px', backgroundColor: n.color }} />
                        <div>
                          <p className="text-[8px] text-slate-600 leading-tight">{n.msg}</p>
                          <p className="text-[7px] text-slate-400 mt-0.5">{n.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <p className="text-[8px] font-bold text-slate-500 uppercase tracking-wider mb-2">Today's Tasks</p>
                    {[
                      { task: 'Review denials', done: true },
                      { task: 'Upload CAQH docs', done: false },
                      { task: 'Follow up Aetna', done: false },
                    ].map((t, i) => (
                      <div key={i} className="flex items-center gap-1.5 mb-1.5">
                        <div className={`w-2.5 h-2.5 rounded-sm border flex items-center justify-center ${t.done ? 'bg-brand-500 border-brand-500' : 'border-slate-300'}`}>
                          {t.done && <svg className="w-1.5 h-1.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                        </div>
                        <span className={`text-[7px] ${t.done ? 'text-slate-300 line-through' : 'text-slate-600'}`}>{t.task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="bg-white border-t border-slate-100 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex items-center gap-1"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                    <span className="text-[8px] text-slate-500 font-medium">All systems operational</span>
                  </motion.div>
                </div>
                <div className="flex items-center gap-4">
                  {[
                    { label: 'Avg. Approval', val: '34d' },
                    { label: 'Denial Rate', val: '4.2%' },
                    { label: 'Collection Rate', val: '96%' },
                  ].map(s => (
                    <div key={s.label} className="text-center">
                      <p className="text-[9px] font-bold text-slate-700">{s.val}</p>
                      <p className="text-[7px] text-slate-400">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── 2. STORY SECTION ─────────────────────────────────────────────────────────
const StorySection: React.FC = () => {
  const animations = useAnimationSettings();
  const statements = [
    {
      label: 'The Beginning',
      title: 'Providers Deserved Better.',
      body: 'Healthcare providers were spending months waiting to get credentialed. Clinics were losing revenue not from bad medicine, but from broken administrative systems.',
      img: aboutBeginning
    },
    {
      label: 'The Insight',
      title: 'The Problem Was Systemic.',
      body: 'We realized the tools didn\'t exist. Spreadsheets, fax machines, siloed portals. None of it was designed for the pace modern healthcare demands.',
      img: aboutInsight
    },
    {
      label: 'The Mission',
      title: 'So We Built the System.',
      body: 'Credifide brings automation, intelligence, and real-time visibility to credentialing and RCM, so every provider can focus fully on patient care.',
      img: aboutMissionBranded
    },
  ];

  return (
    <section className="pt-4 pb-12 lg:pb-16 bg-transparent relative overflow-hidden">
      {/* Background accent - Hidden on mobile to prevent content obstruction */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-50/40 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 lg:px-6 relative">
        <FadeUp className="mb-8 lg:mb-16">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-xs sm:text-sm">Our Origin</span>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-display font-bold text-slate-900 mt-4 leading-tight tracking-tight">
            A story of <span className="text-brand-500">purpose</span>.
          </h2>
        </FadeUp>

        <div className="space-y-20 sm:space-y-32 lg:space-y-48">
          {statements.map((s, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className={`flex flex-col lg:flex-row items-center gap-10 sm:gap-16 lg:gap-24 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <div className="mb-6">
                    <span className="text-xs font-black tracking-widest uppercase text-brand-500">{s.label}</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 mb-6 sm:mb-8 leading-[1.1] tracking-tight">{s.title}</h3>
                  <p className="text-base sm:text-xl text-slate-500 leading-relaxed max-w-lg font-medium opacity-90">{s.body}</p>

                </div>

                <div className="w-full lg:w-1/2 h-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative rounded-[32px] sm:rounded-[48px] bg-brand-deep overflow-hidden shadow-2xl shadow-brand-deep/20 h-[320px] sm:h-[400px] lg:h-[500px] border border-white/10"
                  >
                    {/* Optimized Deep Green Base with reduced overhead */}
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#042F27] via-[#074F41] to-[#021F19]">
                      {/* Static Grid Backdrop - minimal performance hit */}
                      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

                      {/* Simplified Background blobs with reduced blur and hardware acceleration */}
                      <motion.div
                        animate={{ x: [0, 20, 0], opacity: [0.3, 0.4, 0.3] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        style={{ willChange: 'transform, opacity' }}
                        className="absolute top-1/4 left-1/4 w-3/4 h-3/4 bg-brand-accent/15 rounded-full blur-[80px]"
                      />
                      <motion.div
                        animate={{ y: [0, 20, 0], opacity: [0.2, 0.3, 0.2] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
                        style={{ willChange: 'transform, opacity' }}
                        className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-brand-light/15 rounded-full blur-[60px]"
                      />
                    </div>

                    {/* Foreground Image with overlay - lazy loading added */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                      <img
                        src={s.img}
                        alt={s.title}
                        loading="lazy"
                        className="w-full h-full object-cover opacity-25 mix-blend-soft-light transition-opacity duration-1000"
                      />

                      {/* Integrated Background Brand Mark (Visible only in Mission sector) */}
                      {i === 2 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 0.12, scale: 1 }}
                          transition={{ duration: 2, ease: "easeOut" }}
                          className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        >
                          <img
                            src={ASSETS.brand.logoImage}
                            alt="Credifide Logo Background"
                            className="w-[70%] brightness-0 invert grayscale opacity-40"
                          />
                        </motion.div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-[#021F19] via-transparent to-transparent opacity-90" />
                    </div>

                    {/* The requested "Ghost UI" Data Snippets */}
                    <div className="absolute inset-0 z-10 p-8 sm:p-12 pointer-events-none">
                      {i === 0 && ( /* THE BEGINNING - Ghost UI style */
                        <div className="h-full relative flex items-center justify-center">
                          {/* Card: Delay */}
                          <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            style={{ willChange: 'transform' }}
                            className="absolute top-4 left-4 sm:top-8 sm:left-8 w-32 sm:w-44 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl"
                          >
                            <div className="w-8 sm:w-10 h-1 sm:h-1.5 bg-red-500/40 rounded-full mb-2 sm:mb-3" />
                            <div className="flex items-center justify-between">
                              <div className="w-12 sm:w-16 h-1 bg-white/10 rounded-full" />
                              <span className="text-[8px] sm:text-[9px] font-black text-red-400/80 italic tracking-tight">DeLay +90d</span>
                            </div>
                          </motion.div>

                          {/* Card: Grid Content */}
                          <motion.div
                            animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                            className="absolute top-32 right-8 w-40 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-xl"
                          >
                            <div className="space-y-2">
                              <div className="w-full h-1 bg-white/10 rounded-full" />
                              <div className="w-3/4 h-1 bg-white/10 rounded-full" />
                              <div className="w-1/2 h-1 bg-white/5 rounded-full" />
                            </div>
                          </motion.div>

                          {/* Card: Security Shield */}
                          <motion.div
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            style={{ willChange: 'transform' }}
                            className="absolute bottom-8 left-8 w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-white/30 shadow-2xl"
                          >
                            <IconRenderer icon={ASSETS.features.shield} size={28} />
                          </motion.div>

                          <div className="w-10 h-1 bg-brand-accent/30 absolute bottom-6 left-8" />
                        </div>
                      )}

                      {i === 1 && ( /* THE INSIGHT - Scanning UI */
                        <div className="h-full relative flex items-center justify-center">
                          <div className="relative w-56 h-56 border border-white/10 rounded-full flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-2 sm:gap-3">
                              {[...Array(4)].map((_, idx) => (
                                <motion.div
                                  key={idx}
                                  animate={{ opacity: [0.2, 0.7, 0.2] }}
                                  transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.4 }}
                                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center"
                                >
                                  <div className="w-4 sm:w-5 h-1 bg-brand-accent/20 rounded-full" />
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          <div className="absolute top-6 right-6 bg-brand-deep/60 backdrop-blur-md border border-brand-accent/10 rounded-xl px-4 py-2">
                            <span className="text-[10px] font-black text-brand-accent/80 uppercase tracking-widest">Flow Analysis</span>
                          </div>
                        </div>
                      )}

                      {i === 2 && ( /* THE MISSION - Scaled Stack */
                        <div className="h-full relative flex items-center justify-center">
                          <div className="space-y-3 w-full max-w-[240px] relative z-10">
                            {[1, 2, 3].map(row => (
                              <motion.div
                                key={row}
                                initial={{ opacity: 0, x: -15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: row * 0.15 }}
                                className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-center justify-between"
                              >
                                <div className="flex items-center gap-3">
                                  <div className={`w-6 h-6 rounded ${row === 1 ? 'bg-brand-accent/80' : 'bg-white/10'} flex items-center justify-center text-white`}>
                                    <IconRenderer icon={ASSETS.features.check} size={14} />
                                  </div>
                                  <div className="w-20 h-1 bg-white/10 rounded-full" />
                                </div>
                                <div className="w-8 h-3 bg-brand-accent/10 rounded" />
                              </motion.div>
                            ))}
                          </div>
                          <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute bottom-10 right-0 bg-brand-accent text-brand-deep rounded-2xl px-5 py-3 shadow-2xl font-display font-black text-3xl"
                          >
                            +35%
                          </motion.div>
                        </div>
                      )}
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 z-20 p-8 lg:p-10 flex flex-col justify-end pointer-events-none">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-2xl rounded-xl border border-white/10 flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-brand-deep transition-all duration-700 shadow-2xl overflow-hidden relative">
                        <IconRenderer
                          icon={i === 0 ? ASSETS.features.shield : i === 1 ? ASSETS.ui.activity : ASSETS.features.zap}
                          size={24}
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-[1px] w-[30px] group-hover:w-[100px] bg-brand-accent transition-all duration-1000 opacity-70" />
                        <span className="text-white/20 text-[9px] font-black tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-x-[-10px] group-hover:translate-x-0">Phase 0{i + 1}</span>
                      </div>
                    </div>

                    {/* Milestone Number */}
                    <div className="absolute top-8 right-8 text-white/5 font-display text-[100px] font-black tracking-tighter italic select-none pointer-events-none group-hover:text-brand-accent/5 transition-colors duration-1000">
                      {i + 1}
                    </div>
                  </motion.div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── 3. PROBLEM → REALITY ─────────────────────────────────────────────────────
const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: ASSETS.ui.fileText, // Will be replaced by Churn custom SVG in render
      title: 'Process Churn',
      desc: 'Legacy systems create endless loops of re-entry and verification. Every redundant step is a potential failure point.',
      stat: '52%',
      statLabel: 'of admin time spent on re-work',
      type: 'churn'
    },
    {
      icon: ASSETS.ui.dollar,
      title: 'Revenue Leakage',
      desc: 'Claims denied due to credentialing gaps cost practices thousands monthly. Most never get recovered.',
      stat: '$262B',
      statLabel: 'in annual US denied claims',
      type: 'alert'
    },
    {
      icon: ASSETS.features.clock,
      title: 'Weeks of Delay',
      desc: 'Average credentialing takes 90-120 days. Every day waiting is a day a provider cannot bill for care.',
      stat: '90-120d',
      statLabel: 'manual cycle length',
      type: 'clock'
    },
    {
      icon: ASSETS.ui.search,
      title: 'Zero Visibility',
      desc: 'Providers have no idea where their application stands. Follow-ups are manual, slow, and unanswered.',
      stat: '1 in 3',
      statLabel: 'apps lost in carrier backlogs',
      type: 'search'
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-transparent relative overflow-hidden">
      {/* Optimized Background Decor */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-light/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-light/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 lg:px-6 relative">
        <FadeUp className="text-center mb-16 lg:mb-24 max-w-3xl mx-auto">
          <span className="text-brand-600 font-black tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-4 block">The Critical Barrier</span>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-display font-black text-slate-900 leading-[1.05] tracking-tight">
            Credentialing is <span className="text-brand-500">Broken.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-xl mt-6 sm:mt-8 font-medium leading-relaxed px-4">
            The healthcare administration ecosystem is trapped in a legacy loop of faxes, spreadsheets, and manual follow-ups.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {problems.map((p, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -10, borderColor: 'rgba(11,107,87,0.3)' }}
                className="group h-full bg-slate-50 border border-slate-100/60 rounded-[32px] sm:rounded-[40px] p-8 sm:p-10 relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-brand-deep/5"
              >
                {/* Visual Accent */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-light/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="flex flex-col h-full relative z-10 text-center lg:text-left items-center lg:items-start">
                  {/* Animated Icon Container */}
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center mb-8 relative">
                    {p.type === 'clock' ? (
                      <div className="relative w-8 h-8 flex items-center justify-center">
                        <div className="absolute inset-0 border-2 border-brand-light rounded-full" />
                        {/* Clock center */}
                        <div className="w-1.5 h-1.5 bg-brand-deep rounded-full z-10" />
                        {/* Hour Hand */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                          style={{ willChange: 'transform' }}
                          className="absolute top-1.5 left-1/2 -ml-[1px] w-[2px] h-2.5 bg-brand-deep origin-bottom rounded-full"
                        />
                        {/* Minute Hand */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                          style={{ willChange: 'transform' }}
                          className="absolute top-1 left-1/2 -ml-[1px] w-[2px] h-3 bg-brand-accent/60 origin-bottom rounded-full"
                        />
                      </div>
                    ) : p.type === 'churn' ? (
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        className="relative"
                      >
                        <svg className="w-8 h-8 text-brand-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </motion.div>
                    ) : (
                      <IconRenderer icon={p.icon} size={26} className="text-brand-deep" />
                    )}

                    {/* Pulse target for delay animation */}

                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-slate-900 mb-4">{p.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium mb-10 flex-1">{p.desc}</p>

                  {/* Realistic Metric Footer */}
                  <div className="mt-auto pt-8 border-t border-slate-200/60 w-full text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row items-center lg:items-baseline gap-2 whitespace-normal lg:whitespace-nowrap justify-center lg:justify-start">
                      <motion.span
                        whileInView={{ scale: [0.95, 1.05, 1] }}
                        className="text-4xl lg:text-5xl font-display font-black text-brand-deep"
                      >
                        {p.stat}
                      </motion.span>
                      <span className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">{p.statLabel}</span>
                    </div>

                    {/* Technical Detail */}
                    <div className="mt-4 flex items-center justify-center lg:justify-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      <span className="text-[10px] font-black text-slate-400 tracking-wider">ANNUAL IMPACT ANALYSIS · 2026</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── 4. TRANSFORMATION (OLD VS NEW) ───────────────────────────────────────────
const TransformationSection: React.FC = () => {
  const [active, setActive] = useState<'old' | 'new'>('old');

  const old = [
    'Manual data entry across 12+ portals',
    'Fax-based document submission',
    'Zero real-time status updates',
    'Reactive issue resolution',
    'Revenue leakage from denials',
    '90-120 day credentialing cycles',
  ];

  const newWay = [
    'Unified data hub - enter once, auto-populate everywhere',
    'Digital submission with audit trail',
    'Live dashboard with milestone tracking',
    'AI-driven issue detection before submission',
    'Automated denial management & appeals',
    '30-45 day credentialing cycles',
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-12 lg:py-16 bg-transparent relative overflow-hidden">
      <div className="hidden lg:block absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-brand-50/50 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <FadeUp className="text-center mb-12 lg:mb-16">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-xs sm:text-sm">The Difference</span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 mt-3 leading-tight px-2">
            Old way vs. <span className="text-brand-500">Credifide way</span>.
          </h2>
        </FadeUp>

        {/* Toggle */}
        <div className="flex justify-center mb-12 px-4">
          <div className="relative flex bg-slate-100 rounded-2xl p-1.5 w-full max-w-[280px] sm:max-w-[400px]">
            <motion.div
              layoutId="toggle-pill"
              className="absolute inset-y-1.5 rounded-xl"
              style={{
                width: 'calc(50% - 3px)',
                background: active === 'old' ? 'linear-gradient(135deg, #ef4444, #dc2626)' : 'linear-gradient(135deg, #7FBF7F, #6aa86a)',
                left: active === 'old' ? '1.5px' : 'calc(50% + 1.5px)',
                x: active === 'old' ? '3px' : '-1.5px', // Fine-tuning for perfect center alignment
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 35 }}
            />
            {(['old', 'new'] as const).map((v) => (
              <button
                key={v}
                onClick={() => setActive(v)}
                className={`flex-1 relative z-10 py-3 rounded-xl font-black text-[10px] sm:text-xs tracking-tight transition-colors duration-300 ${active === v ? 'text-white' : 'text-slate-500'}`}
              >
                {v === 'old' ? 'THE OLD WAY' : 'THE CREDIFIDE WAY'}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* List */}
          <motion.div
            key={active}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-4"
          >
            {(active === 'old' ? old : newWay).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className={`flex items-start gap-4 p-5 rounded-2xl border ${active === 'old' ? 'border-red-200 bg-red-50/60' : 'border-brand-100 bg-brand-50'}`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${active === 'old' ? 'bg-red-100 text-red-500' : 'bg-brand-100 text-brand-600'}`}>
                  {active === 'old' ? '✕' : '✓'}
                </div>
                <span className={`font-medium text-sm leading-relaxed ${active === 'old' ? 'text-red-800' : 'text-brand-700'}`}>{item}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Visual */}
          <motion.div
            key={active + '-visual'}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`rounded-[32px] p-6 sm:p-8 ${active === 'old' ? 'bg-red-50 border border-red-200' : 'bg-brand-deep border border-brand-accent/30'} relative overflow-hidden shadow-2xl`}
          >
            <div className="space-y-6">
              {/* Processing Status */}
              <div>
                <p className={`text-xs font-bold tracking-widest mb-4 ${active === 'old' ? 'text-red-600' : 'text-brand-light'}`}>PROCESSING STATUS</p>
                <div className="space-y-3">
                  {(active === 'new' ? [
                    'Unified Data Sync Complete',
                    'AI Policy Validation Active',
                    'Digital Payer Submission',
                    'Real-time Approval Milestone',
                    'Revenue Leakage Prevented',
                    'Credentialing Cycle Finalized'
                  ] : [
                    'Manual Form Entry Pending',
                    'Fax Transmission In-Progress',
                    'Carrier Portal Backlog',
                    '90-Day Verification Loop',
                    'Missing Document Alert',
                    'Payer Follow-up Required'
                  ]).map((label, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
                      className="relative"
                    >
                      <div className={`min-h-[3rem] sm:min-h-[3.5rem] py-2.5 sm:py-3.5 rounded-xl ${active === 'old' ? 'bg-white shadow-sm' : 'bg-white/10'} flex items-center px-4 sm:px-5 gap-3 sm:gap-4 border ${active === 'old' ? 'border-red-200' : 'border-white/10'}`}>
                        <div className={`w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full ${active === 'old' ? 'bg-red-400' : 'bg-brand-accent'} animate-pulse shrink-0`} />
                        <span className={`text-[13px] sm:text-[15px] font-bold tracking-normal truncate ${active === 'old' ? 'text-red-700' : 'text-brand-light'}`}>
                          {label}
                        </span>
                        <div className="ml-auto w-12 sm:w-16 h-1 sm:h-1.5 bg-black/10 rounded-full hidden md:block overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${60 + i * 10}%` }}
                            transition={{ delay: 0.4 + i * 0.1, duration: 1.2 }}
                            className={`h-full ${active === 'old' ? 'bg-red-300' : 'bg-brand-accent'}`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
            <div className={`absolute -bottom-8 -right-8 w-36 h-36 rounded-full blur-2xl ${active === 'old' ? 'bg-red-400/15' : 'bg-white/10'}`} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─── 5. HOW WE OPERATE (Flow Diagram) ─────────────────────────────────────────
const OperationSection: React.FC = () => {
  const nodes = [
    { label: 'Provider Onboarding', sub: 'Data collected once, verified instantly', icon: ASSETS.ui.userPlus },
    { label: 'Document Processing', sub: 'AI-powered extraction and validation', icon: ASSETS.ui.fileText },
    { label: 'Payer Submission', sub: 'Multi-payer digital submission in parallel', icon: ASSETS.ui.shieldCheck },
    { label: 'Real-Time Tracking', sub: 'Live status across all applications', icon: ASSETS.ui.activity },
    { label: 'Revenue Optimized', sub: 'Faster billing, fewer denials', icon: ASSETS.ui.trendingUp },
  ];

  return (
    <section className="py-12 lg:py-16 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp className="text-center mb-16 lg:mb-20">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-xs sm:text-sm">How It Works</span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 mt-3 leading-tight px-4">
            Credifide is a <span className="text-brand-500">system</span>, not a service.
          </h2>
          <p className="text-slate-500 text-lg mt-5 max-w-2xl mx-auto">
            Every step is connected, automated, and monitored in real time from first touch to first payment.
          </p>
        </FadeUp>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:flex items-center justify-between relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-slate-200">
            <motion.div
              className="h-full bg-brand-500 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
            />
          </div>

          {nodes.map((node, i) => (
            <FadeUp key={i} delay={i * 0.15} className="relative flex flex-col items-center text-center w-44">
              <motion.div
                whileHover={{ scale: 1.1, boxShadow: '0 0 24px rgba(127,191,127,0.3)' }}
                className="w-20 h-20 rounded-2xl bg-white border-2 border-brand-200 flex items-center justify-center text-brand-500 shadow-md relative z-10 mb-5 transition-shadow"
              >
                <IconRenderer icon={node.icon} size={28} />
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-500 text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </div>
              </motion.div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">{node.label}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{node.sub}</p>
            </FadeUp>
          ))}
        </div>

        {/* Mobile: vertical flow */}
        <div className="lg:hidden space-y-6">
          {nodes.map((node, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="flex items-start gap-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-500 shrink-0 relative">
                  <IconRenderer icon={node.icon} size={24} />
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-brand-500 text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{node.label}</h4>
                  <p className="text-slate-500 text-sm">{node.sub}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── 6. VISUAL EXPERIENCE BLOCK ───────────────────────────────────────────────
const VisualBlock: React.FC = () => {
  const animations = useAnimationSettings();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section className="py-12 lg:py-16 bg-brand-light/30 overflow-hidden relative px-4 lg:px-0">
      <motion.div style={{ y, willChange: 'transform' }} className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-deep/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-accent/5 rounded-full blur-[70px]" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <FadeUp className="text-center mb-12 lg:mb-16">
          <span className="text-brand-deep/60 font-bold tracking-widest uppercase text-xs sm:text-sm">The Platform</span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 mt-3 leading-tight">
            Everything in one place.
          </h2>
        </FadeUp>

        <FadeUp>
          <div className="relative mx-auto max-w-4xl">
            {/* Outer glow */}
            <div className="absolute -inset-6 rounded-[40px] bg-brand-deep/5 blur-3xl" />

            <div className="relative bg-white border border-brand-light rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-2xl shadow-brand-deep/10">
              {/* Header */}
              <div className="border-b border-brand-light p-5 flex items-center gap-4 bg-white/50 backdrop-blur-sm">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-brand-accent/50" />
                </div>
                <div className="flex-1 flex gap-3 overflow-hidden">
                  {['Dashboard', 'Applications', 'Revenue', 'Reports'].map((tab, i) => (
                    <button key={tab} className={`text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${i === 0 ? 'bg-brand-deep text-white block' : 'text-slate-400 hover:text-brand-deep hidden sm:block'}`}>
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="w-7 h-7 rounded-full bg-brand-deep flex items-center justify-center text-white text-[10px] font-bold">JD</div>
              </div>

              {/* Body */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Sidebar */}
                <div className="hidden lg:block col-span-1 border-r border-brand-light p-4 sm:p-5 space-y-3 bg-brand-light/20">
                  {['Overview', 'Credentialing', 'Enrollment', 'Billing', 'Analytics', 'Settings'].map((item, i) => (
                    <div key={item} className={`flex items-center gap-3 px-3 py-2 rounded-xl text-[10px] sm:text-xs font-medium ${i === 0 ? 'bg-brand-deep/5 text-brand-deep' : 'text-slate-400'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-brand-deep' : 'bg-brand-deep/10'}`} />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Main */}
                <div className="col-span-1 lg:col-span-2 p-4 sm:p-6 space-y-5">
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {[
                      { l: 'Active Apps', v: '48', c: 'text-slate-900' },
                      { l: 'Approved', v: '94%', c: 'text-brand-deep' },
                      { l: 'Pending Rev.', v: '$84k', c: 'text-brand-deep' },
                    ].map((card) => (
                      <div key={card.l} className="bg-brand-light/10 rounded-xl p-3 sm:p-4 border border-brand-light/50">
                        <p className="text-[10px] text-slate-400 mb-1 truncate">{card.l}</p>
                        <p className={`text-base sm:text-2xl font-bold ${card.c}`}>{card.v}</p>
                      </div>
                    ))}
                  </div>

                  {/* Mini chart */}
                  <div className="bg-brand-light/5 rounded-xl p-4 border border-brand-light/30">
                    <p className="text-[10px] text-slate-400 mb-3 font-semibold uppercase tracking-wider">Revenue Cycle</p>
                    <div className="flex items-end gap-1.5 sm:gap-2 h-20">
                      {[55, 80, 65, 90, 75, 95, 88].map((h, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 rounded-t bg-gradient-to-t from-brand-deep to-brand-accent/40 origin-bottom will-change-transform"
                          style={{ height: `${h}%` }}
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 + 0.5, duration: 0.6, ease: 'easeOut' }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Status list */}
                  <div className="space-y-2">
                    {[
                      { name: 'Dr. Sarah Mitchell', status: 'Approved', color: 'brand' },
                      { name: 'Dr. James Carter', status: 'In Review', color: 'yellow' },
                      { name: 'Dr. Priya Sharma', status: 'Submitted', color: 'sky' },
                    ].map((row) => (
                      <div key={row.name} className="flex items-center justify-between py-2 px-3 rounded-lg bg-brand-light/20">
                        <span className="text-[10px] sm:text-xs text-slate-500 truncate mr-2">{row.name}</span>
                        <span className={`text-[9px] sm:text-xs font-semibold px-2 py-0.5 rounded-full ${row.color === 'brand' ? 'bg-brand-deep/10 text-brand-deep' :
                          row.color === 'yellow' ? 'bg-amber-100 text-amber-700' :
                            'bg-brand-light text-brand-deep'
                          }`}>{row.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

// ─── 7. PRINCIPLES / VALUES ───────────────────────────────────────────────────
const PrinciplesSection: React.FC = () => {
  const values = [
    { word: 'Clarity', desc: 'No black boxes. Every step is visible.' },
    { word: 'Speed', desc: 'Time is revenue. We eliminate the wait.' },
    { word: 'Control', desc: 'Providers own their data and workflow.' },
    { word: 'Precision', desc: 'Every submission is validated before submission.' },
    { word: 'Integrity', desc: 'We operate with radical transparency.' },
    { word: 'Impact', desc: 'Every credential unlocked helps a patient get care.' },
  ];

  return (
    <section className="py-12 lg:py-16 bg-transparent relative overflow-hidden">
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-brand-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 lg:px-6 relative">
        <FadeUp className="text-center mb-12 lg:mb-20">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-xs sm:text-sm">What We Stand For</span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 mt-3 leading-tight">
            Six words. One <span className="text-brand-500">standard.</span>
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {values.map((v, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ backgroundColor: '#f0fdf4', scale: 1.02 }}
                className="group p-8 rounded-3xl border border-transparent hover:border-brand-100 transition-all duration-300 cursor-default will-change-transform"
              >
                <motion.h3
                  className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors duration-300"
                >
                  {v.word}
                </motion.h3>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '2rem' }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.4, duration: 0.5 }}
                  className="h-0.5 bg-brand-500 mb-3"
                />
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            </FadeUp>

          ))}
        </div>
      </div>
    </section>
  );
};

// ─── 8. WHO WE SUPPORT ──────────────────────────────────────────────────────
const WhoWeWorkWith: React.FC = () => {
  const clients = [
    {
      name: 'Physicians & Specialty Providers',
      desc: 'Seamless credentialing and contracting processes for dedicated practitioners.',
      icon: ASSETS.specialties.general,
      gradient: 'from-brand-500/20 to-emerald-400/10',
    },
    {
      name: 'Medical Groups & Clinics',
      desc: 'Manage your entire provider roster in a single, streamlined system.',
      icon: ASSETS.ui.users,
      gradient: 'from-brand-light to-brand-deep/5',
    },
    {
      name: 'Behavioral & Telehealth Orgs',
      desc: 'Multi-state credentialing and billing for virtual-first practices.',
      icon: ASSETS.specialties.mentalHealth,
      gradient: 'from-brand-accent/20 to-brand-deep/5',
    },
    {
      name: 'Multi-Provider Practices',
      desc: 'Centralized tools for complex networks scaling across regions.',
      icon: ASSETS.specialties.hospital,
      gradient: 'from-brand-light to-brand-accent/10',
    },
    {
      name: 'Healthcare Startups',
      desc: 'Build the right infrastructure from day one without the overhead.',
      icon: ASSETS.specialties.rocket,
      gradient: 'from-brand-500/10 to-brand-deep/10',
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-transparent relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <FadeUp className="text-center mb-12 lg:mb-16">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-xs sm:text-sm">Who We Support</span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 mt-3 leading-tight px-4">
            Built for every <span className="text-brand-500">type of provider.</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {clients.map((c, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -10, boxShadow: '0 24px 60px rgba(0,0,0,0.1)' }}
                className="group h-full bg-white rounded-3xl p-8 border border-slate-200 text-center cursor-default will-change-transform transition-shadow duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center text-brand-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconRenderer icon={c.icon} size={28} />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{c.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── 9. FINAL CTA ─────────────────────────────────────────────────────────────
const FinalCTA: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 bg-transparent relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <FadeUp>
          <div className="relative rounded-[32px] sm:rounded-[48px] overflow-hidden">
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

            {/* Simplified Orbs with reduced blur */}
            <motion.div
              animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              style={{ willChange: 'transform' }}
              className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-white/5 rounded-full blur-[70px]"
            />
            <motion.div
              animate={{ x: [0, -15, 0], y: [0, -20, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              style={{ willChange: 'transform' }}
              className="absolute bottom-[-20%] right-[-10%] w-80 h-80 bg-brand-accent/15 rounded-full blur-[60px]"
            />

            {/* Grid */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }} />

            <div className="relative z-10 py-16 sm:py-24 px-6 sm:px-8 lg:px-20">
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
                Start Your Journey
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-[2.2rem] sm:text-5xl lg:text-7xl font-display font-bold text-white leading-tight mb-6"
              >
                Ready to transform <br />
                <span className="text-brand-400">how you operate?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
              >
                Join hundreds of providers who stopped waiting and started growing. Your first consultation is free - and it changes everything.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center justify-center"
              >
                <Link
                  to="/contact"
                  className="px-10 py-5 bg-brand-accent text-brand-deep rounded-2xl font-bold text-lg shadow-2xl shadow-black/10 hover:scale-105 transition-all flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  Book a Free Consultation
                  <IconRenderer icon={ASSETS.nav.arrowRight} size={20} />
                </Link>
              </motion.div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

// ─── Main About Page ───────────────────────────────────────────────────────────
const About: React.FC = () => {
  useSEO(
    'About Credifide | Our Mission & Healthcare Credentialing Team',
    'Learn about Credifide\'s mission to simplify healthcare credentialing and provider enrollment for medical groups nationwide. We build the infrastructure healthcare deserves.',
    '/about-credifide/',
    undefined,
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      'name': 'About Credifide',
      'description': 'Credifide was created to eliminate the invisible friction that keeps providers away from patients by replacing broken administrative systems with automation and intelligence.',
      'url': 'https://credifide.com/about-credifide/',
      'mainEntity': {
        '@type': 'Organization',
        'name': 'Credifide',
        'url': 'https://credifide.com',
        'logo': 'https://credifide.com/logo.png'
      }
    }
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <StorySection />
      <ProblemSection />
      <TransformationSection />
      <OperationSection />
      <VisualBlock />
      <PrinciplesSection />
      <WhoWeWorkWith />
      <FinalCTA />
    </div>
  );
};

export default About;

