import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import clinicExteriorImg from './assets/clinic_exterior.jpg'
import drNasirImg from './assets/staff1.jpg'
import drRaminImg from './assets/dr_ramin_ahmad.jpg'
import newbornCareImg from './assets/newborn_care.jpg'
import vaccinationsImg from './assets/vaccinations.jpg'
import primaryFamilyCareImg from './assets/primary_family_care.jpg'
import diagnosticLabsImg from './assets/diagnostic_labs.jpg'
import childPacketPdf from './assets/new_child_packet.pdf'
import adultFormPdf from './assets/adult_new_patient_form.pdf'

import SpotlightCard from './components/react-bits/SpotlightCard'
import CountUp from './components/react-bits/CountUp'
import ShinyText from './components/react-bits/ShinyText'
import Particles from './components/react-bits/Particles'
import './App.css'

/* ── SVG Icons ───────────────────────────────────── */
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
)
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
)
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
)
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
)
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
)
const FileTextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
)
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
)
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
)

/* ── Clinic Data ─────────────────────────────────── */
const CLINIC = {
  name: 'High Springs Pediatrics & Primary Care',
  phone: '(386) 454-1156',
  phoneTel: 'tel:3864541156',
  fax: '(386) 454-0466',
  address: '19228 NW US Highway 441, High Springs, FL 32643',
  hours: 'Monday – Friday: 9:00 AM – 5:00 PM',
}

const physicians = [
  {
    name: 'Dr. Nasir Ahmed, M.D.',
    role: 'Pediatrics & Newborn Care (Ages 0–18)',
    title: 'Pediatric Specialist • Founding Physician',
    image: drNasirImg,
    bullets: [
      'Royal Hospitals UK Fellowships • West Virginia University Residency',
      'Newborn First-Week Care, Milestones & Childhood Asthma Specialist',
      'Guaranteed Same-Day Sick Visits for Local Children & Teens',
    ],
    spotlight: 'rgba(14, 165, 233, 0.35)',
  },
  {
    name: 'Dr. Ramin Ahmad, M.D.',
    role: 'Internal Medicine & Adult Primary Care',
    title: 'Internal Medicine Specialist',
    image: drRaminImg,
    bullets: [
      'UCF College of Medicine / HCA Healthcare Residency',
      'Active Hospital Staff Privileges at HCA Florida North Florida Hospital',
      'Comprehensive Adult Physicals, Hypertension, Diabetes & In-Office Labs',
    ],
    spotlight: 'rgba(20, 184, 166, 0.35)',
  },
]

