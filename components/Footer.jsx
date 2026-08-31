'use client'
import React from 'react'
import Link from 'next/link'


const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const Footer = () => (
  <footer style={{ background: '#FAF5F5', color: '#3A2A0E', borderTop: '1px solid #D5C2A8' }}>

    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 40px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '26px', fontWeight: '700', fontFamily: F_JOST, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3A2A0E' }} data-aos="fade-in">
        Mahindra Sanctum
      </h2>
      <p style={{ fontSize: '12px', color: '#9C846C', fontFamily: F_JOST, fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>
        Premium 2 & 3 BHK Homes — Pimpri, Pune
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
        <span style={{ width: '40px', height: '2px', background: '#9C846C' }} />
      </div>
      <p style={{ fontSize: '15px', color: '#555', fontFamily: F_SANS, lineHeight: 1.8, marginBottom: '24px', textAlign: 'justify' }}
        data-aos="fade-in" data-aos-delay="100">
        Mahindra Sanctum is Pune&apos;s premier luxury high-rise residential development in Pimpri, offering premium 2 &amp; 3 BHK residences starting from ₹1.02 Cr*. Thoughtfully curated amenities, iconic skyline views, advanced security, and smart home features — Mahindra Sanctum is designed for those who demand the extraordinary.
      </p>
    </div>

    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 py-6 px-6 text-center sm:text-left max-w-[1200px] mx-auto"
      style={{ borderTop: '1px solid #EAE5D9' }}>
      <p style={{ fontSize: '13px', color: '#684C1B', fontFamily: F_SANS, fontWeight: '500' }}>
        &copy; 2026 Mahindra Sanctum. All rights reserved.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
        <Link href="/privacy-policy" style={{ fontSize: '13px', color: '#3A2A0E', fontFamily: F_SANS, fontWeight: '600' }}>
          Privacy Policy
        </Link>
      </div>
    </div>

    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 24px', textAlign: 'center' }}>
      <p style={{ fontSize: '11px', color: '#888', fontFamily: F_SANS, lineHeight: 1.7, textAlign: 'justify' }}>
        <strong style={{ color: '#684C1B' }}>Disclaimer:</strong> This is not the official website of the developer. The information depicted herein, including master plans, floor plans, furniture layout, fittings, illustrations, specifications, designs, dimensions, rendered views, colours, amenities and facilities etc., are subject to change without notification as may be required by the relevant authorities or the Developer&apos;s architect. This advertisement is an invitation to offer and shall not be construed as an offer or contract. * Prices subject to change without notice. All taxes extra as applicable.
      </p>
    </div>
  </footer>
)

export default Footer
