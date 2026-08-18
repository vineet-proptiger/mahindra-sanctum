import { Check } from "lucide-react";

const F_SANS = "var(--font-sans), Open Sans, sans-serif";
const F_JOST = "var(--font-jost), Montserrat, sans-serif";
const GOLD = "var(--color-gold)";
const PRIMARY = "var(--color-primary)";

const units = [
  {
    type: "2 BHK Residences",
    size: "On Request",
    price: "1.09 Cr*",
    oldPrice: null,
    btnText: "Get Details",
    features: [
      "Premium Specifications",
      "Luxury Finishes",
    ],
    isPopular: false,
  },
  {
    type: "3 BHK Residences",
    size: "On Request",
    price: "Ask For Price",
    oldPrice: null,
    btnText: "Get Details",
    features: [
      "Premium Specifications",
      "Luxury Finishes",
    ],
    isPopular: true,
  },
  /*
  {
    type: "4 BHK Residences",
    size: "On Request",
    price: "Ask For Price",
    oldPrice: null,
    btnText: "Get Details",
    features: [
      "Super Built-up: On Request",
      "Premium Specifications",
      "Luxury Finishes",
    ],
    isPopular: false,
  },
  */
];

const CurvedCorners = ({ bg = '#f7f7f7' }) => {
  const BORDER_COLOR = '#D5C2A8';
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

const Pricing = ({ setIsOpen }) => {
  return (
    <section
      id="pricing"
      className="py-10 sm:py-14 px-4 md:px-8 relative overflow-hidden"
      style={{ background: "var(--color-bg-muted)" }}
    >
      <div
        className="absolute top-0 right-0 w-1/3 h-1/3 opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)`,
          filter: "blur(40px)"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 style={{
            fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
            color: '#3A2A0E', letterSpacing: '0.1em',
            textTransform: 'uppercase', margin: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            CONFIGURATIONS &amp; PRICING
          </h2>
          {/* <p style={{ fontFamily: F_SANS, fontSize: "13px", color: "#6b7280", marginBottom: "4px" }}>
            Mahindra Sanctum offers thoughtfully crafted homes designed for modern urban living
          </p> */}


          {/* <p style={{ fontFamily: F_SANS, fontSize: "13px", color: "#6b7280", marginBottom: "4px" }}>
            Phase 5 Launch Expected
          </p>
          <p style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", fontSize: "18px", fontWeight: "800", color: GOLD }}>
            ~₹24,000 – 27,000 psf <span style={{ fontSize: "12px", fontWeight: "600", color: "#9ca3af" }}>(All Inclusive)</span>
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {units.map((unit, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className={`group relative bg-white border transition-all duration-500 ${unit.isPopular ? "lg:scale-105 z-20" : "z-10"}`}
              style={{
                borderColor: '#D5C2A8',
                borderRadius: '0',
                overflow: 'visible',
                boxShadow: 'none'
              }}
            >
              <CurvedCorners />
              
              {unit.isPopular && (
                <div
                  className="absolute top-4 right-6 px-3 py-1 rounded-full text-white text-[9px] font-bold tracking-widest uppercase z-30"
                  style={{ background: '#e05656' }}
                >
                  Most Preferred
                </div>
              )}

              <div className="relative p-8 pb-6 border-b border-[#EAE5D9] pt-14">
                <div
                  className="absolute inset-0 opacity-30 transition-opacity"
                  style={{ background: `linear-gradient(135deg, #FDF8F6 0%, transparent 100%)` }}
                />
                <h3
                  className="text-2xl font-bold mb-2 relative z-10 uppercase"
                  style={{ fontFamily: F_JOST, color: '#3A2A0E', letterSpacing: "0.05em" }}
                >
                  {unit.type}
                </h3>
                {unit.subtitle ? (
                  <p className="text-[15px] relative z-10 mb-2 leading-tight" style={{ fontFamily: F_SANS, color: '#684C1B' }}>
                    {unit.subtitle}
                  </p>
                ) : (
                  <div className="flex items-center gap-2 relative z-10">
                    <span className="text-[12px] uppercase tracking-wider font-semibold" style={{ fontFamily: F_SANS, color: '#9C846C' }}>Size:</span>
                    <p className="text-[15px] font-semibold" style={{ fontFamily: F_SANS, color: '#3A2A0E' }}>
                      {unit.size}
                    </p>
                  </div>
                )}
              </div>

              <div className="p-8 pt-8">
                <div className="mb-8">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-semibold block mb-2" style={{ fontFamily: F_JOST, color: '#9C846C' }}>Starting At</span>
                  <div className="flex items-center gap-3 flex-nowrap whitespace-nowrap">
                    {unit.oldPrice && (
                      <span className="text-lg line-through font-medium opacity-60" style={{ fontFamily: F_SANS, color: '#9C846C' }}>
                        {unit.oldPrice}
                      </span>
                    )}
                    <p className="text-3xl font-bold" style={{ fontFamily: F_JOST, color: '#3A2A0E' }}>
                      {unit.price}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  {['Unlock Pricing & Floor Plans', 'Attractive Payment Plan', 'Premium Luxury Residence'].map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0 flex items-center justify-center">
                        <Check size={18} strokeWidth={2.5} style={{ color: '#9C846C' }} />
                      </div>
                      <span className="font-medium text-[15px]" style={{ fontFamily: F_SANS, color: '#3A2A0E' }}>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setIsOpen(true)}
                  className="btn-gold"
                  style={{ width: '100%' }}
                >
                  {unit.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
