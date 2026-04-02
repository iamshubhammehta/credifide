import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring, useMotionValue } from 'motion/react';
import { ASSETS, IconRenderer } from '../constants';
import { Link } from 'react-router-dom';

// ─── Utility: Animate on scroll ───────────────────────────────────────────────
const FadeUp: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children, delay = 0, className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ─── 1. HERO ──────────────────────────────────────────────────────────────────
const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let W = 0, H = 0;

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const N = 60;
    const particles = Array.from({ length: N }, (_, i) => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5,
      o: Math.random() * 0.5 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // soft radial from mouse
      const grd = ctx.createRadialGradient(
        mouseRef.current.x, mouseRef.current.y, 0,
        mouseRef.current.x, mouseRef.current.y, 300
      );
      grd.addColorStop(0, 'rgba(127,191,127,0.07)');
      grd.addColorStop(1, 'transparent');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, W, H);

      particles.forEach(p => {
        p.x += p.vx + (mouseRef.current.x - W / 2) * 0.00008;
        p.y += p.vy + (mouseRef.current.y - H / 2) * 0.00008;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(127,191,127,${p.o})`;
        ctx.fill();
      });

      // connect nearby particles
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(127,191,127,${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    window.addEventListener('mousemove', onMouse);

    draw();
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Mesh gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[-10%] left-[-5%] w-[55%] h-[55%] rounded-full bg-brand-500/8 blur-[130px] will-change-transform"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 27, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-sky-400/6 blur-[150px] will-change-transform"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[30%] left-[40%] w-[30%] h-[30%] rounded-full bg-emerald-400/5 blur-[100px] will-change-transform"
        />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(127,191,127,1) 1px, transparent 1px),linear-gradient(90deg, rgba(127,191,127,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-sm font-semibold mb-10 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
          Our Story
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold text-slate-900 leading-[1.05] tracking-tight mb-8"
        >
          We Built the{' '}
          <span className="relative inline-block">
            <span className="text-brand-400">Infrastructure</span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.1, duration: 1, ease: 'circOut' }}
              className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-400 to-transparent origin-left"
            />
          </span>
          <br />
          Healthcare Deserves
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-xl sm:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-14"
        >
          Credifide was created to eliminate the invisible friction that keeps providers away from patients. We don't manage processes. We replace them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(127,191,127,0.35)' }}
            whileTap={{ scale: 0.97 }}
            className="px-9 py-4 bg-brand-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-500/20 hover:bg-brand-600 transition-colors"
          >
            Book a Consultation
          </motion.button>
          <motion.div
            whileHover={{ x: 4 }}
            className="flex items-center gap-2 text-slate-500 hover:text-brand-500 transition-colors cursor-pointer font-semibold"
          >
            Learn how it works
            <IconRenderer icon={ASSETS.nav.arrowRight} size={18} />
          </motion.div>
        </motion.div>

        {/* Floating dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 relative max-w-4xl mx-auto"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="relative will-change-transform"
          >
            {/* Outer glow */}
            <div className="absolute -inset-6 rounded-[36px] bg-brand-500/10 blur-3xl pointer-events-none" />

            {/* Browser chrome */}
            <div className="bg-[#f5f6fa] border border-slate-200/60 rounded-[24px] shadow-[0_30px_80px_rgba(0,0,0,0.25)] overflow-hidden">

              {/* Title bar */}
              <div className="bg-white border-b border-slate-100 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
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

                {/* Sidebar */}
                <div className="w-36 bg-white border-r border-slate-100 flex flex-col py-4 px-3 gap-1 shrink-0">
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
                        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-400 rounded-full border border-white" />
                      </motion.div>
                    </div>
                  </div>

                  {/* KPI Cards */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
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
                        {[[0,50],[28,42],[56,38],[84,30],[112,34],[140,18],[168,22],[196,10],[220,8]].map(([x, y], i) => (
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
                        {['Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'].map(m => (
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

                {/* Right panel - notifications */}
                <div className="w-32 bg-white border-l border-slate-100 flex flex-col py-4 px-3 shrink-0">
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
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 will-change-transform"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-slate-600 to-transparent" />
      </motion.div>
    </section>
  );
};

// ─── 2. STORY SECTION ─────────────────────────────────────────────────────────
const StorySection: React.FC = () => {
  const statements = [
    {
      label: 'The Beginning',
      title: 'Born from Frustration.',
      body: 'Healthcare providers were spending months waiting to get credentialed. Clinics were losing revenue not from bad medicine, but from broken administrative systems.',
    },
    {
      label: 'The Insight',
      title: 'The Problem Was Systemic.',
      body: 'We realized the tools didn\'t exist. Spreadsheets, fax machines, siloed portals. None of it was designed for the pace modern healthcare demands.',
    },
    {
      label: 'The Mission',
      title: 'So We Built the System.',
      body: 'Credifide brings automation, intelligence, and real-time visibility to credentialing and RCM, so every provider can focus fully on patient care.',
    },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-50/60 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <FadeUp className="mb-20">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-sm">Our Origin</span>
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 mt-3 leading-tight">
            A story of <span className="text-brand-500">purpose</span>.
          </h2>
        </FadeUp>

        <div className="space-y-24">
          {statements.map((s, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="text-xs font-bold tracking-widest uppercase text-brand-500 mb-3 block">{s.label}</span>
                  <h3 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 mb-5 leading-tight">{s.title}</h3>
                  <p className="text-lg text-slate-500 leading-relaxed max-w-lg">{s.body}</p>
                </div>
                <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                    className="w-full aspect-[5/3] rounded-3xl bg-slate-950 border border-slate-800 flex items-center justify-center relative overflow-hidden will-change-transform shadow-2xl"
                  >
                    {/* Abstract animated visual */}
                    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 240">
                      {[...Array(5)].map((_, j) => (
                        <motion.circle
                          key={j}
                          cx={80 + j * 60}
                          cy={120}
                          r={20 + j * 8}
                          fill="none"
                          stroke="#7FBF7F"
                          strokeWidth="0.5"
                          animate={{ r: [20 + j * 8, 30 + j * 10, 20 + j * 8] }}
                          transition={{ duration: 3 + j, repeat: Infinity, delay: j * 0.3 }}
                        />
                      ))}
                    </svg>
                    <div className="relative z-10 text-center px-8">
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-16 h-16 bg-brand-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center border border-brand-500/30"
                      >
                        <IconRenderer
                          icon={i === 0 ? ASSETS.features.shield : i === 1 ? ASSETS.ui.activity : ASSETS.features.zap}
                          size={28}
                          className="text-brand-400"
                        />
                      </motion.div>
                      <p className="text-white/50 text-sm font-mono">{`0${i + 1} / 03`}</p>
                    </div>
                    {/* Corner glow */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-500/20 rounded-full blur-2xl" />
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
      icon: ASSETS.ui.fileText,
      title: 'Paper-Based Chaos',
      desc: 'Credentialing still runs on faxes, PDFs, and spreadsheets in 2026. Every manual step is a potential delay or error.',
      stat: '60%',
      statLabel: 'of applications have data errors',
    },
    {
      icon: ASSETS.ui.alert,
      title: 'Revenue Lost to Denials',
      desc: 'Claims denied due to credentialing gaps cost practices thousands monthly. Most never get appealed or recovered.',
      stat: '$262B',
      statLabel: 'in denied claims annually in the US',
    },
    {
      icon: ASSETS.features.clock,
      title: 'Months of Waiting',
      desc: 'Average credentialing takes 90–120 days. Every day waiting is a day a provider cannot bill or see insured patients.',
      stat: '90d',
      statLabel: 'average credentialing cycle length',
    },
    {
      icon: ASSETS.ui.search,
      title: 'Zero Visibility',
      desc: 'Providers have no idea where their application stands. Follow-ups are manual, slow, and often unanswered.',
      stat: '3 in 4',
      statLabel: 'providers feel left in the dark',
    },
  ];

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(127,191,127,1) 1px, transparent 1px),linear-gradient(90deg, rgba(127,191,127,1) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <FadeUp className="text-center mb-20">
          <span className="text-brand-400 font-bold tracking-widest uppercase text-sm">The Reality</span>
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mt-3 leading-tight">
            Where the system{' '}
            <span className="text-red-400">breaks down</span>.
          </h2>
          <p className="text-slate-400 text-lg mt-5 max-w-2xl mx-auto">
            The healthcare credentialing and billing ecosystem is one of the most broken administrative systems in any industry.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, borderColor: 'rgba(127,191,127,0.3)' }}
                className="group bg-slate-900/80 border border-slate-800 rounded-3xl p-8 relative overflow-hidden backdrop-blur-sm will-change-transform transition-colors duration-300"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 50% 0%, rgba(127,191,127,0.06), transparent 70%)' }} />

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                    <IconRenderer icon={p.icon} size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-2">{p.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{p.desc}</p>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-800 flex items-center gap-3">
                  <span className="text-2xl font-display font-bold text-red-400">{p.stat}</span>
                  <span className="text-slate-500 text-sm">{p.statLabel}</span>
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
    '90–120 day credentialing cycles',
  ];

  const newWay = [
    'Unified data hub — enter once, auto-populate everywhere',
    'Digital submission with audit trail',
    'Live dashboard with milestone tracking',
    'AI-driven issue detection before submission',
    'Automated denial management & appeals',
    '30–45 day credentialing cycles',
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-brand-50/50 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <FadeUp className="text-center mb-16">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-sm">The Difference</span>
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 mt-3 leading-tight">
            Old way vs. <span className="text-brand-500">Credifide way</span>.
          </h2>
        </FadeUp>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="relative flex bg-slate-100 rounded-2xl p-1.5 gap-1">
            <motion.div
              layoutId="toggle-pill"
              className="absolute inset-y-1.5 w-[calc(50%-3px)] rounded-xl"
              style={{
                background: active === 'old' ? 'linear-gradient(135deg, #f87171, #ef4444)' : 'linear-gradient(135deg, #7FBF7F, #6aa86a)',
                left: active === 'old' ? '6px' : 'calc(50% + 3px)',
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
            {(['old', 'new'] as const).map((v) => (
              <button
                key={v}
                onClick={() => setActive(v)}
                className={`relative z-10 px-10 py-2.5 rounded-xl font-bold text-sm transition-colors duration-300 ${active === v ? 'text-white' : 'text-slate-500'}`}
              >
                {v === 'old' ? 'The Old Way' : 'The Credifide Way'}
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
                className={`flex items-start gap-4 p-5 rounded-2xl border ${active === 'old' ? 'border-red-100 bg-red-50' : 'border-brand-100 bg-brand-50'}`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${active === 'old' ? 'bg-red-100 text-red-500' : 'bg-brand-100 text-brand-600'}`}>
                  {active === 'old' ? '✕' : '✓'}
                </div>
                <span className={`font-medium text-sm leading-relaxed ${active === 'old' ? 'text-red-700' : 'text-brand-700'}`}>{item}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Visual */}
          <motion.div
            key={active + '-visual'}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`rounded-3xl p-8 ${active === 'old' ? 'bg-red-950 border border-red-900/50' : 'bg-slate-950 border border-brand-800/30'} relative overflow-hidden`}
          >
            <div className="space-y-5">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
                  className="relative origin-left"
                >
                  <div className={`h-8 rounded-lg ${active === 'old' ? 'bg-red-900/60' : 'bg-slate-800'} flex items-center px-4 gap-3`}>
                    <div className={`w-2 h-2 rounded-full ${active === 'old' ? 'bg-red-400' : 'bg-brand-400'} animate-pulse`} />
                    <div className={`h-2 rounded ${active === 'old' ? 'bg-red-800' : 'bg-slate-700'}`} style={{ width: `${40 + i * 15}%` }} />
                  </div>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={`mt-6 p-5 rounded-2xl ${active === 'old' ? 'bg-red-900/40 border border-red-800/50' : 'bg-brand-500/10 border border-brand-500/20'}`}
              >
                <p className={`font-bold text-3xl ${active === 'old' ? 'text-red-400' : 'text-brand-400'}`}>
                  {active === 'old' ? '120 days' : '35 days'}
                </p>
                <p className={`text-sm mt-1 ${active === 'old' ? 'text-red-300/60' : 'text-slate-400'}`}>Average credentialing cycle</p>
              </motion.div>
            </div>
            <div className={`absolute -bottom-8 -right-8 w-36 h-36 rounded-full blur-2xl ${active === 'old' ? 'bg-red-500/20' : 'bg-brand-500/20'}`} />
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
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp className="text-center mb-20">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-sm">How It Works</span>
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 mt-3 leading-tight">
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
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section className="py-32 bg-slate-950 overflow-hidden relative">
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-400/6 rounded-full blur-[100px]" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <FadeUp className="text-center mb-16">
          <span className="text-brand-400 font-bold tracking-widest uppercase text-sm">The Platform</span>
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mt-3 leading-tight">
            Everything in one place.
          </h2>
        </FadeUp>

        <FadeUp>
          <div className="relative mx-auto max-w-4xl">
            {/* Outer glow */}
            <div className="absolute -inset-6 rounded-[40px] bg-brand-500/8 blur-3xl" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="relative bg-slate-900 border border-slate-700/60 rounded-[28px] overflow-hidden shadow-2xl will-change-transform"
            >
              {/* Header */}
              <div className="border-b border-slate-800 p-5 flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-brand-500/70" />
                </div>
                <div className="flex-1 flex gap-3">
                  {['Dashboard', 'Applications', 'Revenue', 'Reports'].map((tab, i) => (
                    <button key={tab} className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${i === 0 ? 'bg-brand-500/20 text-brand-400' : 'text-slate-500 hover:text-slate-300'}`}>
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="w-7 h-7 rounded-full bg-brand-500 flex items-center justify-center text-white text-xs font-bold">C</div>
              </div>

              {/* Body */}
              <div className="grid grid-cols-3 gap-0">
                {/* Sidebar */}
                <div className="col-span-1 border-r border-slate-800 p-5 space-y-3">
                  {['Overview', 'Credentialing', 'Enrollment', 'Billing', 'Analytics', 'Settings'].map((item, i) => (
                    <div key={item} className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium ${i === 0 ? 'bg-brand-500/15 text-brand-400' : 'text-slate-500'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-brand-400' : 'bg-slate-700'}`} />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Main */}
                <div className="col-span-2 p-6 space-y-5">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { l: 'Active Apps', v: '48', c: 'text-white' },
                      { l: 'Approved', v: '94%', c: 'text-brand-400' },
                      { l: 'Pending Rev.', v: '$84k', c: 'text-sky-400' },
                    ].map((card) => (
                      <div key={card.l} className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/50">
                        <p className="text-xs text-slate-500 mb-1">{card.l}</p>
                        <p className={`text-2xl font-bold ${card.c}`}>{card.v}</p>
                      </div>
                    ))}
                  </div>

                  {/* Mini chart */}
                  <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/30">
                    <p className="text-xs text-slate-500 mb-3 font-semibold uppercase tracking-wider">Revenue Cycle</p>
                    <div className="flex items-end gap-2 h-20">
                      {[55, 80, 65, 90, 75, 95, 88].map((h, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 rounded-t bg-gradient-to-t from-brand-500/80 to-brand-400/40"
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
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
                      <div key={row.name} className="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-800/30">
                        <span className="text-xs text-slate-400">{row.name}</span>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${row.color === 'brand' ? 'bg-brand-500/15 text-brand-400' :
                            row.color === 'yellow' ? 'bg-yellow-500/15 text-yellow-400' :
                              'bg-sky-500/15 text-sky-400'
                          }`}>{row.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Scan line */}
              <motion.div
                animate={{ y: [-2, 300, -2] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-x-0 h-px bg-brand-400/30 shadow-[0_0_12px_rgba(127,191,127,0.4)] pointer-events-none will-change-transform"
              />
            </motion.div>
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
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-brand-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <FadeUp className="text-center mb-20">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-sm">What We Stand For</span>
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 mt-3 leading-tight">
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
                  className="text-4xl font-display font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors duration-300"
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

// ─── 8. WHO WE WORK WITH ──────────────────────────────────────────────────────
const WhoWeWorkWith: React.FC = () => {
  const clients = [
    {
      name: 'Solo Providers',
      desc: 'Get credentialed, billing, and contracted — all with one partner.',
      icon: ASSETS.ui.users,
      gradient: 'from-brand-500/20 to-emerald-400/10',
    },
    {
      name: 'Group Practices',
      desc: 'Manage your entire provider roster in a single, streamlined system.',
      icon: ASSETS.specialties.general,
      gradient: 'from-sky-400/20 to-blue-500/10',
    },
    {
      name: 'Telehealth Platforms',
      desc: 'Multi-state credentialing and billing for virtual-first practices.',
      icon: ASSETS.specialties.telehealth,
      gradient: 'from-purple-400/20 to-pink-400/10',
    },
    {
      name: 'Health Startups',
      desc: 'Build the right infrastructure from day one without the overhead.',
      icon: ASSETS.features.zap,
      gradient: 'from-amber-400/20 to-orange-400/10',
    },
  ];

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-sm">Who We Serve</span>
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 mt-3 leading-tight">
            Built for every <span className="text-brand-500">type of provider.</span>
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {clients.map((c, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -10, boxShadow: '0 24px 60px rgba(0,0,0,0.1)' }}
                className="group bg-white rounded-3xl p-8 border border-slate-200 text-center cursor-default will-change-transform transition-shadow duration-300"
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
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <FadeUp>
          <div className="relative rounded-[48px] overflow-hidden">
            {/* Animated gradient BG */}
            <motion.div
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, #020617, #0f2c14, #020617, #0a1929)',
                backgroundSize: '300% 300%',
              }}
            />

            {/* Orbs */}
            <motion.div
              animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-brand-500/20 rounded-full blur-[100px] will-change-transform"
            />
            <motion.div
              animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute bottom-[-20%] right-[-10%] w-80 h-80 bg-sky-400/15 rounded-full blur-[80px] will-change-transform"
            />

            {/* Grid */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: 'linear-gradient(rgba(127,191,127,1) 1px, transparent 1px),linear-gradient(90deg, rgba(127,191,127,1) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }} />

            <div className="relative z-10 py-24 px-8 lg:px-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-sm font-semibold mb-8"
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
                className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6"
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
                Join hundreds of providers who stopped waiting and started growing. Your first consultation is free — and it changes everything.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-5"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 50px rgba(127,191,127,0.45)',
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="px-10 py-5 bg-brand-500 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-brand-500/20 hover:bg-brand-600 transition-colors flex items-center gap-3 group"
                >
                  Book a Free Consultation
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <IconRenderer icon={ASSETS.nav.arrowRight} size={20} />
                  </motion.span>
                </motion.button>
                <div className="text-slate-500 text-sm flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center text-xs">✓</span>
                  No commitment required
                </div>
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
