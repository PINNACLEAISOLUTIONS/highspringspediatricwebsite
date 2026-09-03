import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { QuickStats } from './components/QuickStats'
import { Physicians } from './components/Physicians'
import { Services } from './components/Services'
import { WhyChooseUs } from './components/WhyChooseUs'
import { InsuranceChecker } from './components/InsuranceChecker'
import { PatientForms } from './components/PatientForms'
import { ClinicTour } from './components/ClinicTour'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { AppointmentSection } from './components/AppointmentSection'
import { Footer } from './components/Footer'
import { MobileQuickBar } from './components/MobileQuickBar'
import { AppointmentModal } from './components/AppointmentModal'
import './App.css'

export function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState<string | undefined>(undefined)

  const handleOpenAppointmentModal = (doctorOrService?: string) => {
    if (doctorOrService && doctorOrService.includes('Dr. Ramin')) {
      setSelectedDoctor('Dr. Ramin Ahmad, M.D. (Adult Primary Care)')
    } else if (doctorOrService && doctorOrService.includes('Dr. Nasir')) {
      setSelectedDoctor('Dr. Nasir Ahmed, M.D. (Pediatrics Ages 0–18)')
    } else {
      setSelectedDoctor(undefined)
    }
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white pb-14 md:pb-0">
      {/* Navigation */}
      <Navbar onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

      {/* 3. High-Impact Warm Hero Section */}
      <Hero onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

      {/* 4. Core Practice Stats Bar */}
      <QuickStats />

      {/* 5. Father & Son Physician Profiles */}
      <Physicians onOpenAppointmentModal={handleOpenAppointmentModal} />

      {/* 6. Medical Services Suite with Authentic Imagery */}
      <Services onOpenAppointmentModal={handleOpenAppointmentModal} />

      {/* 7. Key Practice Pillars (Why Choose Us) */}
      <WhyChooseUs />

      {/* 8. Interactive Insurance Plan Checker */}
      <InsuranceChecker />

      {/* 9. Patient Registration Forms (PDF Downloads) */}
      <PatientForms />

      {/* 10. High Springs Facility & Ground-Level Accessibility */}
      <ClinicTour />

      {/* 11. Parent & Patient Community Reviews */}
      <Testimonials />

      {/* 12. Frequently Asked Questions Accordion */}
      <Faq />

      {/* 13. Comprehensive In-Page Appointment & Callback Form */}
      <AppointmentSection />

      {/* 14. Polished Healthcare Footer */}
      <Footer />

      {/* 15. Native-Feel Mobile Quick Action Bar (Call, Book, Forms, Directions) */}
      <MobileQuickBar onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

      {/* 16. Global Quick Booking Modal */}
      <AppointmentModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialDoctor={selectedDoctor}
      />
    </div>
  )
}

export default App
