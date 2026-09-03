import { MapPin, Navigation, Car, Accessibility, Clock } from 'lucide-react'
import clinicExteriorImg from '../assets/clinic_exterior.jpg'

export const ClinicTour = () => {
  const mapUrl = 'https://maps.google.com/?q=19228+NW+US+Highway+441,+High+Springs,+FL+32643'

  return (
    <section id="location" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="site-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wide uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            <span>High Springs Facility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Convenient, Ground-Level Clinic
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Located directly on NW US Highway 441 in High Springs with abundant free parking and effortless stroller access.
          </p>
        </div>

        {/* Facility Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Photo */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-white relative group aspect-[16/10]">
            <img
              src={clinicExteriorImg}
              alt="High Springs Pediatrics and Adult Primary Care building exterior on Highway 441"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-4 sm:p-5 text-white flex items-center justify-between">
              <div>
                <p className="font-extrabold text-sm sm:text-base">High Springs Medical Facility</p>
                <p className="text-xs text-sky-300 font-medium">19228 NW US Highway 441</p>
              </div>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-white text-slate-900 font-bold text-xs hover:bg-sky-50 shadow-md flex items-center gap-1.5 transition-all"
              >
                <span>Navigate</span>
                <Navigation className="w-3.5 h-3.5 text-sky-600" />
              </a>
            </div>
          </div>

          {/* Details & Highlights */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Hassle-Free Direct Parking</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Park just feet from the front entrance with dedicated parking spaces and easy turning off US Highway 441.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                  <Accessibility className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Ground-Level Stroller Access</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No stairs, no confusing elevators. Roll strollers or wheelchairs smoothly straight through our double entry doors.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Clinic Hours</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                Monday – Friday: 9:00 AM – 5:00 PM
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                Same-day triage calls answered starting at 9:00 AM every weekday.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default ClinicTour
