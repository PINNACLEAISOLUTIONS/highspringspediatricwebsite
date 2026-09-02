import { useState, useEffect } from 'react'
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
import TiltedCard from './components/react-bits/TiltedCard'
import './App.css'

/* ── Clean SVG Icons ─────────────────────────────── */
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
)
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
)
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
)
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
)
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
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
      'Newborn First-Week Care, Developmental Milestones & Childhood Asthma',
      'Guaranteed Same-Day Sick Visits for Local Children & Teens',
    ],
    spotlight: 'rgba(14, 165, 233, 0.28)',
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
    spotlight: 'rgba(20, 184, 166, 0.28)',
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
    spotlight: 'rgba(14, 165, 233, 0.28)',
  },
  {
    title: 'Adult Primary Care',
    subtitle: 'Dr. Ramin Ahmad, M.D.',
    badge: 'Adults & Seniors',
    highlight: 'Chronic Care & Labs',
    desc: 'Annual wellness exams, chronic condition care, hypertension, and diabetes management.',
    img: primaryFamilyCareImg,
    spotlight: 'rgba(20, 184, 166, 0.28)',
  },
  {
    title: 'Immunizations',
    subtitle: 'Children & Adults',
    badge: 'CDC Approved',
    highlight: 'Full Protection',
    desc: 'CDC-approved childhood vaccines and adult booster shots (Flu, Tdap, Shingrix).',
    img: vaccinationsImg,
    spotlight: 'rgba(59, 130, 246, 0.28)',
  },
  {
    title: 'Diagnostic Labs',
    subtitle: 'On-Site Diagnostic Suite',
    badge: 'Rapid Results',
    highlight: 'On-Site Testing',
    desc: 'Rapid strep, flu, COVID, urinalysis, complete blood panels, and sports physicals.',
    img: diagnosticLabsImg,
    spotlight: 'rgba(245, 158, 11, 0.28)',
  },
]

