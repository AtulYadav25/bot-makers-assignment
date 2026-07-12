import botLeagueImage from '../../assets/heroAssets/botLeagueSection.png'

const features = [
  {
    number: '1.',
    title: 'Structured Events',
    description: '"From one-off events to a year-round competitive season."',
  },
  {
    number: '2.',
    title: 'Digital Identity',
    description: '"Your professional robotics legacy, tracked and verified."',
  },
  {
    number: '3.',
    title: 'National Ranking',
    description: '"Benchmark your skills against the best engineers in India."',
  },
  {
    number: '4.',
    title: 'Career Pathway',
    description: '"Turning arena victories into real-world industry opportunities."',
  },
]

const WhatIsBotLeagueSection = () => (
  <section className="relative w-full bg-[#0a0a0a] py-16 px-4 sm:px-8 lg:px-16">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* ── Left: Text ── */}
        <div className="whatis-left opacity-0">
          <h2 className="font-orbitron text-3xl sm:text-4xl font-black text-white uppercase mb-10 leading-tight">
            What is BotLeague?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map(({ number, title, description }) => (
              <div key={number}>
                <p className="font-roboto text-red-500 font-bold text-base mb-0.5 leading-none">
                  {number}
                </p>
                <h3 className="font-roboto text-white font-black uppercase text-sm tracking-wide mb-2">
                  {title}
                </h3>
                <p className="font-roboto text-gray-400 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Illustration ── */}
        <div className="whatis-right opacity-0 flex justify-center lg:justify-end">
          <img
            src={botLeagueImage}
            alt="BotLeague Platform Illustration"
            className="w-full max-w-sm lg:max-w-md object-contain drop-shadow-2xl"
          />
        </div>


      </div>
    </div>
  </section>
)

export default WhatIsBotLeagueSection
