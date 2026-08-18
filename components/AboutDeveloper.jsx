'use client'
import React, { useState } from 'react'
import { PROJECT_ID, PROJECT_NAME, API_ENDPOINT, SHEET_NAME, SECRET_KEY, CITY_DISPLAY } from '../lib/config'
import { buildTrackingFields } from '../lib/formMeta'

const GOLD = 'var(--color-gold)'
const GOLD_DARK = 'var(--color-gold-dark)'
const PRIMARY = 'var(--color-primary)'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const ContactForm = () => {
  const [form, setForm] = useState({ fullname: '', phone: '', email: '', honeypot: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handle = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: name === 'phone' ? value.replace(/\D/g, '') : value })
  }

  const submit = async (e) => {
    e.preventDefault()
    if (form.honeypot) return
    if (form.phone.length !== 10) { setError('Enter valid 10-digit number'); return }
    if (!/^[6-9]\d{9}$/.test(form.phone)) { setError('Phone number must start with 6, 7, 8, or 9'); return }
    setError(''); setLoading(true)
    const tracking = buildTrackingFields()
    const payload = new FormData()
    payload.append('fullname', form.fullname)
    payload.append('phone', form.phone)
    payload.append('email', form.email || '')
    payload.append('projectId', PROJECT_ID)
    payload.append('projectName', PROJECT_NAME)
    payload.append('form_name', 'Developer Section Form')
    payload.append('sheet_name', SHEET_NAME)
    payload.append('secret', SECRET_KEY)
    payload.append('city', CITY_DISPLAY)
    Object.entries(tracking).forEach(([k, v]) => payload.append(k, v))
    try {
      const res = await fetch(API_ENDPOINT, { method: 'POST', body: payload })
      const data = await res.json()
      if (data.status) {
        setSuccess(true)
        if (typeof window !== 'undefined') {
          window.dataLayer = window.dataLayer || []
          const nameParts = form.fullname.trim().split(' ')
          window.dataLayer.push({
            event: 'lead_submit_success', form_name: 'Developer Section Form',
            user_data: {
              email: form.email.trim() || undefined, phone: `+91${form.phone}`,
              first_name: nameParts[0] || '', last_name: nameParts.slice(1).join(' ') || ''
            }
          })
        }
      } else setError(data.msg || 'Something went wrong.')
    } catch { setError('Network error. Please try again.') }
    finally { setLoading(false) }
  }

  if (success) return (
    <div style={{ padding: '40px 0', textAlign: 'center' }}>
      <div style={{
        width: '56px', height: '56px', borderRadius: '50%', background: 'var(--color-gold-bg)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px'
      }}>
        <svg width="28" height="28" fill="none" stroke={GOLD_DARK} strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p style={{ fontWeight: '700', fontSize: '18px', color: 'var(--color-text)', fontFamily: F_SANS }}>Thank You!</p>
      <p style={{ color: '#666', fontSize: '14px', marginTop: '6px', fontFamily: F_SANS }}>Our team will contact you shortly.</p>
    </div>
  )

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <div>
        <label style={{
          display: 'block', fontSize: '11px', fontWeight: '700', color: '#6b7280',
          fontFamily: F_JOST, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '5px'
        }}>Full Name <span style={{ color: GOLD }}>*</span></label>
        <input name="fullname" required value={form.fullname} onChange={handle} placeholder="Enter full name"
          className="form-input" style={{ fontFamily: F_SANS, width: '100%' }} />
      </div>

      <div>
        <label style={{
          display: 'block', fontSize: '11px', fontWeight: '700', color: '#6b7280',
          fontFamily: F_JOST, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '5px'
        }}>Email Address</label>
        <input name="email" value={form.email} onChange={handle} placeholder="Email Id (optional)"
          className="form-input" style={{ fontFamily: F_SANS, width: '100%' }} />
      </div>

      {/* Honeypot field - invisible to humans, bots will fill it */}
      <input type="text" name="honeypot" tabIndex="-1" autoComplete="off" value={form.honeypot} onChange={handle} style={{ display: 'none' }} />

      <div>
        <label style={{
          display: 'block', fontSize: '11px', fontWeight: '700', color: '#6b7280',
          fontFamily: F_JOST, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '5px'
        }}>Mobile Number <span style={{ color: GOLD }}>*</span></label>
        <input name="phone" required value={form.phone} onChange={handle}
          placeholder="10-digit mobile number" maxLength={10}
          className="form-input" style={{ fontFamily: F_SANS, width: '100%' }} />
      </div>

      {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}

      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}>
        <input type="checkbox" required defaultChecked style={{ accentColor: GOLD, marginTop: '2px', flexShrink: 0 }} />
        <span style={{ fontSize: '12px', color: '#777', fontFamily: F_SANS, lineHeight: 1.5 }}>
          I authorize the developer &amp; its representatives to contact me via Email / SMS / WhatsApp / Call.
        </span>
      </label>

      <button type="submit" disabled={loading}
        className="btn-gold" style={{ width: '100%', marginTop: '12px' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
        {loading ? 'Submitting...' : 'Submit Details'}
      </button>
    </form>
  )
}

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