const services = [
  {
    title: 'Pediatric Care',
    subtitle: 'Dr. Nasir Ahmed, M.D.',
    badge: 'Ages 0–18',
    highlight: 'Same-Day Sick Care',
    desc: 'Newborn checkups, developmental milestones, and guaranteed same-day sick visits.',
    img: newbornCareImg,
    spotlight: 'rgba(14, 165, 233, 0.3)',
  },
  {
    title: 'Adult Primary Care',
    subtitle: 'Dr. Ramin Ahmad, M.D.',
    badge: 'Adults & Seniors',
    highlight: 'Chronic Care & Labs',
    desc: 'Annual wellness exams, chronic condition care, hypertension, and diabetes management.',
    img: primaryFamilyCareImg,
    spotlight: 'rgba(20, 184, 166, 0.3)',
  },
  {
    title: 'Immunizations',
    subtitle: 'Children & Adults',
    badge: 'CDC Approved',
    highlight: 'Full Protection',
    desc: 'CDC-approved childhood vaccines and adult booster shots (Flu, Tdap, Shingrix).',
    img: vaccinationsImg,
    spotlight: 'rgba(59, 130, 246, 0.3)',
  },
  {
    title: 'Diagnostic Labs',
    subtitle: 'On-Site Diagnostic Suite',
    badge: 'Rapid Results',
    highlight: 'On-Site Testing',
    desc: 'Rapid strep, flu, COVID, urinalysis, complete blood panels, and sports physicals.',
    img: diagnosticLabsImg,
    spotlight: 'rgba(245, 158, 11, 0.3)',
  },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Physicians', href: '#physicians' },
    { label: 'Services', href: '#services' },
    { label: 'Patient Forms', href: '#forms' },
    { label: 'Insurance', href: '#insurance' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className="min-h-screen bg-[#070e1f] text-slate-100 antialiased overflow-x-hidden flex flex-col w-full pb-16 md:pb-0">
      {/* ── Top Utility Bar ────────────────────────── */}
      <div className="bg-[#03060f] text-slate-300 text-xs py-2 px-3 sm:px-4 border-b border-slate-800/80 w-full">
        <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center text-[11px] sm:text-xs">
            <a href={CLINIC.phoneTel} className="text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1.5 whitespace-nowrap">
              <PhoneIcon /> {CLINIC.phone}
            </a>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 whitespace-nowrap text-slate-400">
              <ClockIcon /> {CLINIC.hours}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="hidden lg:flex items-center gap-1.5 text-slate-400 truncate max-w-sm">
              <MapPinIcon /> {CLINIC.address}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Accepting Patients
            </span>
          </div>
        </div>
      </div>

      {/* ── Main Navigation (MOBILE-OPTIMIZED WITH NO TEXT CUTOFF) ───── */}
      <nav className="sticky top-0 z-50 bg-[#070e1f]/95 backdrop-blur-md border-b border-slate-800/80 shadow-2xl w-full">
        <div className="site-container h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-6">
          {/* Logo & Clinic Name */}
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1 sm:flex-initial">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 text-white font-black text-sm sm:text-lg flex items-center justify-center shadow-lg shadow-sky-500/20 flex-shrink-0">
              HS
            </div>
            <div className="min-w-0 flex flex-col justify-center">
              <span className="font-black text-xs sm:text-base md:text-lg text-white leading-tight tracking-tight whitespace-nowrap">
                High Springs Pediatrics
              </span>
              <span className="text-[10px] sm:text-xs text-sky-400 font-semibold tracking-wide whitespace-nowrap">
                &amp; Primary Care
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-sky-400 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Nav Right */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <a
              href={CLINIC.phoneTel}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold shadow-md whitespace-nowrap active:scale-95 transition-transform"
            >
              <PhoneIcon />
              <span className="hidden sm:inline">{CLINIC.phone}</span>
              <span className="sm:hidden text-xs">Call</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700/80 active:scale-95"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Slide-Down Mobile Drawer Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="lg:hidden border-t border-slate-800 bg-[#050b18] px-4 py-4 shadow-2xl overflow-hidden"
            >
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-200 hover:bg-sky-600/15 hover:text-sky-400 transition-all"
                  >
                    <span>{link.label}</span>
                    <span className="text-slate-500 text-xs">&rarr;</span>
                  </a>
                ))}
              </div>

              <div className="mt-3.5 pt-3.5 border-t border-slate-800 space-y-2">
                <a
                  href={CLINIC.phoneTel}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs sm:text-sm font-bold shadow-md"
                >
                  <PhoneIcon /> Call Office: {CLINIC.phone}
                </a>
                <a
                  href="#forms"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-bold border border-slate-700"
                >
                  <FileTextIcon /> Download Registration Forms (PDF)
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Hero Section (CLEAR VISIBLE CLINIC PICTURE + BALANCED HEADLINE) ── */}
      <section id="home" className="section-wrapper relative bg-[#070e1f] text-white py-12 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <Particles
            particleCount={40}
            particleSpread={12}
            speed={0.12}
            particleColors={['#38bdf8', '#2dd4bf', '#ffffff']}
            alphaParticles={true}
          />
        </div>

        <div className="relative z-10 site-container flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/20 text-sky-200 text-xs sm:text-sm font-semibold mb-4 border border-sky-400/30 backdrop-blur-md shadow-md"
          >
            <ShinyText text="High Springs, Florida • Practice Established 2004" color="#bae6fd" shineColor="#ffffff" speed={2.5} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-3 text-center max-w-4xl"
          >
            Pediatric Care &amp; Adult Internal Medicine
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-base md:text-lg text-slate-300 mb-6 leading-relaxed max-w-2xl mx-auto font-medium text-center"
          >
            Trusted family healthcare led by founding pediatrician <strong>Dr. Nasir Ahmed, M.D.</strong> and internal medicine physician <strong>Dr. Ramin Ahmad, M.D.</strong>
          </motion.p>

          {/* Prominent Building Showcase Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="w-full max-w-[1200px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-sky-500/40 shadow-2xl mb-7 relative group card-pop-box"
          >
            <div className="h-52 sm:h-72 md:h-80 w-full relative overflow-hidden">
              <img
                src={clinicExteriorImg}
                alt="High Springs Pediatrics & Primary Care Clinic Building at 19228 NW US Highway 441"
                className="w-full h-full object-cover zoom-img"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent p-3 sm:p-4 flex items-center justify-between text-xs text-white">
                <span className="font-bold flex items-center gap-1.5">
                  <MapPinIcon /> 19228 NW US Highway 441, High Springs, FL
                </span>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-sky-500/30 border border-sky-400/40 text-[11px] font-bold">
                  Serving Since 2004
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs md:text-sm font-medium text-slate-200 mb-7 max-w-xl mx-auto"
          >
            <span className="px-3 py-1 rounded-xl bg-slate-900/90 border border-slate-700 shadow">✓ Same-Day Sick Visits</span>
            <span className="px-3 py-1 rounded-xl bg-slate-900/90 border border-slate-700 shadow">✓ On-Site Testing Labs</span>
            <span className="px-3 py-1 rounded-xl bg-slate-900/90 border border-slate-700 shadow">✓ UF Health &amp; HCA Networks</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
          >
            <a
              href="#forms"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-teal-600 hover:from-sky-400 hover:to-teal-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-sky-600/30 whitespace-nowrap active:scale-95 transition-transform"
            >
              <FileTextIcon /> Patient Registration Forms (PDF)
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar (STRAIGHT ALIGNED POPPING BOXES) ──────────────── */}
      <section className="section-wrapper py-8 sm:py-10 bg-[#040814] border-y border-slate-800/80 relative z-20">
        <div className="site-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 justify-center items-stretch max-w-[1200px] mx-auto" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            {[
              { target: 20, suffix: '+', label: 'Years in High Springs' },
              { target: 5.0, suffix: ' ★', label: 'Patient Rating' },
              { target: 21, suffix: '', label: 'Communities Served' },
              { target: 2, suffix: ' MDs', label: 'Generations of Doctors' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-slate-900/90 rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-slate-800 flex flex-col items-center justify-center h-full card-pop-box"
              >
                <div className="text-2xl sm:text-4xl font-black text-sky-400 flex items-center justify-center">
                  <CountUp to={stat.target} duration={1.5 + i * 0.2} />
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-[11px] sm:text-xs md:text-sm font-bold text-slate-300 mt-1 text-center">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet Our Physicians (UNIFIED 1200PX WIDTH - EXACT SAME AS SERVICES & FORMS) ── */}
      <section id="physicians" className="section-wrapper py-16 sm:py-24 lg:py-28 bg-[#070e1f] text-white">
        <div className="site-container flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2 text-center">
              Medical Leadership
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white text-center">
              Meet Our Physicians
            </h2>
            <p className="text-xs sm:text-base text-slate-300 mt-2 text-center">
              Dr. Nasir Ahmed and his son Dr. Ramin Ahmad provide trusted family healthcare under one roof.
            </p>
          </motion.div>

          {/* Symmetrical 2-Card Grid (1200px Width - Exactly Symmetrical) */}
          <div
            className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch w-full max-w-[1200px]"
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            {physicians.map((doc, idx) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="w-full flex h-full"
              >
                <SpotlightCard
                  spotlightColor={doc.spotlight}
                  className="w-full bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-9 shadow-2xl flex flex-col justify-between h-full card-pop-box"
                >
                  <div>
                    {/* Doctor Profile Header */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 mb-5 text-center sm:text-left">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-36 h-36 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-2xl object-cover border-2 border-sky-400/50 shadow-2xl flex-shrink-0 mx-auto sm:mx-0 zoom-img"
                      />
                      <div className="min-w-0">
                        <span className="text-xs font-bold uppercase text-sky-400 tracking-wider block mb-1">
                          {doc.role}
                        </span>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight">
                          {doc.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">{doc.title}</p>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 mt-2 text-left">
                      {doc.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                          <CheckIcon />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold">
                    <span className="text-sky-400">Accepting Patients</span>
                    <span className="text-emerald-400">High Springs Clinic</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Core Services (UNIFIED 1200PX WIDTH - EXACT SAME AS PHYSICIANS & FORMS) ── */}
      <section id="services" className="section-wrapper py-16 sm:py-24 lg:py-28 bg-[#0a1224] border-y border-slate-800/80 text-white">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2 text-center">
              Care For Every Age
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white text-center">
              Our Core Services
            </h2>
            <p className="text-xs sm:text-base text-slate-300 mt-2 text-center">
              From newborn milestone checks to adult preventive physicals and chronic condition care.
            </p>
          </motion.div>

          {/* Symmetrical 4-Card Grid (1200px Width - Exactly Symmetrical) */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch justify-center w-full max-w-[1200px]"
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="w-full flex h-full"
              >
                <SpotlightCard
                  spotlightColor={svc.spotlight}
                  className="w-full group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between h-full card-pop-box"
                >
                  <div>
                    {/* Fixed Height Image with Smooth Zoom */}
                    <div className="h-48 sm:h-52 overflow-hidden relative">
                      <img
                        src={svc.img}
                        alt={svc.title}
                        className="w-full h-full object-cover zoom-img"
                      />
                      {/* Floating Badge */}
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold tracking-wide border border-white/20 shadow-sm">
                        {svc.badge}
                      </div>
                    </div>

                    {/* Card Content with Straight Aligned Spacing */}
                    <div className="p-4 sm:p-5 text-left">
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider mb-1">
                        <ShinyText text={svc.subtitle} color="#38bdf8" shineColor="#ffffff" speed={2.5} />
                      </span>
                      <h3 className="text-lg font-bold text-white mb-2 min-h-[1.75rem]">
                        {svc.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed min-h-[3rem]">
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  {/* Guaranteed Clean Bottom Badge */}
                  <div className="p-4 sm:p-5 pt-0 mt-auto">
                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-bold whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse flex-shrink-0" />
                        {svc.highlight}
                      </span>
                      <span className="text-slate-400 group-hover:text-sky-400 group-hover:translate-x-1.5 transition-all text-sm font-bold">
                        &rarr;
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Patient Registration Forms (PDF) (UNIFIED 1200PX WIDTH - EXACT SAME AS SERVICES) ── */}
      <section id="forms" className="section-wrapper py-16 sm:py-24 lg:py-28 bg-[#070e1f] text-white">
        <div className="site-container flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2 text-center">
              Fast-Track Your Visit
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white text-center">
              Patient Registration Forms (PDF)
            </h2>
            <p className="text-xs sm:text-base text-slate-300 mt-2 text-center">
              Download and complete your official forms prior to arrival to save waiting room time.
            </p>
          </motion.div>

          {/* Symmetrical 2-Card Grid (1200px Width - Exactly Symmetrical) */}
          <div
            className="grid md:grid-cols-2 gap-6 sm:gap-7 w-full max-w-[1200px] items-stretch"
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            {/* Child Registration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between h-full card-pop-box"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-900/50 text-sky-400 flex items-center justify-center mb-4 text-xl font-bold">
                  📄
                </div>
                <span className="text-xs font-bold uppercase text-sky-400 tracking-wider">
                  Pediatrics (Ages 0–18)
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1 mb-2">
                  Child Registration Packet (PDF)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Official intake form for newborns, children, and teens. Includes patient medical history, insurance release, and parental consent.
                </p>
              </div>

              <a
                href={childPacketPdf}
                download="High_Springs_Pediatrics_Child_Packet.pdf"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md transition-colors active:scale-95"
              >
                <FileTextIcon /> Download Child Packet (PDF)
              </a>
            </motion.div>

            {/* Adult Registration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between h-full card-pop-box"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-900/50 text-teal-400 flex items-center justify-center mb-4 text-xl font-bold">
                  📋
                </div>
                <span className="text-xs font-bold uppercase text-teal-400 tracking-wider">
                  Adult Primary Care
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1 mb-2">
                  Adult New Patient Form (PDF)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Official adult intake form for Dr. Ramin Ahmad, M.D. Covers health history, cardiovascular care, and medication review.
                </p>
              </div>

              <a
                href={adultFormPdf}
                download="High_Springs_Primary_Care_Adult_Form.pdf"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-md transition-colors active:scale-95"
              >
                <FileTextIcon /> Download Adult Form (PDF)
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Insurance & Clinic Exterior (STANDOUT HIGH-TECH CARD) ── */}
      <section id="insurance" className="section-wrapper py-16 sm:py-24 lg:py-28 bg-[#060d1d] border-y border-slate-800/80 text-white">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch justify-center w-full max-w-[1200px] mx-auto" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            {/* Standout High-Tech Accepted Insurance Plans Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-slate-900/95 via-sky-950/30 to-teal-950/20 border-2 border-sky-400/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_35px_-5px_rgba(14,165,233,0.3)] flex flex-col justify-between h-full card-pop-box"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                    Accepted Insurance Plans
                  </h2>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    In-Network Verified
                  </span>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  We accept most major commercial insurance carriers, Medicare for adult primary care, and Florida Medicaid. If you have questions about your specific co-pay or network tier, our office billing staff is here to assist.
                </p>

                {/* High-Tech Plan Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold">
                  {[
                    { name: 'Florida Blue (BCBS)', tag: 'Preferred Network' },
                    { name: 'Medicare Part B', tag: 'Adult Primary' },
                    { name: 'Florida Medicaid', tag: 'State Health' },
                    { name: 'Staywell / Sunshine', tag: 'Managed Care' },
                    { name: 'UnitedHealthcare', tag: 'Commercial' },
                    { name: 'Aetna & Cigna', tag: 'In-Network' },
                    { name: 'Tricare & CHAMPVA', tag: 'Military Care' },
                    { name: 'Direct Billing Support', tag: 'HSA / FSA / Self' },
                  ].map((plan) => (
                    <div
                      key={plan.name}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-400/50 transition-all shadow-sm group"
                    >
                      <span className="flex items-center gap-2 text-slate-100 font-bold group-hover:text-sky-300 transition-colors">
                        <CheckIcon /> {plan.name}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium px-2 py-0.5 rounded-md bg-slate-900/60 border border-slate-700/50 whitespace-nowrap">
                        {plan.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Direct Office Billing</span>
                <a href={CLINIC.phoneTel} className="text-sky-400 hover:text-sky-300 font-bold underline">
                  Verify Coverage: {CLINIC.phone}
                </a>
              </div>
            </motion.div>

            {/* Clinic Facility Card (Balanced Height) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-3xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900/90 p-6 sm:p-8 flex flex-col justify-between h-full card-pop-box"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl sm:text-2xl font-black text-white">High Springs Medical Facility</h3>
                  <span className="text-xs font-bold text-sky-400">Est. 2004</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                  Our clinic building provides dedicated ground-level stroller access, ample handicap parking, and a comfortable child-friendly reception area at 19228 NW US Highway 441.
                </p>
                <div className="h-60 sm:h-72 rounded-2xl overflow-hidden shadow-inner relative group">
                  <img
                    src={clinicExteriorImg}
                    alt="High Springs Clinic Entrance"
                    className="w-full h-full object-cover zoom-img"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-3 text-xs text-slate-200 flex items-center justify-between">
                    <span className="font-semibold flex items-center gap-1.5">
                      <MapPinIcon /> High Springs, Florida 32643
                    </span>
                    <span className="text-emerald-400 font-bold">Open Mon–Fri</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold">
                <span className="text-slate-400">Private On-Site Parking</span>
                <span className="text-teal-400">Stroller &amp; Wheelchair Accessible</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Contact & Location (DARK BLUE NAVY) ────────────────────── */}
      <section id="contact" className="section-wrapper py-16 sm:py-24 lg:py-32 bg-[#070e1f] text-white">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-10 items-start justify-center w-full max-w-[1200px] mx-auto" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2">
                Office Information
              </span>
              <h2 className="text-2xl sm:text-4xl font-black mb-4 sm:mb-6">
                Visit or Call Our Clinic
              </h2>
              <p className="text-xs sm:text-base text-slate-300 mb-6 leading-relaxed">
                Conveniently located on US Highway 441 in High Springs with ground-level parking and easy stroller access.
              </p>

              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-sky-600/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                    <PhoneIcon />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs text-slate-400 uppercase font-bold tracking-wider">Telephone Line</div>
                    <a href={CLINIC.phoneTel} className="text-lg sm:text-2xl font-black text-sky-300 hover:text-white transition-colors">
                      {CLINIC.phone}
                    </a>
                    <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Fax: {CLINIC.fax}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-teal-600/20 text-teal-400 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs text-slate-400 uppercase font-bold tracking-wider">Clinic Address</div>
                    <div className="text-sm sm:text-lg font-bold text-white mt-0.5">{CLINIC.address}</div>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-teal-400 hover:underline inline-block mt-1"
                    >
                      Google Maps Directions &rarr;
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-sky-600/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                    <ClockIcon />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs text-slate-400 uppercase font-bold tracking-wider">Office Hours</div>
                    <div className="text-sm sm:text-base font-semibold text-white mt-0.5">{CLINIC.hours}</div>
                    <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Saturday &amp; Sunday: Closed &bull; Emergency: Call 911</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl card-pop-box">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Request an Appointment</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-5">
                Or call directly at <a href={CLINIC.phoneTel} className="text-sky-400 font-bold underline">{CLINIC.phone}</a> for immediate same-day scheduling.
              </p>

              {submitted ? (
                <div className="bg-emerald-950/60 border border-emerald-800 rounded-2xl p-6 text-center">
                  <p className="text-base sm:text-lg font-bold text-emerald-200">Appointment Request Sent</p>
                  <p className="text-xs sm:text-sm text-emerald-300 mt-1">Our scheduling desk will contact you shortly.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl bg-emerald-600 text-xs font-semibold text-white"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                  className="space-y-3.5 sm:space-y-4"
                >
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">
                      Patient / Parent Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-700 bg-slate-800 text-white text-xs sm:text-sm outline-none focus:border-sky-500"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-700 bg-slate-800 text-white text-xs sm:text-sm outline-none focus:border-sky-500"
                      placeholder="(386) 454-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">
                      Physician / Service *
                    </label>
                    <select
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-700 bg-slate-800 text-white text-xs sm:text-sm outline-none focus:border-sky-500"
                    >
                      <option>Dr. Nasir Ahmed, MD (Pediatrics Ages 0–18)</option>
                      <option>Dr. Ramin Ahmad, MD (Adult Primary Care)</option>
                      <option>Guaranteed Same-Day Sick Visit</option>
                      <option>Immunizations &amp; Physicals</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-extrabold text-xs sm:text-base shadow-xl transition-all active:scale-98"
                  >
                    Submit Appointment Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Clean Footer (DARK BLUE NAVY) ─────────────────────────── */}
      <footer className="section-wrapper bg-[#03060f] text-slate-400 py-10 sm:py-12 border-t border-slate-800 text-xs mt-auto">
        <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-extrabold text-white text-base">High Springs Pediatrics &amp; Primary Care</p>
            <p className="text-slate-500 mt-1">&copy; {new Date().getFullYear()} All rights reserved. &bull; Dr. Nasir Ahmed, M.D. &amp; Dr. Ramin Ahmad, M.D.</p>
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <a href={CLINIC.phoneTel} className="text-sky-400 font-bold hover:underline">
              {CLINIC.phone}
            </a>
            <span>•</span>
            <a href="#home" className="hover:text-white">Back to Top &uarr;</a>
          </div>
        </div>
      </footer>

      {/* ── Native Smartphone Bottom Quick-Action Bar (MOBILE APP FEEL) ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#050b18]/95 backdrop-blur-lg border-t border-slate-800/90 py-2 px-4 flex items-center justify-around shadow-2xl">
        <a href={CLINIC.phoneTel} className="flex flex-col items-center gap-1 text-[11px] font-bold text-emerald-400 active:scale-90">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <PhoneIcon />
          </div>
          <span>Call Office</span>
        </a>
        <a href="#physicians" className="flex flex-col items-center gap-1 text-[11px] font-bold text-sky-400 active:scale-90">
          <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center">
            <UserIcon />
          </div>
          <span>Doctors</span>
        </a>
        <a href="#forms" className="flex flex-col items-center gap-1 text-[11px] font-bold text-teal-400 active:scale-90">
          <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
            <FileTextIcon />
          </div>
          <span>Forms PDF</span>
        </a>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-[11px] font-bold text-slate-300 active:scale-90"
        >
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
            <MapPinIcon />
          </div>
          <span>Map</span>
        </a>
      </div>
    </div>
  )
}

export default App
