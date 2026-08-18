'use client'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

/* Curved concave notch at each corner of the info box */
const CurvedCorners = ({ bg = '#fff' }) => {
  const corners = [
    { top: '-1px', left: '-1px', borderRight: '1px solid #D5C2A8', borderBottom: '1px solid #D5C2A8', borderBottomRightRadius: '18px' },
    { top: '-1px', right: '-1px', borderLeft: '1px solid #D5C2A8', borderBottom: '1px solid #D5C2A8', borderBottomLeftRadius: '18px' },
    { bottom: '-1px', left: '-1px', borderRight: '1px solid #D5C2A8', borderTop: '1px solid #D5C2A8', borderTopRightRadius: '18px' },
    { bottom: '-1px', right: '-1px', borderLeft: '1px solid #D5C2A8', borderTop: '1px solid #D5C2A8', borderTopLeftRadius: '18px' },
  ]

  return corners.map((c, i) => (
    <span key={i} style={{
      position: 'absolute', ...c,
      width: '22px', height: '22px',
      background: bg,
      display: 'block',
    }} />
  ))
}

const infoItems = [
  { label: 'STATUS',     value: 'LAUNCH (NEW)' },
  { label: 'TOTAL AREA', value: '4.2 ACRES' },
  { label: 'LAUNCH DATE',value: 'MAY 2026' },
]

const Overview = ({ setIsOpen }) => (
  <section
    id="overview"
    style={{ background: '#fff', padding: '72px 0 80px', borderBottom: '1px solid #f0ede6' }}
  >
    <div className="container mx-auto px-4 sm:px-8 max-w-[1200px]">
      
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
        
        {/* ── Left Side: Text Content ── */}
        <div className="w-full lg:w-1/2">
          
          {/* ── Section Heading ── */}
          <div style={{ marginBottom: '40px', textAlign: 'left' }}>
            <h2 data-aos="flip-right" data-aos-delay="500" style={{
              fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
              color: '#3A2A0E', letterSpacing: '0.1em',
              textTransform: 'uppercase', margin: '0 0 10px 0',
              display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px'
            }}>
              <span className="overview-subheading">WELCOME TO MAHINDRA SANCTUM</span>
            </h2>
            <h3 style={{
              fontFamily: F_JOST, fontWeight: '600', fontSize: '16px',
              color: '#C9A96E', letterSpacing: '0.05em',
              textTransform: 'capitalize', margin: 0,
            }}>
              At Citadel Township, Pimpri Pune.
            </h3>
          </div>

          {/* Paragraphs */}
          <div data-aos="flip-down" data-aos-delay="500">
            <p className="overview-desc" style={{
              fontFamily: F_SANS, fontSize: '14.5px', color: '#4A4540',
              lineHeight: 1.9,
              marginTop: 0, marginBottom: '14px',
              textAlign: 'justify',
            }}>
              <strong style={{ color: '#3A2A0E', fontWeight: '700' }}>Mahindra Sanctum Pimpri</strong> is an exclusive residential phase introduced by <strong style={{ color: '#3A2A0E', fontWeight: '700' }}>Mahindra Lifespaces</strong> within the sprawling <strong style={{ color: '#3A2A0E', fontWeight: '700' }}>Mahindra Citadel</strong> township. This premium development features thoughtfully designed <strong style={{ color: '#3A2A0E', fontWeight: '700' }}>2 &amp; 3 BHK homes</strong> tailored for modern urban families seeking a perfect blend of comfort and smart layouts.
            </p>
            <p className="overview-desc" style={{
              fontFamily: F_SANS, fontSize: '14.5px', color: '#4A4540',
              lineHeight: 1.9,
              marginTop: 0, marginBottom: '24px',
              textAlign: 'justify',
            }}>
              With the official launch of <strong style={{ color: '#3A2A0E', fontWeight: '700' }}>Towers E, F, and G</strong>, this limited-edition release offers a highly well-connected Pune address. Residents will experience trusted construction quality, superior lifestyle amenities, and a vibrant community environment backed by the signature trust of the Mahindra legacy.
            </p>
          </div>

          {/* Info Box */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-offset="0"
            style={{
              position: 'relative',
              border: '1px solid #D5C2A8',
            }}
          >
            <CurvedCorners />

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-[1px]" style={{ background: '#D5C2A8' }}>
            {infoItems.map((item, i) => {
              const bgColors = ['#FDF8F6', '#FFFDF2', '#F4FAF4', '#F2FAFD'];
              return (
                <div key={i} className="flex flex-col justify-center" style={{
                  background: bgColors[i % 4],
                  padding: '20px 16px',
                  textAlign: 'left',
                }}>
                  <div data-aos="fade" data-aos-delay={600 + i * 150} data-aos-duration="800" data-aos-once="true" className="flex flex-row justify-between items-center sm:block">
                    <p className="mb-0 sm:mb-2" style={{
                      fontFamily: F_JOST, fontSize: '11px', fontWeight: '700',
                      color: '#6E6259', letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                    }}>
                      {item.label}:
                    </p>
                    <p className="whitespace-normal break-words text-right sm:text-left" style={{
                      fontFamily: F_JOST, fontSize: '13px', fontWeight: '700',
                      color: '#3A2A0E', letterSpacing: '0.05em',
                      textTransform: 'uppercase', margin: 0,
                      wordBreak: 'break-word', overflowWrap: 'break-word'
                    }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
            </div>
          </div>

        </div>

        {/* ── Right Side: Image ── */}
        <div className="hidden lg:block lg:w-1/2" data-aos="fade-left">
          <div className="relative w-full flex justify-center items-center">
            <Image 
              src={overviewImage} 
              alt="Mahindra Sanctum Overview" 
              width={1000}
              height={1200}
              className="rounded-lg shadow-lg"
              style={{ width: '75%', height: 'auto', objectFit: 'contain', margin: '0 auto' }}
            />
          </div>
        </div>

      </div>
    </div>
  </section>
)

export default Overview
