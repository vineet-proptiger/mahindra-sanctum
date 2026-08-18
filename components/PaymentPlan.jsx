'use client'
import React from 'react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const rows = [
  {
    label: 'Booking Amount — Within 30 Days of Booking',
    value: '10% + GST + Registration & Stamp Duty',
  },
  {
    label: 'Within 90 Days of Booking',
    value: '15% + GST',
  },
  {
    label: 'Within 36 Months or 22nd Floor Slab Completion',
    value: '25% + GST',
  },
  {
    label: 'On Application of OC',
    value: '25% + GST',
  },
  {
    label: 'On Offer of Possession',
    value: '25% + GST + IFMSD + Other Charges',
  },
]

const PaymentPlan = ({ setIsOpen }) => (
  <section style={{
    padding: '56px 0',
    background: '#fafaf8',
    borderBottom: '1px solid #f0f0f0',
  }}>
    <div className="container mx-auto px-4 md:px-8">

      {/* Header */}
      <div style={{ marginBottom: '40px', textAlign: 'center' }} data-aos="fade-up">
        <h2 style={{
          fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
          color: '#3A2A0E', letterSpacing: '0.1em',
          textTransform: 'uppercase', margin: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          EASY FLEXI PAYMENT PLAN
        </h2>
      </div>

      {/* Table */}
      <div style={{
        maxWidth: '860px',
        margin: '0 auto',
        background: '#fff',
        borderRadius: '14px',
        border: '1px solid #e5e7eb',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
      }} data-aos="fade-up" data-aos-delay="100">
        {rows.map((row, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              padding: '18px 28px',
              borderBottom: idx < rows.length - 1 ? '1px solid #f0f0f0' : 'none',
              flexWrap: 'wrap',
            }}
          >
            <p style={{
              fontFamily: F_SANS,
              fontSize: '13.5px',
              color: '#374151',
              margin: 0,
              flex: '1 1 280px',
              lineHeight: 1.55,
              fontWeight: '500',
            }}>
              {row.label}
            </p>
            <p style={{
              fontFamily: F_SANS,
              fontSize: '13px',
              color: 'var(--color-gold-dark, #8A6E28)',
              margin: 0,
              flex: '1 1 220px',
              textAlign: 'right',
              lineHeight: 1.55,
              fontWeight: '600',
            }}>
              {row.value}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', marginTop: '32px' }} data-aos="fade-up">
        <button onClick={() => setIsOpen(true)} className="btn-gold"
          style={{ padding: '13px 44px', letterSpacing: '0.08em' }}>
          Get Detailed Payment Schedule
        </button>
      </div>

    </div>
  </section>
)

export default PaymentPlan
