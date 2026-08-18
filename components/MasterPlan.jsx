'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { masterplanImages } from '../lib/images'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const plans = [
  { label: 'Site Master Plan', img: masterplanImages.masterPlan },
  { label: '2 BHK',           img: masterplanImages.bhk2 },
  { label: '3 BHK',           img: masterplanImages.bhk3 },
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

const MasterPlan = ({ setIsOpen }) => {
  const [activePlan, setActivePlan] = useState(0)

  return (
    <section id="masterplan" style={{
      padding: '72px 0',
      background: '#ffffff',
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
            FLOOR PLANS &amp; LAYOUT
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* LEFT — Tabs */}
          <div className="w-full lg:w-[35%]" data-aos="fade-right">
            <div style={{
              background: '#fff', 
              position: 'relative',
              border: '1px solid #9C846C', 
              height: '100%',
              display: 'flex', flexDirection: 'column'
            }}>
              <CurvedCorners bg="#ffffff" />
              
              {/* Tab header */}
              <div style={{
                background: '#FAF5F5',
                padding: '24px 28px', borderBottom: '1px solid #D5C2A8'
              }}>
                <p style={{
                  fontFamily: F_JOST, fontWeight: '700', fontSize: '14px',
                  color: '#3A2A0E', letterSpacing: '0.1em',
                  textTransform: 'uppercase', margin: 0
                }}>
                  Select Floor Plan
                </p>
              </div>

              {/* Tab buttons */}
              <div style={{ flex: 1, padding: '16px 0' }}>
                {plans.map((plan, i) => {
                  const isActive = activePlan === i
                  return (
                    <button
                      key={i}
                      onClick={() => setActivePlan(i)}
                      style={{
                        width: '100%', display: 'flex', alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '20px 28px',
                        background: isActive ? '#FDF8F6' : 'transparent',
                        borderLeft: isActive ? '3px solid #9C846C' : '3px solid transparent',
                        borderBottom: '1px solid #EAE5D9',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <span style={{
                          width: '28px', height: '28px', borderRadius: '50%',
                          background: isActive ? '#9C846C' : '#F4EFE6',
                          color: isActive ? '#fff' : '#684C1B',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '11px', fontWeight: '700', fontFamily: F_JOST
                        }}>
                          0{i + 1}
                        </span>
                        <span style={{
                          fontFamily: F_SANS, fontWeight: isActive ? '700' : '600',
                          fontSize: '15px',
                          color: isActive ? '#3A2A0E' : '#6b7280'
                        }}>
                          {plan.label}
                        </span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke={isActive ? '#9C846C' : '#d1d5db'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  )
                })}
              </div>

              {/* Note */}
              <div style={{ padding: '24px 28px', borderTop: '1px solid #D5C2A8', background: '#ffffff' }}>
                <p style={{ fontFamily: F_SANS, fontSize: '13px', color: '#684C1B', margin: 0, lineHeight: 1.6 }}>
                  Register to receive detailed floor plans &amp; pricing directly to your inbox.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — Image preview */}
          <div className="w-full lg:flex-1" data-aos="fade-left">
            <div style={{
              position: 'relative', 
              border: '1px solid #9C846C',
              height: '100%', minHeight: '450px',
              background: '#ffffff'
            }}>
              <CurvedCorners bg="#ffffff" />

              {/* Plan label top-left */}
              <div style={{
                position: 'absolute', top: '24px', left: '24px', zIndex: 10,
                background: '#3A2A0E',
                padding: '6px 14px',
              }}>
                <span style={{
                  color: '#fff', fontSize: '11px', fontFamily: F_JOST,
                  fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase'
                }}>
                  {plans[activePlan].label}
                </span>
              </div>

              {/* Blurred image */}
              <Image src={plans[activePlan].img} alt={plans[activePlan].label} fill
                style={{ objectFit: 'cover', filter: 'blur(6px)', transform: 'scale(1.04)' }} />

              {/* Dark overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'rgba(58, 42, 14, 0.45)', // Dark brown tint
              }} />

              {/* CTA in center */}
              <div style={{
                position: 'absolute', inset: 0, zIndex: 5,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: '16px',
              }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </div>
                
                <p style={{
                  fontFamily: F_SANS, color: '#fff', fontSize: '14px',
                  margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.5)', fontWeight: '500'
                }}>
                  Register to Unlock Floor Plan
                </p>
                
                <button
                  onClick={() => setIsOpen(true)}
                  className="btn-gold"
                  style={{ width: '100%', marginTop: '8px' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  View Plan
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MasterPlan
