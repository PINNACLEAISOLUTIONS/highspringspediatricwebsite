import { useState, useEffect } from 'react'
import heroBanner from './assets/hero-banner.jpg'
import wellnessImg from './assets/wellness.jpg'
import vaccinationsImg from './assets/vaccinations.jpg'
import './App.css'

/* ── Icon components ─────────────────────────────── */
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
)
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
)
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
)
const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
)
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
)
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
)
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
)
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
)
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
)
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
)
const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
)

/* ── Data ─────────────────────────────────────────── */
const services = [
  {
    title: 'Well-Child Visits',
    description: 'Comprehensive developmental screenings, growth monitoring, and preventive care from newborn through age 18.',
    image: wellnessImg,
    icon: <HeartIcon />,
  },
  {
    title: 'Immunizations',
    description: 'CDC-recommended vaccination schedules administered with care and compassion in a child-friendly environment.',
    image: vaccinationsImg,
    icon: <ShieldIcon />,
  },
  {
    title: 'Sick Visits',
    description: 'Same-day and next-day appointments for acute illnesses, infections, injuries, and urgent pediatric concerns.',
    image: null,
    icon: <HeartIcon />,
  },
  {
    title: 'Behavioral Health',
    description: 'Screening and support for ADHD, anxiety, developmental delays, and emotional well-being in children of all ages.',
    image: null,
    icon: <ShieldIcon />,
  },
]

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'Dr. Thompson and the entire team are incredible. My kids actually look forward to their check-ups! The office is warm, welcoming, and they always take time to answer every question.',
    rating: 5,
  },
  {
    name: 'James R.',
    text: 'We switched to High Springs Pediatrics last year and it was the best decision. They got us a same-day sick visit when our son had a high fever. Amazing responsiveness.',
    rating: 5,
  },
  {
    name: 'Maria L.',
    text: 'The developmental screening they did for our daughter caught something early that made a huge difference. We are so grateful for their thoroughness and genuine care.',
    rating: 5,
  },
]

