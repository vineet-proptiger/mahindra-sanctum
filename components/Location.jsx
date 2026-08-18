'use client'
import React from 'react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const locationCategories = [
  {
    category: 'Connectivity',
    items: [
      { name: 'Old Mumbai–Pune Highway', dist: 'Immediate' },
      { name: 'Sant Tukaram Nagar Metro', dist: 'Adjoining' },
      { name: 'Kasarwadi Railway Station', dist: 'Nearby' },
      { name: 'Pune International Airport', dist: '40 Mins' },
    ],
  },
  {
    category: 'IT Parks',
    items: [
      { name: 'ICC Devi Gaurav Tech Park', dist: 'Close by' },
      { name: 'Hinjewadi IT Park', dist: 'Quick Access' },
      { name: 'Pimpri industrial corridor', dist: 'Quick Access' },
    ],
  },
]

const CurvedCorners = ({ bg = '#ffffff' }) => {
  const BORDER_COLOR = '#9C846C';
  const corners = [
    { top: '-1px', left: '-1px', borderRight: `1px solid ${BORDER_COLOR}`, borderBottom: `1px solid ${BORDER_COLOR}`, borderBottomRightRadius: '18px' },
    { top: '-1px', right: '-1px', borderLeft: `1px solid ${BORDER_COLOR}`, borderBottom: `1px solid ${BORDER_COLOR}`, borderBottomLeftRadius: '18px' },
    { bottom: '-1px', left: '-1px', borderRight: `1px solid ${BORDER_COLOR}`, borderTop: `1px solid ${BORDER_COLOR}`, borderTopRightRadius: '18px' },
    { bottom: '-1px', right: '-1px', borderLeft: `1px solid ${BORDER_COLOR}`, borderTop: `1px solid ${BORDER_COLOR}`, borderTopLeftRadius: '18px' },
  ]
  return corners.map((c, i) => (
    <span key={i} style={{ position: 'absolute', ...c, width: '22px', height: '22px', background: bg, display: 'block', zIndex: 10 }} />
  ))
}

const Location = () => {

  return (
    <section id="location" style={{
      padding: '72px 0',
      background: '#ffffff', // Clean white background for the section
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* Section Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }} data-aos="fade-up">
           <h2 className="location-title" style={{
             fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
             color: '#3A2A0E', letterSpacing: '0.1em',
             textTransform: 'uppercase', margin: 0,
             display: 'flex', alignItems: 'center', justifyContent: 'center',
           }}>
             PRIME CONNECTIVITY AT PIMPRI, PUNE
           </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* LEFT — Premium List */}
          <div className="w-full lg:w-[45%]" data-aos="fade-right">
            <div style={{
              position: 'relative',
              border: '1px solid #9C846C',
              background: '#ffffff',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <CurvedCorners bg="#ffffff" />
              
              <div style={{ padding: '40px 32px' }}>
                {locationCategories.map((cat, ci) => (
                  <div key={ci} style={{ marginBottom: ci === locationCategories.length - 1 ? 0 : '36px' }}>
                    {/* Category Header */}
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'
                    }}>
                      <span style={{
                        fontFamily: F_JOST, fontSize: '12px', fontWeight: '700',
                        color: '#9C846C', letterSpacing: '0.15em', textTransform: 'uppercase'
                      }}>{cat.category}</span>
                      <div style={{ height: '1px', flex: 1, background: '#EAE5D9' }} />
                    </div>

                    {/* Rows */}
                    <div className="space-y-4">
                      {cat.items.map((item, i) => (
                        <div key={i} style={{
                          display: 'flex', alignItems: 'center',
                          fontFamily: F_SANS,
                        }}>
                          <span style={{ color: '#3A2A0E', fontWeight: '600', fontSize: '14.5px' }}>{item.name}</span>
                          <div style={{ flex: 1, borderBottom: '1.5px dotted #D5C2A8', margin: '0 16px', opacity: 0.8, position: 'relative', top: '2px' }} />
                          <span style={{ color: '#9C846C', fontWeight: '700', fontSize: '13px', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>{item.dist}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Map */}
          <div className="w-full lg:flex-1" data-aos="fade-left" style={{ minHeight: '420px' }}>
            <div style={{
              border: '1px solid #9C846C',
              height: '100%', minHeight: '420px',
              position: 'relative',
              background: '#ffffff'
            }}>
              <CurvedCorners bg="#ffffff" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.1816435098326!2d73.8089392!3d18.6294055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9884eaf0485%3A0x116f6d7a51f6c3eb!2sMahindra%20Lifespaces%20Pimpri%20Pune!5e1!3m2!1sen!2sin!4v1782205881875!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', zIndex: 10,
                background: 'var(--color-gold)', opacity: 0.9, backdropFilter: 'blur(6px)',
                borderRadius: '8px', padding: '6px 14px',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{
                  color: '#fff', fontSize: '11px', fontFamily: F_JOST,
                  fontWeight: '700', letterSpacing: '0.04em'
                }}>
                  Pimpri, Pune
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
