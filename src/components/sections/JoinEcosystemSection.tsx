import React, { useState } from 'react'

interface FormState {
  name: string
  location: string
  enroll: string
}

const JoinEcosystemSection = () => {
  const [judgeForm, setJudgeForm] = useState<FormState>({ name: '', location: '', enroll: '' })
  const [volunteerForm, setVolunteerForm] = useState<FormState>({ name: '', location: '', enroll: '' })
  const [communityForm, setCommunityForm] = useState<FormState>({ name: '', location: '', enroll: '' })

  const handleSubmit = (e: React.FormEvent, type: string) => {
    e.preventDefault()
    alert(`${type} signup submitted!`)
  }

  return (
    <section className="relative w-full bg-[#050505] py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <h2 className="ecosystem-title font-orbitron text-3xl sm:text-4xl font-black text-white uppercase tracking-wide mb-10 text-left">
          Join the Ecosystem
        </h2>

        {/* Form Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Become in Judge */}
          <div className="ecosystem-card opacity-0 bg-[#0f0f0f] border border-white/10 rounded-xl p-6 flex flex-col">
            <h3 className="font-orbitron text-white text-[17px] font-black uppercase mb-6 tracking-wide">
              Become in Judge
            </h3>
            <form onSubmit={(e) => handleSubmit(e, 'Judge')} className="flex flex-col gap-4 flex-1">
              <input
                type="text"
                placeholder="Name"
                value={judgeForm.name}
                onChange={(e) => setJudgeForm({ ...judgeForm, name: e.target.value })}
                className="w-full bg-[#171717] border border-white/10 rounded px-4 py-2.5 text-white text-sm focus:outline-none focus:border-red-500/50 transition-colors"
                required
              />
              <input
                type="text"
                placeholder="Location"
                value={judgeForm.location}
                onChange={(e) => setJudgeForm({ ...judgeForm, location: e.target.value })}
                className="w-full bg-[#171717] border border-white/10 rounded px-4 py-2.5 text-white text-sm focus:outline-none focus:border-red-500/50 transition-colors"
                required
              />
              <input
                type="text"
                placeholder="Enroll"
                value={judgeForm.enroll}
                onChange={(e) => setJudgeForm({ ...judgeForm, enroll: e.target.value })}
                className="w-full bg-[#171717] border border-white/10 rounded px-4 py-2.5 text-white text-sm focus:outline-none focus:border-red-500/50 transition-colors"
                required
              />
              <button
                type="submit"
                className="mt-4 w-full bg-[#f05046] hover:bg-[#e04036] active:scale-[0.98] text-white text-sm font-black py-2.5 rounded transition-all tracking-widest uppercase"
              >
                Sign Up
              </button>
            </form>
          </div>

          {/* Card 2: Volunteer */}
          <div className="ecosystem-card opacity-0 bg-[#0f0f0f] border border-white/10 rounded-xl p-6 flex flex-col">
            <h3 className="font-orbitron text-white text-[17px] font-black uppercase mb-6 tracking-wide">
              Volunteer
            </h3>
            <form onSubmit={(e) => handleSubmit(e, 'Volunteer')} className="flex flex-col gap-4 flex-1">
              <input
                type="text"
                placeholder="Name"
                value={volunteerForm.name}
                onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                className="w-full bg-[#171717] border border-white/10 rounded px-4 py-2.5 text-white text-sm focus:outline-none focus:border-red-500/50 transition-colors"
                required
              />
              <input
                type="text"
                placeholder="Location"
                value={volunteerForm.location}
                onChange={(e) => setVolunteerForm({ ...volunteerForm, location: e.target.value })}
                className="w-full bg-[#171717] border border-white/10 rounded px-4 py-2.5 text-white text-sm focus:outline-none focus:border-red-500/50 transition-colors"
                required
              />
              <input
                type="text"
                placeholder="Enroll"
                value={volunteerForm.enroll}
                onChange={(e) => setVolunteerForm({ ...volunteerForm, enroll: e.target.value })}
                className="w-full bg-[#171717] border border-white/10 rounded px-4 py-2.5 text-white text-sm focus:outline-none focus:border-red-500/50 transition-colors"
                required
              />
              <button
                type="submit"
                className="mt-4 w-full bg-[#f05046] hover:bg-[#e04036] active:scale-[0.98] text-white text-sm font-black py-2.5 rounded transition-all tracking-widest uppercase"
              >
                Sign Up
              </button>
            </form>
          </div>

          {/* Card 3: Community Member */}
          <div className="ecosystem-card opacity-0 bg-[#0f0f0f] border border-white/10 rounded-xl p-6 flex flex-col">
            <h3 className="font-orbitron text-white text-[17px] font-black uppercase mb-6 tracking-wide">
              Community Member
            </h3>
            <form onSubmit={(e) => handleSubmit(e, 'Community')} className="flex flex-col gap-4 flex-1">
              <input
                type="text"
                placeholder="Name"
                value={communityForm.name}
                onChange={(e) => setCommunityForm({ ...communityForm, name: e.target.value })}
                className="w-full bg-[#171717] border border-white/10 rounded px-4 py-2.5 text-white text-sm focus:outline-none focus:border-red-500/50 transition-colors"
                required
              />
              <input
                type="text"
                placeholder="Location"
                value={communityForm.location}
                onChange={(e) => setCommunityForm({ ...communityForm, location: e.target.value })}
                className="w-full bg-[#171717] border border-white/10 rounded px-4 py-2.5 text-white text-sm focus:outline-none focus:border-red-500/50 transition-colors"
                required
              />
              <input
                type="text"
                placeholder="Enroll"
                value={communityForm.enroll}
                onChange={(e) => setCommunityForm({ ...communityForm, enroll: e.target.value })}
                className="w-full bg-[#171717] border border-white/10 rounded px-4 py-2.5 text-white text-sm focus:outline-none focus:border-red-500/50 transition-colors"
                required
              />
              <button
                type="submit"
                className="mt-4 w-full bg-[#f05046] hover:bg-[#e04036] active:scale-[0.98] text-white text-sm font-black py-2.5 rounded transition-all tracking-widest uppercase"
              >
                Sign Up
              </button>
            </form>
          </div>

        </div>


      </div>
    </section>
  )
}

export default JoinEcosystemSection