const AboutDeveloper = ({ setIsOpen }) => (
  <section id="developer" className="py-14 sm:py-20 bg-[#ffffff] border-b border-gray-100">
    <div className="container mx-auto px-4 md:px-8">

      {/* Heading */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 style={{
          fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
          color: '#3A2A0E', letterSpacing: '0.1em',
          textTransform: 'uppercase', margin: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          ABOUT THE DEVELOPER
        </h2>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">

        {/* Left — Developer Info Card */}
        <div style={{
          background: '#fff',
          display: 'flex', flexDirection: 'column', height: '100%',
          position: 'relative',
          border: '1px solid #9C846C',
        }} data-aos="fade-right" data-aos-delay="100">
          <CurvedCorners bg="#ffffff" />

          {/* Light Header */}
          <div style={{
            background: '#FAF5F5',
            padding: '24px 32px', position: 'relative',
            borderBottom: '1px solid #D5C2A8'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', position: 'relative' }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%', flexShrink: 0,
                background: '#fff',
                border: '1px solid #9C846C',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9C846C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div>
                <h3 style={{ fontFamily: F_JOST, fontWeight: '700', fontSize: '20px', color: '#3A2A0E', margin: '0 0 4px', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                  Mahindra Lifespaces
                </h3>
              </div>
            </div>
          </div>

          {/* White Body */}
          <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <p style={{ color: '#3A2A0E', fontFamily: F_SANS, lineHeight: 1.85, fontSize: '15px', margin: '0 0 20px', textAlign: 'justify', opacity: 0.9 }}>
                A part of the prestigious Mahindra Group of Companies, Mahindra Lifespaces is a real estate firm that builds quality residences, industrial complexes, &amp; even integrated cities. With a presence in 9 cities in India, the company has coupled its innovative technology with sustainable practices to deliver 43 residential projects in India.
              </p>
              <p style={{ color: '#3A2A0E', fontFamily: F_SANS, lineHeight: 1.85, fontSize: '15px', margin: '0 0 24px', textAlign: 'justify', opacity: 0.9 }}>
                With Mahindra Sanctum, we are bringing our legacy of excellence to the vibrant heart of Pimpri, Pune. This flagship residential development is thoughtfully crafted to offer a sanctuary of peace amidst urban convenience. Featuring expansive terrace-style decks, cutting-edge smart home automation, and over 30 premium amenities, Mahindra Sanctum redefines contemporary luxury living.
              </p>
            </div>

            <button onClick={() => setIsOpen(true)}
              className="btn-gold"
              style={{ width: '100%' }}>
              Know More
            </button>
          </div>
        </div>

        {/* Right — Contact Form */}
        <div style={{
          background: '#fff',
          position: 'relative',
          border: '1px solid #9C846C',
          display: 'flex', flexDirection: 'column', height: '100%',
        }} data-aos="fade-left" data-aos-delay="200">
          <CurvedCorners bg="#ffffff" />

          {/* Form Header */}
          <div style={{
            background: '#FDF8F6',
            padding: '24px 32px', position: 'relative',
            borderBottom: '1px solid #D5C2A8'
          }}>
            <h3 style={{
              fontFamily: F_JOST, fontWeight: '700', fontSize: '20px',
              color: '#3A2A0E', margin: '0 0 6px', letterSpacing: '0.02em', textTransform: 'uppercase'
            }}>
              Book Site Visit Today
            </h3>
            <p style={{ fontFamily: F_SANS, fontSize: '13px', color: '#684C1B', margin: 0, fontWeight: '500' }}>
              Register now to get the best deal &amp; book your site visit
            </p>
          </div>

          {/* Form Body */}
          <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <ContactForm />
          </div>
        </div>

      </div>
    </div>
  </section>
)

export default AboutDeveloper
