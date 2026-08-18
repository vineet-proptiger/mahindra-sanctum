'use client'
import React from 'react'
import {
  Award, Waves, Users, Target,
  Footprints, Dumbbell, PawPrint, Home
} from 'lucide-react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'


const CurvedCorners = ({ bg = '#fff', color = '#e5e7eb' }) => {
  const corners = [
    { top: '-1px', left: '-1px', borderRight: `1px solid ${color}`, borderBottom: `1px solid ${color}`, borderBottomRightRadius: '18px' },
    { top: '-1px', right: '-1px', borderLeft: `1px solid ${color}`, borderBottom: `1px solid ${color}`, borderBottomLeftRadius: '18px' },
    { bottom: '-1px', left: '-1px', borderRight: `1px solid ${color}`, borderTop: `1px solid ${color}`, borderTopRightRadius: '18px' },
    { bottom: '-1px', right: '-1px', borderLeft: `1px solid ${color}`, borderTop: `1px solid ${color}`, borderTopLeftRadius: '18px' },
  ]
  return corners.map((c, i) => (
    <span key={i} style={{ position: 'absolute', ...c, width: '22px', height: '22px', background: bg, display: 'block' }} />
  ))
}

const newAmenities = [
  { icon: Award,      title: '30+ PREMIUM AMENITIES', desc: '30+ premium amenities across the development.', color: '#F59E0B' },
  { icon: Waves,      title: 'SWIMMING POOL',         desc: 'Half Olympic-size swimming pool.', color: '#3B82F6' },
  { icon: Users,      title: 'COMMUNITY HALL',        desc: 'Indoor community hall.', color: '#8B5CF6' },
  { icon: Target,     title: 'BADMINTON COURTS',      desc: 'Two badminton courts.', color: '#EF4444' },
  { icon: Footprints, title: 'REFLEXOLOGY PATHWAY',   desc: 'Reflexology pathway.', color: '#10B981' },
  { icon: Dumbbell,   title: 'GYMNASIUM',             desc: 'Fully equipped gymnasium and work pods.', color: '#64748B' },
  { icon: PawPrint,   title: 'PET PARK & PLAY AREA',  desc: 'Pet park, kids\' play area, banquet hall.', color: '#F97316' },
  { icon: Home,       title: 'FLAGSHIP CLUBHOUSE',    desc: 'Residents get access to Citadel\'s existing flagship clubhouse.', color: '#EC4899' },
]

const Amenities = () => {
  return (
    <section id="amenities" style={{
      padding: '72px 0',
      background: '#fff',
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* Section Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }} data-aos="fade-up">
          <h2 style={{
            fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
            color: '#3A2A0E', letterSpacing: '0.1em',
            textTransform: 'uppercase', margin: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            LIFESTYLE AMENITIES – EXPERIENCE MORE EVERY DAY
          </h2>
        </div>

        {/* Grid Container */}
        <div data-aos="fade-up" data-aos-delay="100" style={{
          position: 'relative',
          border: '1px solid #9C846C',
          margin: '0 auto',
        }}>
          <CurvedCorners color="#9C846C" bg="#fff" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]" style={{ background: '#9C846C' }}>
            {newAmenities.map((item, idx) => (
              <div key={idx} className="bg-white flex flex-col items-center group" style={{
                padding: '48px 24px',
                textAlign: 'center',
              }}>
                {/* Icon */}
                <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-105 transition-transform duration-300" style={{ background: item.color }}>
                  <item.icon size={36} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: F_JOST, fontSize: '15px', fontWeight: '600',
                  color: '#684C1B', letterSpacing: '0.12em', margin: '0 0 12px'
                }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: F_SANS, fontSize: '13px', color: '#6b7280',
                  lineHeight: 1.6, margin: 0,
                  textAlign: 'justify'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Amenities