/* ── Main App ─────────────────────────────────────── */
function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* ── Top Info Bar ─────────────────────────── */}
      <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <a href="tel:+13865551234" className="flex items-center gap-1.5 hover:text-primary-100 transition-colors" id="top-phone">
              <PhoneIcon /> (386) 555-1234
            </a>
            <span className="hidden sm:flex items-center gap-1.5">
              <ClockIcon /> Mon–Fri 8am–5pm
            </span>
          </div>
          <span className="flex items-center gap-1.5">
            <MapPinIcon /> 123 Main St, High Springs, FL 32643
          </span>
        </div>
      </div>

      {/* ── Navigation ───────────────────────────── */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg'
            : 'bg-white dark:bg-slate-900'
        }`}
        id="main-nav"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group" id="nav-logo">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-primary-500/30 transition-shadow">
              HS
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-slate-800 dark:text-white leading-tight block">High Springs</span>
              <span className="text-xs text-primary-600 dark:text-primary-400 font-medium tracking-wide uppercase">Pediatrics</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle dark mode"
              id="dark-mode-toggle"
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 transition-all duration-200"
              id="nav-book-btn"
            >
              Book Appointment
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 animate-fade-in-up">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-primary-50 dark:hover:bg-slate-800 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center mt-3 px-5 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold shadow-lg"
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── Hero Section ─────────────────────────── */}
      <section id="home" className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Pediatric doctor with happy children"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent" />
        </div>

        {/* Decorative floating shapes */}
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary-500/10 blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-accent-500/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 lg:py-44">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium mb-6 animate-fade-in-up backdrop-blur-sm border border-primary-500/20">
              <HeartIcon /> Trusted by families since 2005
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
              Compassionate Care for{' '}
              <span className="bg-gradient-to-r from-primary-300 to-accent-400 bg-clip-text text-transparent">
                Growing Families
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl animate-fade-in-up animate-delay-200">
              From first breaths to first steps and beyond — our board-certified pediatricians
              provide personalized, evidence-based healthcare for every stage of childhood.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-300">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold text-lg shadow-2xl shadow-primary-500/30 hover:shadow-primary-500/50 hover:scale-105 transition-all duration-200"
                id="hero-cta"
              >
                Schedule a Visit <ChevronRightIcon />
              </a>
              <a
                href="tel:+13865551234"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/25 text-white font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
                id="hero-phone"
              >
                <PhoneIcon /> Call Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,64 C480,120 960,0 1440,64 L1440,120 L0,120 Z" className="fill-white dark:fill-slate-900" />
          </svg>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────── */}
      <section className="relative -mt-1 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { value: '20+', label: 'Years of Experience' },
              { value: '15K+', label: 'Families Served' },
              { value: '4.9', label: 'Patient Rating' },
              { value: '6', label: 'Board-Certified Doctors' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-3xl lg:text-4xl font-extrabold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Section ─────────────────────── */}
      <section id="services" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4 uppercase tracking-wide">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Complete Pediatric Care
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              Everything your child needs under one roof — from routine wellness to specialized care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                id={`service-${i}`}
              >
                {svc.image ? (
                  <div className="h-56 overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="h-56 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white shadow-lg">
                      {svc.icon}
                    </div>
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/40 flex items-center justify-center text-primary-600 dark:text-primary-400">
                      {svc.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">{svc.title}</h3>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{svc.description}</p>
                  <a href="#contact" className="inline-flex items-center gap-1 mt-4 text-primary-600 dark:text-primary-400 font-semibold text-sm hover:gap-2 transition-all">
                    Learn more <ChevronRightIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Section ────────────────────────── */}
      <section id="about" className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-primary-50/30 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image collage */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl pulse-glow">
                <img
                  src={wellnessImg}
                  alt="Our caring pediatric team"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-8 glass dark:glass-dark rounded-2xl p-5 shadow-xl animate-float">
                <div className="text-3xl font-extrabold gradient-text">20+</div>
                <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">Years Caring<br />for Children</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4 uppercase tracking-wide">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">
                A Tradition of Excellence in{' '}
                <span className="gradient-text">Children's Health</span>
              </h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                Founded in 2005, High Springs Pediatrics has been the cornerstone of children's healthcare
                in Alachua County. Our team of six board-certified pediatricians combines cutting-edge
                medicine with old-fashioned compassion.
              </p>
              <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                We believe every child deserves a medical home where they feel safe, heard, and valued.
                From newborn care to adolescent medicine, we walk alongside families through every
                milestone.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {['Board-Certified Physicians', 'Same-Day Sick Visits', 'Telehealth Available', 'Bilingual Staff'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────── */}
      <section id="testimonials" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4 uppercase tracking-wide">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              What Families Say
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              Hear from the parents and families who trust us with their children's care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                id={`testimonial-${i}`}
              >
                <div className="flex gap-1 text-amber-400 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <StarIcon key={j} />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <span className="font-semibold text-slate-800 dark:text-white">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / CTA ────────────────────────── */}
      <section id="contact" className="py-24 lg:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left side */}
            <div className="text-white">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-semibold mb-4 uppercase tracking-wide backdrop-blur-sm">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                Ready to Give Your Child the Best Care?
              </h2>
              <p className="text-lg text-primary-100 mb-10 leading-relaxed">
                We're accepting new patients! Schedule your child's appointment today and
                experience the High Springs Pediatrics difference.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <PhoneIcon />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href="tel:+13865551234" className="text-primary-100 hover:text-white transition-colors">(386) 555-1234</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <MapPinIcon />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Address</div>
                    <span className="text-primary-100">123 Main Street, High Springs, FL 32643</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <ClockIcon />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Office Hours</div>
                    <span className="text-primary-100">Monday – Friday: 8:00 AM – 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Request an Appointment</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="parent-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Parent Name</label>
                    <input
                      type="text"
                      id="parent-name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="child-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Child's Name</label>
                    <input
                      type="text"
                      id="child-name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="Child's name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="(386) 555-0000"
                  />
                </div>
                <div>
                  <label htmlFor="visit-type" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Visit Type</label>
                  <select
                    id="visit-type"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a visit type</option>
                    <option value="well-child">Well-Child Visit</option>
                    <option value="sick">Sick Visit</option>
                    <option value="immunization">Immunization</option>
                    <option value="new-patient">New Patient</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Message (Optional)</label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Any details we should know..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold text-lg shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-[1.02] transition-all duration-200"
                  id="submit-appointment"
                >
                  Request Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────── */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg">
                  HS
                </div>
                <div>
                  <span className="font-bold text-white leading-tight block">High Springs</span>
                  <span className="text-xs text-primary-400 font-medium tracking-wide uppercase">Pediatrics</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                Providing compassionate, expert pediatric healthcare to the High Springs community since 2005.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-primary-400 transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2.5 text-sm">
                {services.map((svc) => (
                  <li key={svc.title}>
                    <a href="#services" className="hover:text-primary-400 transition-colors">{svc.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><PhoneIcon /> (386) 555-1234</li>
                <li className="flex items-center gap-2"><MapPinIcon /> 123 Main St, High Springs, FL</li>
                <li className="flex items-center gap-2"><ClockIcon /> Mon–Fri 8am–5pm</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-wrap justify-between items-center gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} High Springs Pediatrics. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-400 transition-colors">HIPAA Notice</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