function App() {
  // Default to Dark Blue Navy Theme
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Physicians', href: '#physicians' },
    { label: 'Services', href: '#services' },
    { label: 'Patient Forms', href: '#forms' },
    { label: 'Insurance', href: '#insurance' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased overflow-x-hidden flex flex-col w-full">
      {/* ── Top Utility Bar ────────────────────────── */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 w-full">
        <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a href={CLINIC.phoneTel} className="text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1.5 whitespace-nowrap">
              <PhoneIcon /> {CLINIC.phone}
            </a>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="flex items-center gap-1.5 whitespace-nowrap text-slate-400">
              <ClockIcon /> {CLINIC.hours}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <MapPinIcon /> {CLINIC.address}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-semibold whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Accepting Patients
            </span>
          </div>
        </div>
      </div>

      {/* ── Main Navigation (DARK BLUE NAVY) ───────────────────────── */}
      <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-lg w-full">
        <div className="site-container h-20 flex items-center justify-between gap-4">
          {/* Logo & Clinic Name */}
          <a href="#home" className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-600 to-teal-600 text-white font-black text-lg flex items-center justify-center shadow-md flex-shrink-0">
              HS
            </div>
            <div className="min-w-0">
              <span className="font-extrabold text-base sm:text-lg text-white leading-tight block truncate">
                High Springs Pediatrics &amp; Primary Care
              </span>
              <span className="text-xs text-sky-400 font-medium block truncate">
                Dr. Nasir Ahmed, M.D. &bull; Dr. Ramin Ahmad, M.D.
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-300">
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
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl border border-slate-800 text-slate-300 hover:bg-slate-800"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Direct Call Button */}
            <a
              href={CLINIC.phoneTel}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white text-sm font-bold shadow-md whitespace-nowrap transition-transform active:scale-95"
            >
              <PhoneIcon />
              <span>{CLINIC.phone}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:bg-slate-800"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-slate-950 px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-slate-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── Hero Section (DARK BLUE NAVY + PROMINENT CLINIC BACKGROUND) ── */}
      <section id="home" className="section-wrapper relative bg-slate-950 text-white py-24 lg:py-36 overflow-hidden">
        {/* Prominent Clinic Building Background Image */}
        <div className="absolute inset-0">
          <img
            src={clinicExteriorImg}
            alt="High Springs Pediatrics & Primary Care Clinic Building"
            className="w-full h-full object-cover opacity-60 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/50 to-slate-950/95" />
        </div>

        {/* Ambient Particles */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
          <Particles
            particleCount={55}
            particleSpread={12}
            speed={0.14}
            particleColors={['#38bdf8', '#2dd4bf', '#ffffff']}
            alphaParticles={true}
          />
        </div>

        {/* Centered Hero Content */}
        <div className="relative z-10 site-container-narrow text-center flex flex-col items-center justify-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/25 text-sky-200 text-xs sm:text-sm font-semibold mb-6 border border-sky-400/40 backdrop-blur-md shadow-lg">
            <ShinyText text="High Springs, Florida • Practice Established 2004" color="#bae6fd" shineColor="#ffffff" speed={2.5} />
          </div>

          {/* Centered Headline with Drop Shadow */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-5 drop-shadow-xl text-center">
            Pediatric Care &amp; Adult Internal Medicine
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-md text-center">
            Compassionate, multi-generational family healthcare led by founding pediatrician <strong>Dr. Nasir Ahmed, M.D.</strong> and internal medicine physician <strong>Dr. Ramin Ahmad, M.D.</strong>
          </p>

          {/* Centered Feature Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs sm:text-sm font-medium text-slate-200 mb-9 max-w-xl mx-auto">
            <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/20 shadow-md">✓ Guaranteed Same-Day Sick Visits</span>
            <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/20 shadow-md">✓ On-Site Diagnostic Labs</span>
            <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/20 shadow-md">✓ UF Health &amp; HCA Networks</span>
          </div>

          {/* Single Clean Centered Button */}
          <div className="flex items-center justify-center">
            <a
              href="#forms"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-teal-600 hover:from-sky-400 hover:to-teal-500 text-white font-extrabold text-base shadow-2xl shadow-sky-600/40 whitespace-nowrap transition-transform active:scale-95"
            >
              <FileTextIcon /> Patient Registration Forms (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats Bar (DARK BLUE NAVY) ──────────────────── */}
      <section className="section-wrapper py-10 bg-[#070e1f] border-y border-slate-800 relative z-20">
        <div className="site-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-center items-center">
            {[
              { target: 20, suffix: '+', label: 'Years in High Springs' },
              { target: 5.0, suffix: ' ★', label: 'Patient Rating' },
              { target: 21, suffix: '', label: 'Communities Served' },
              { target: 2, suffix: ' MDs', label: 'Generations of Doctors' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="bg-slate-900/90 rounded-2xl p-5 sm:p-6 text-center shadow-lg border border-slate-800 flex flex-col items-center justify-center"
              >
                <div className="text-3xl sm:text-4xl font-black text-sky-400 flex items-center justify-center">
                  <CountUp to={stat.target} duration={1.5 + i * 0.2} />
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-300 mt-1.5 text-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet Our Physicians (DARK BLUE NAVY BACKGROUND + CENTERED) ── */}
      <section id="physicians" className="section-wrapper py-20 lg:py-28 bg-slate-950 text-white">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2 text-center">
              Medical Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white text-center">
              Meet Our Physicians
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-2 text-center">
              Dr. Nasir Ahmed and his son Dr. Ramin Ahmad provide trusted family healthcare under one roof.
            </p>
          </div>

          {/* Symmetrical 2-card desktop layout with dark blue glass styling */}
          <div className="grid md:grid-cols-2 gap-7 lg:gap-8 items-stretch justify-center w-full">
            {physicians.map((doc) => (
              <SpotlightCard
                key={doc.name}
                spotlightColor={doc.spotlight}
                className="bg-slate-900/90 rounded-3xl border border-slate-800 p-7 sm:p-9 shadow-xl flex flex-col justify-start"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
                  {/* Larger Doctor Photo */}
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl object-cover border-2 border-sky-400/40 shadow-lg flex-shrink-0 mx-auto sm:mx-0"
                  />
                  <div className="text-center sm:text-left min-w-0">
                    <span className="text-xs font-bold uppercase text-sky-400 tracking-wider block mb-1">
                      {doc.role}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                      {doc.name}
                    </h3>
                    <p className="text-sm font-semibold text-slate-400 mt-1">{doc.title}</p>
                  </div>
                </div>

                {/* Larger, Clearer Bullet Points */}
                <ul className="space-y-3 mt-2">
                  {doc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm sm:text-base text-slate-200 leading-relaxed">
                      <CheckIcon />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Core Services (DEEP BLUE NAVY BACKGROUND + ALL 4 CARDS) ── */}
      <section id="services" className="section-wrapper py-20 lg:py-28 bg-[#0a1224] border-y border-slate-800 text-white">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2 text-center">
              Care For Every Age
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white text-center">
              Our Core Services
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-2 text-center">
              From newborn milestone checks to adult preventive physicals and chronic condition care.
            </p>
          </div>

          {/* Symmetrical 4-Card Grid in Dark Blue Theme */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 justify-center w-full">
            {services.map((svc) => (
              <SpotlightCard
                key={svc.title}
                spotlightColor={svc.spotlight}
                className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between hover:shadow-2xl transition-all"
              >
                <div>
                  <div className="h-44 sm:h-48 overflow-hidden relative">
                    <img
                      src={svc.img}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Frosted Glass Floating Badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold tracking-wide border border-white/20 shadow-sm">
                      {svc.badge}
                    </div>
                  </div>

                  <div className="p-5 text-center sm:text-left">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider mb-1">
                      <ShinyText text={svc.subtitle} color="#38bdf8" shineColor="#ffffff" speed={2.5} />
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between text-xs font-semibold">
                  <span className="text-teal-400 font-bold">
                    {svc.highlight}
                  </span>
                  <span className="text-slate-400 group-hover:text-sky-400 group-hover:translate-x-1 transition-all">
                    &rarr;
                  </span>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Patient Registration Forms (PDF) (DARK BLUE NAVY + CENTERED) ──────── */}
      <section id="forms" className="section-wrapper py-20 lg:py-28 bg-slate-950 text-white">
        <div className="site-container flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2 text-center">
              Fast-Track Your Visit
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white text-center">
              Patient Registration Forms (PDF)
            </h2>
            <p className="text-base text-slate-300 mt-2 text-center">
              Download and complete your official forms prior to arrival to save waiting room time.
            </p>
          </div>

          {/* Centered Flex Container with Equal Margins on Both Sides */}
          <div className="w-full flex justify-center">
            <div
              className="grid md:grid-cols-2 gap-7 w-full max-w-4xl"
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            >
              {/* Child Registration */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-7 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-900/50 text-sky-400 flex items-center justify-center mb-4 text-xl font-bold">
                    📄
                  </div>
                  <span className="text-xs font-bold uppercase text-sky-400 tracking-wider">
                    Pediatrics (Ages 0–18)
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">
                    Child Registration Packet (PDF)
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-7">
                    Official intake form for newborns, children, and teens. Includes patient medical history, insurance release, and parental consent.
                  </p>
                </div>

                <a
                  href={childPacketPdf}
                  download="High_Springs_Pediatrics_Child_Packet.pdf"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md transition-colors"
                >
                  <FileTextIcon /> Download Child Packet (PDF)
                </a>
              </div>

              {/* Adult Registration */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-7 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-900/50 text-teal-400 flex items-center justify-center mb-4 text-xl font-bold">
                    📋
                  </div>
                  <span className="text-xs font-bold uppercase text-teal-400 tracking-wider">
                    Adult Primary Care
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">
                    Adult New Patient Form (PDF)
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-7">
                    Official adult intake form for Dr. Ramin Ahmad, M.D. Covers health history, cardiovascular care, and medication review.
                  </p>
                </div>

                <a
                  href={adultFormPdf}
                  download="High_Springs_Primary_Care_Adult_Form.pdf"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-md transition-colors"
                >
                  <FileTextIcon /> Download Adult Form (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Insurance & Clinic Exterior (DEEP BLUE NAVY) ───────────── */}
      <section id="insurance" className="section-wrapper py-20 lg:py-28 bg-[#0a1224] border-y border-slate-800 text-white">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center justify-center w-full">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2">
                Insurance &amp; Coverage
              </span>
              <h2 className="text-3xl font-black text-white mb-4">
                Accepted Insurance Plans
              </h2>
              <p className="text-base text-slate-300 leading-relaxed mb-8">
                We accept most major commercial insurance carriers, Medicare for adult primary care, and Florida Medicaid.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm font-semibold text-slate-200">
                <span className="flex items-center gap-2"><CheckIcon /> Florida Blue</span>
                <span className="flex items-center gap-2"><CheckIcon /> Medicare</span>
                <span className="flex items-center gap-2"><CheckIcon /> Florida Medicaid</span>
                <span className="flex items-center gap-2"><CheckIcon /> Staywell / Sunshine</span>
                <span className="flex items-center gap-2"><CheckIcon /> UnitedHealthcare</span>
                <span className="flex items-center gap-2"><CheckIcon /> Aetna / Cigna</span>
                <span className="flex items-center gap-2"><CheckIcon /> Tricare / CHAMPVA</span>
                <span className="flex items-center gap-2"><CheckIcon /> Direct Billing</span>
              </div>
            </div>

            {/* Clinic Exterior Tilted Card */}
            <div className="h-72 sm:h-80 rounded-3xl overflow-hidden shadow-xl">
              <TiltedCard
                imageSrc={clinicExteriorImg}
                altText="High Springs Pediatrics Clinic Building"
                captionText="19228 NW US Highway 441, High Springs, FL"
                containerHeight="100%"
                containerWidth="100%"
                scaleOnHover={1.02}
                rotateAmplitude={6}
                showTooltip={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact & Location (DARK BLUE NAVY) ────────────────────── */}
      <section id="contact" className="section-wrapper py-24 lg:py-32 bg-slate-950 text-white">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start justify-center w-full">
            {/* Office Info */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2">
                Office Information
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mb-6">
                Visit or Call Our Clinic
              </h2>
              <p className="text-base text-slate-300 mb-8 leading-relaxed">
                Conveniently located on US Highway 441 in High Springs with ground-level parking and easy stroller access.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-600/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                    <PhoneIcon />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">Telephone Line</div>
                    <a href={CLINIC.phoneTel} className="text-2xl font-black text-sky-300 hover:text-white transition-colors">
                      {CLINIC.phone}
                    </a>
                    <div className="text-xs text-slate-400 mt-1">Fax: {CLINIC.fax}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-600/20 text-teal-400 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">Clinic Address</div>
                    <div className="text-lg font-bold text-white mt-1">{CLINIC.address}</div>
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

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-600/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                    <ClockIcon />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">Office Hours</div>
                    <div className="text-base font-semibold text-white mt-1">{CLINIC.hours}</div>
                    <div className="text-xs text-slate-400 mt-1">Saturday &amp; Sunday: Closed &bull; Emergency: Call 911</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Request Form */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-2 text-white">Request an Appointment</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Or call directly at <a href={CLINIC.phoneTel} className="text-sky-400 font-bold underline">{CLINIC.phone}</a> for immediate same-day scheduling.
              </p>

              {submitted ? (
                <div className="bg-emerald-950/60 border border-emerald-800 rounded-2xl p-6 text-center">
                  <p className="text-lg font-bold text-emerald-200">Appointment Request Sent</p>
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
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">
                      Patient / Parent Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 text-white text-sm outline-none focus:border-sky-500"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 text-white text-sm outline-none focus:border-sky-500"
                      placeholder="(386) 454-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">
                      Physician / Service *
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 text-white text-sm outline-none focus:border-sky-500"
                    >
                      <option>Dr. Nasir Ahmed, MD (Pediatrics Ages 0–18)</option>
                      <option>Dr. Ramin Ahmad, MD (Adult Primary Care)</option>
                      <option>Guaranteed Same-Day Sick Visit</option>
                      <option>Immunizations &amp; Physicals</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-extrabold text-sm sm:text-base shadow-xl transition-all"
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
      <footer className="section-wrapper bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-xs mt-auto">
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
    </div>
  )
}

export default App
