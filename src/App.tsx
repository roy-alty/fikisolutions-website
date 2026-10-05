import { useState } from 'react'

const NAV_LINKS = ['Services', 'About', 'Why Us', 'Contact']

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#081f18]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-[#c9973a] flex items-center justify-center">
            <span className="text-[#081f18] font-['Outfit'] font-black text-lg leading-none">F</span>
          </div>
          <div>
            <span className="text-white font-['Outfit'] font-700 text-xl tracking-tight">Fiki Solutions</span>
            <span className="text-[#c9973a] text-xs font-['Outfit'] font-500 block leading-none -mt-0.5 tracking-widest uppercase">Limited</span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="nav-link text-white/80 hover:text-white text-sm"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 bg-[#c9973a] hover:bg-[#e8b55a] text-[#081f18] font-['Outfit'] font-700 text-sm px-5 py-2.5 rounded-lg transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-1"
          aria-label="Menu"
        >
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${open ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-current transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#081f18] border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              onClick={() => setOpen(false)}
              className="text-white/80 font-['Outfit'] font-500 text-base"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-[#c9973a] text-[#081f18] font-['Outfit'] font-700 text-sm px-5 py-3 rounded-lg text-center mt-2"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#081f18]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611144727915-ef30a08aaeb3?w=1800&h=1200&fit=crop&auto=format"
          alt="Nairobi skyline"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081f18] via-[#081f18]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081f18] via-transparent to-[#081f18]/60" />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(#c9973a 1px, transparent 1px), linear-gradient(90deg, #c9973a 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-[#c9973a]/15 border border-[#c9973a]/30 rounded-full px-4 py-1.5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c9973a] animate-pulse" />
            <span className="text-[#c9973a] font-['Outfit'] font-500 text-xs tracking-widest uppercase">Nairobi, Kenya</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-['Outfit'] font-800 text-white leading-[1.05] mb-6">
            Integrated
            <br />
            <span className="text-[#c9973a]">Solutions</span>
            <br />
            for East Africa
          </h1>

          <p className="text-white/65 text-lg leading-relaxed max-w-xl mb-10 font-['Inter'] font-300">
            From IT consulting and digital transformation to world-class HSSEQ management — Fiki Solutions delivers the expertise East African businesses need to operate safely, efficiently, and at scale.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="bg-[#c9973a] hover:bg-[#e8b55a] text-[#081f18] font-['Outfit'] font-700 px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#c9973a]/30"
            >
              Explore Services
            </a>
            <a
              href="#about"
              className="border border-white/30 hover:border-white/70 text-white font-['Outfit'] font-500 px-7 py-3.5 rounded-lg transition-colors duration-200"
            >
              Our Story
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-3 gap-6 pt-10 border-t border-white/10">
            {[
              { num: '15+', label: 'Years Experience' },
              { num: '200+', label: 'Projects Delivered' },
              { num: '50+', label: 'Clients Served' },
            ].map(s => (
              <div key={s.label}>
                <div className="stat-num text-3xl text-[#c9973a]">{s.num}</div>
                <div className="text-white/50 text-xs font-['Outfit'] font-400 mt-1 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side cards */}
        <div className="hidden lg:grid grid-cols-1 gap-4 max-w-sm ml-auto">
          {[
            {
              icon: '💻',
              title: 'IT Consulting',
              desc: 'System design, project management, and technical training for modern enterprises.',
            },
            {
              icon: '🛡️',
              title: 'HSSEQ Management',
              desc: 'Occupational safety, environmental compliance, and quality assurance frameworks.',
            },
          ].map(card => (
            <div
              key={card.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
            >
              <span className="text-3xl">{card.icon}</span>
              <h3 className="text-white font-['Outfit'] font-600 text-lg mt-3 mb-2">{card.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
          <div className="bg-[#c9973a]/15 border border-[#c9973a]/30 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#c9973a]" />
              <span className="text-[#c9973a] font-['Outfit'] font-600 text-sm">Based in Nairobi</span>
            </div>
            <p className="text-white/65 text-sm">Serving clients across Kenya and East Africa from our Nairobi headquarters.</p>
            <div className="mt-4 text-white/40 text-xs font-['Outfit'] tracking-wider">P.O. Box 3444-00100 · Nairobi</div>
          </div>
        </div>
      </div>
    </section>
  )
}

const IT_SERVICES = [
  {
    icon: '📋',
    title: 'Project Management',
    desc: 'End-to-end project delivery using proven methodologies that keep timelines tight and budgets intact.',
  },
  {
    icon: '⚙️',
    title: 'Business Process Re-engineering',
    desc: 'We audit your workflows and redesign them for efficiency, removing bottlenecks and redundant steps.',
  },
  {
    icon: '🖥️',
    title: 'System Design & Support',
    desc: 'Architecture, installation, configuration, and ongoing application support for enterprise systems.',
  },
  {
    icon: '🎓',
    title: 'IT Technical Training',
    desc: 'Upskill your workforce with hands-on technical training programs tailored to your stack.',
  },
]

const HSSEQ_SERVICES = [
  {
    icon: '⛑️',
    title: 'Occupational Safety',
    desc: 'Risk assessments, safety audits, and compliance frameworks that protect your people on the job.',
  },
  {
    icon: '🩺',
    title: 'Occupational Health',
    desc: 'Health surveillance, wellness programs, and regulatory compliance for a fit workforce.',
  },
  {
    icon: '🌿',
    title: 'Environmental Management',
    desc: 'Environmental impact assessments and management systems aligned to ISO 14001 standards.',
  },
  {
    icon: '✅',
    title: 'Quality Assurance',
    desc: 'QMS design, internal audits, and ISO 9001 certification support across all industries.',
  },
]

function Services() {
  const [tab, setTab] = useState<'it' | 'hsseq'>('it')

  return (
    <section id="services" className="bg-[#f9f4ec] py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0d3b2e]/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#0d3b2e] font-['Outfit'] font-500 text-xs tracking-widest uppercase">What We Do</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-['Outfit'] font-800 text-[#081f18] leading-tight mb-5">
            Two Disciplines,<br />One Trusted Partner
          </h2>
          <p className="text-[#081f18]/60 text-lg leading-relaxed">
            We bring together IT consulting depth and HSSEQ specialisation so your organisation can grow without compromising safety or operational excellence.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="inline-flex rounded-xl bg-[#0d3b2e]/8 p-1 mb-12">
          {([
            { key: 'it', label: 'IT Consulting' },
            { key: 'hsseq', label: 'HSSEQ Management' },
          ] as const).map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-6 py-2.5 rounded-lg font-['Outfit'] font-600 text-sm transition-all duration-200 ${
                tab === t.key
                  ? 'bg-[#0d3b2e] text-white shadow-sm'
                  : 'text-[#0d3b2e]/60 hover:text-[#0d3b2e]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {(tab === 'it' ? IT_SERVICES : HSSEQ_SERVICES).map((s, i) => (
            <div
              key={s.title}
              className="service-card bg-white rounded-2xl p-7 border border-[#0d3b2e]/8 hover:shadow-xl hover:shadow-[#0d3b2e]/10 cursor-default"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#0d3b2e]/8 flex items-center justify-center text-2xl mb-5">
                {s.icon}
              </div>
              <h3 className="font-['Outfit'] font-700 text-[#081f18] text-lg mb-3 leading-tight">{s.title}</h3>
              <p className="text-[#081f18]/55 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-12 bg-[#0d3b2e] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-['Outfit'] font-700 text-white text-xl mb-1">Need a custom solution?</h3>
            <p className="text-white/55 text-sm">Talk to our team about your specific requirements.</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-[#c9973a] hover:bg-[#e8b55a] text-[#081f18] font-['Outfit'] font-700 px-7 py-3.5 rounded-xl transition-colors duration-200 whitespace-nowrap"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="bg-[#0d3b2e] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image collage */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden h-64 bg-[#145c45]">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=500&fit=crop&auto=format"
                alt="IT consulting team"
                className="w-full h-full object-cover opacity-85"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-64 mt-8 bg-[#145c45]">
              <img
                src="https://images.unsplash.com/photo-1740825961434-e9287638592b?w=600&h=500&fit=crop&auto=format"
                alt="Construction safety workers"
                className="w-full h-full object-cover opacity-85"
              />
            </div>
          </div>

          {/* Badge overlay */}
          <div className="absolute -bottom-4 left-6 bg-[#c9973a] rounded-2xl px-6 py-4 shadow-xl">
            <div className="stat-num text-[#081f18] text-4xl">15+</div>
            <div className="text-[#081f18]/80 text-xs font-['Outfit'] font-600 uppercase tracking-wider mt-0.5">Years in Practice</div>
          </div>
        </div>

        {/* Text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-7">
            <span className="text-white/70 font-['Outfit'] font-500 text-xs tracking-widest uppercase">About Fiki Solutions</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-['Outfit'] font-800 text-white leading-tight mb-6">
            Built on Expertise,<br />Driven by Results
          </h2>

          <p className="text-white/65 text-base leading-relaxed mb-5">
            Fiki Solutions Limited was founded with a clear purpose: to give East African organisations access to the kind of integrated technical expertise that was previously only available to large multinationals.
          </p>
          <p className="text-white/65 text-base leading-relaxed mb-8">
            Today we operate at the intersection of IT consulting and HSSEQ management — helping businesses build robust digital systems while keeping their people, environment, and operations safe and compliant.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              'ISO-aligned HSSEQ frameworks',
              'Enterprise IT architecture',
              'Regulatory compliance support',
              'Hands-on technical training',
            ].map(item => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#c9973a]/20 border border-[#c9973a]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c9973a]" />
                </div>
                <span className="text-white/70 text-sm leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section id="why-us" className="bg-[#f9f4ec] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0d3b2e]/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#0d3b2e] font-['Outfit'] font-500 text-xs tracking-widest uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-['Outfit'] font-800 text-[#081f18] leading-tight mb-5">
            The Fiki Difference
          </h2>
          <p className="text-[#081f18]/60 text-lg">
            We're not a generalist consultancy. We are specialists who have spent years perfecting the intersection of technology and workplace safety.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              num: '01',
              title: 'Dual Expertise',
              desc: 'Rare ability to address both IT transformation and HSSEQ compliance under one roof — fewer vendors, clearer accountability.',
            },
            {
              num: '02',
              title: 'Local Knowledge',
              desc: 'Deep familiarity with Kenya\'s regulatory environment, Nairobi\'s business landscape, and the realities of operating in East Africa.',
            },
            {
              num: '03',
              title: 'Practical Delivery',
              desc: 'We don\'t just write reports. We implement, configure, train, and support until the solution is fully embedded in your organisation.',
            },
            {
              num: '04',
              title: 'One-Stop Service',
              desc: 'From initial assessment to ongoing support, we are a single, reliable partner throughout the project lifecycle.',
            },
            {
              num: '05',
              title: 'Industry-Agnostic',
              desc: 'We have served clients in manufacturing, construction, healthcare, finance, and government — proven across sectors.',
            },
            {
              num: '06',
              title: 'Responsive Team',
              desc: 'A lean, senior team means faster decisions, direct communication, and no junior staff learning on your project.',
            },
          ].map(item => (
            <div key={item.num} className="group p-8 rounded-2xl border border-[#0d3b2e]/12 hover:bg-[#0d3b2e] transition-colors duration-300 cursor-default">
              <div className="text-[#c9973a] font-['Outfit'] font-800 text-4xl mb-5 group-hover:text-[#e8b55a] transition-colors">{item.num}</div>
              <h3 className="font-['Outfit'] font-700 text-[#081f18] text-lg mb-3 group-hover:text-white transition-colors">{item.title}</h3>
              <p className="text-[#081f18]/55 text-sm leading-relaxed group-hover:text-white/65 transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="bg-[#081f18] py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #c9973a 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-6xl font-['Outfit'] font-800 text-white mb-6 leading-tight">
          Ready to Work<br />
          <span className="text-[#c9973a]">With the Best?</span>
        </h2>
        <p className="text-white/60 text-xl mb-10 leading-relaxed">
          Whether you need an IT overhaul or a full HSSEQ audit, let's talk about how Fiki Solutions can help your organisation thrive.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#c9973a] hover:bg-[#e8b55a] text-[#081f18] font-['Outfit'] font-700 px-10 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-xl hover:shadow-[#c9973a]/30"
        >
          Get a Free Consultation
        </a>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-[#f9f4ec] py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* Info */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#0d3b2e]/10 rounded-full px-4 py-1.5 mb-7">
            <span className="text-[#0d3b2e] font-['Outfit'] font-500 text-xs tracking-widest uppercase">Contact Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-['Outfit'] font-800 text-[#081f18] leading-tight mb-6">
            Let's Build<br />Something Together
          </h2>
          <p className="text-[#081f18]/60 text-lg leading-relaxed mb-12">
            Reach out to discuss your requirements. Our team typically responds within one business day.
          </p>

          <div className="space-y-6">
            {[
              { icon: '📍', label: 'Office', value: 'P.O. Box 3444 – 00100, Nairobi, Kenya' },
              { icon: '📞', label: 'Phone', value: '+254 725 372 573 · +254 725 813 783' },
              { icon: '✉️', label: 'Email', value: 'info@fikisolutions.co.ke' },
            ].map(c => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#0d3b2e] flex items-center justify-center text-lg shrink-0">
                  {c.icon}
                </div>
                <div>
                  <div className="text-xs font-['Outfit'] font-600 text-[#0d3b2e]/50 uppercase tracking-wider mb-0.5">{c.label}</div>
                  <div className="text-[#081f18] font-['Inter'] font-400 text-sm">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl p-8 border border-[#0d3b2e]/8 shadow-sm">
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#0d3b2e]/10 flex items-center justify-center text-3xl mb-5">✅</div>
              <h3 className="font-['Outfit'] font-700 text-[#081f18] text-2xl mb-3">Message Sent!</h3>
              <p className="text-[#081f18]/55 text-sm leading-relaxed max-w-xs">
                Thank you for reaching out. A member of our team will be in touch within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-['Outfit'] font-600 text-[#0d3b2e] uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Mwangi"
                    className="w-full border border-[#0d3b2e]/15 rounded-xl px-4 py-3 text-sm font-['Inter'] text-[#081f18] placeholder-[#081f18]/30 focus:outline-none focus:border-[#c9973a] focus:ring-2 focus:ring-[#c9973a]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-['Outfit'] font-600 text-[#0d3b2e] uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@company.co.ke"
                    className="w-full border border-[#0d3b2e]/15 rounded-xl px-4 py-3 text-sm font-['Inter'] text-[#081f18] placeholder-[#081f18]/30 focus:outline-none focus:border-[#c9973a] focus:ring-2 focus:ring-[#c9973a]/20 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-['Outfit'] font-600 text-[#0d3b2e] uppercase tracking-wider mb-2">Service of Interest</label>
                <select
                  value={form.service}
                  onChange={e => setForm({ ...form, service: e.target.value })}
                  className="w-full border border-[#0d3b2e]/15 rounded-xl px-4 py-3 text-sm font-['Inter'] text-[#081f18] focus:outline-none focus:border-[#c9973a] focus:ring-2 focus:ring-[#c9973a]/20 transition-all bg-white"
                >
                  <option value="">Select a service…</option>
                  <option>IT Consulting</option>
                  <option>HSSEQ Management</option>
                  <option>Both / Integrated Solution</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-['Outfit'] font-600 text-[#0d3b2e] uppercase tracking-wider mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project or challenge…"
                  className="w-full border border-[#0d3b2e]/15 rounded-xl px-4 py-3 text-sm font-['Inter'] text-[#081f18] placeholder-[#081f18]/30 focus:outline-none focus:border-[#c9973a] focus:ring-2 focus:ring-[#c9973a]/20 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0d3b2e] hover:bg-[#145c45] text-white font-['Outfit'] font-700 py-3.5 rounded-xl transition-colors duration-200 text-sm"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#081f18] text-white/55 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#c9973a] flex items-center justify-center">
                <span className="text-[#081f18] font-['Outfit'] font-black text-lg">F</span>
              </div>
              <span className="text-white font-['Outfit'] font-700 text-lg">Fiki Solutions Limited</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Integrated IT consulting and HSSEQ management services for businesses across East Africa.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-['Outfit'] font-600 text-sm mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              {['IT Consulting', 'Project Management', 'HSSEQ Management', 'Technical Training'].map(s => (
                <li key={s}><a href="#services" className="hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-['Outfit'] font-600 text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Why Choose Us', 'Contact'].map(s => (
                <li key={s}><a href="#about" className="hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
            <div className="mt-6 text-xs leading-relaxed">
              <div>+254 725 372 573</div>
              <div>info@fikisolutions.co.ke</div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span>© 2024 Fiki Solutions Limited. All rights reserved.</span>
          <span>Nairobi, Kenya</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}
