import nitDelhi from '../../assets/heroAssets/sponsors/nit-delhi.png'
import indianBit from '../../assets/heroAssets/sponsors/indian-bit.png'
import nitSilchar from '../../assets/heroAssets/sponsors/nit-silchar.png'
import roboCompany1 from '../../assets/heroAssets/sponsors/robo-company1.png'
import iitBombay from '../../assets/heroAssets/sponsors/iit-bombay.png'
import roboCompany2 from '../../assets/heroAssets/sponsors/robo-company2.png'

const sponsorsRow1 = [
  { logo: nitDelhi, name: 'NIT DELHI' },
  { logo: indianBit, name: 'INDIAN BIT' },
  { logo: nitSilchar, name: 'NIT SILCHAR' },
]

const sponsorsRow2 = [
  { logo: roboCompany1, name: 'ROBO\nCOMPANY' },
  { logo: iitBombay, name: 'IIT BOMBAY' },
  { logo: roboCompany2, name: 'ROBO\nCOMPANY' },
]

const SponsorsSection = () => (
  <section className="relative w-full bg-[#050505] py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      
      {/* Title */}
      <h2 className="sponsors-title font-orbitron text-xl sm:text-2xl font-black text-white uppercase tracking-wider mb-12 text-left">
        Sponsors
      </h2>

      {/* Sponsors Grid */}
      <div className="flex flex-col gap-10">
        
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center justify-items-start md:justify-items-center">
          {sponsorsRow1.map((sp) => (
            <div key={sp.name} className="sponsor-item opacity-0 flex items-center gap-4 min-w-[200px]">
              <img
                src={sp.logo}
                alt={sp.name}
                className="h-14 w-14 object-contain brightness-90 contrast-125"
              />
              <span className="font-roboto text-gray-300 font-black text-sm tracking-widest uppercase">
                {sp.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center justify-items-start md:justify-items-center">
          {sponsorsRow2.map((sp, idx) => (
            <div key={idx} className="sponsor-item opacity-0 flex items-center gap-4 min-w-[200px]">
              <img
                src={sp.logo}
                alt={sp.name}
                className="h-14 w-14 object-contain brightness-90 contrast-125"
              />
              <span className="font-roboto text-gray-300 font-black text-sm tracking-widest uppercase whitespace-pre-line leading-tight">
                {sp.name}
              </span>
            </div>
          ))}
        </div>


      </div>
    </div>
  </section>
)

export default SponsorsSection
