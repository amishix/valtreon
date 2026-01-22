import Link from "next/link"
import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import {
  ArrowRight,
  Briefcase,
  MapPin,
  GraduationCap,
  ShieldCheck,
  Users,
  Sparkles,
  Scale,
  FileSearch,
  Lock,
  HeartHandshake,
} from "lucide-react"

export default function CareersPage() {
  const roles = [
    {
      title: "Verification Engineer",
      location: "Bangalore (Hybrid)",
      team: "Engineering",
      level: "Mid-level",
      summary:
        "Build evidence pipelines, verification checks, and audit trail capture so outputs remain reviewable under scrutiny.",
      bullets: [
        "Design and maintain data ingestion and transformation workflows for disclosures, project metrics, and third party signals",
        "Implement verification checks for consistency, missing evidence, and anomaly detection, with clear reviewer handoffs",
        "Instrument decision capture so reviewer rationale is recorded, searchable, and auditable",
        "Work with governance and assurance teams to translate policy constraints into product behaviour",
      ],
      tags: ["APIs", "Data pipelines", "Audit trails", "Human oversight"],
    },
    {
      title: "Impact Analyst",
      location: "Nairobi (Hybrid)",
      team: "Impact & Evidence",
      level: "Mid-level",
      summary:
        "Translate local context into evidence interpretation so models do not erase lived realities or overconfidently quantify the wrong thing.",
      bullets: [
        "Evaluate measurement quality, provenance, and context for place based impact data",
        "Work with community data stewards to define consent based access and data trust agreements",
        "Write review notes that explain trade offs, uncertainty, and evidence limitations in plain language",
        "Support investment committees with context aware impact briefings and escalation recommendations",
      ],
      tags: ["Evidence interpretation", "Context", "Measurement limits", "Governance"],
    },
    {
      title: "Governance and Assurance Associate",
      location: "London (Hybrid)",
      team: "Governance",
      level: "Early career",
      summary:
        "Support escalation paths, assurance routines, and client readiness packs so verification is not reduced to a marketing layer.",
      bullets: [
        "Maintain assurance standards for evidence packs, completeness checks, and reviewer sign off",
        "Support escalation processes for disputed evidence and high impact decisions",
        "Coordinate internal audit readiness routines and documentation hygiene",
        "Assist institutional partnerships by translating verification outputs into decision ready reporting artefacts",
      ],
      tags: ["Assurance", "Audit readiness", "Risk", "Escalation"],
    },
  ]

  const values = [
    {
      icon: <FileSearch className="h-5 w-5" />,
      title: "Evidence first",
      body:
        "We do not reward polished narratives. We reward clear provenance, reviewable logic, and honest recording of uncertainty.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Oversight is real work",
      body:
        "Governance is not a slide deck. Decision capture, escalation, and audit readiness are part of delivery, not decoration.",
    },
    {
      icon: <Scale className="h-5 w-5" />,
      title: "Bounded value creation",
      body:
        "If returns are produced by shifting harm onto people or ecosystems, we treat that as risk, not value.",
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Auditability by default",
      body:
        "We build systems so decisions remain contestable. Outputs must be explainable and reviewable over time.",
    },
  ]

  const hiringProcess = [
    {
      step: "01",
      title: "Application and context",
      body:
        "Submit a short application and an example of work you are proud of. We care about reasoning, clarity, and responsibility, not perfect polish.",
    },
    {
      step: "02",
      title: "Practical task",
      body:
        "A small take home exercise designed to reflect real work. For engineers this may be an evidence pipeline sketch; for analysts an evidence interpretation memo.",
    },
    {
      step: "03",
      title: "Panel conversation",
      body:
        "A structured conversation with cross functional teammates. We look for how you handle uncertainty, trade offs, and disagreement.",
    },
    {
      step: "04",
      title: "Offer and onboarding",
      body:
        "Clear role expectations, transparent pay bands, and onboarding designed to make decision making legible, not gatekept.",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <BackgroundGrid />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs tracking-[0.22em] uppercase text-white/60">Careers</p>

            <h1 className="mt-6 text-balance text-4xl sm:text-6xl font-semibold tracking-[-0.04em]">
              Build trust infrastructure, not just products
            </h1>

            <p className="mt-7 text-balance text-base sm:text-lg leading-relaxed text-zinc-200/90">
              Valtreon hires people who can work under uncertainty with discipline and care. Our work sits where finance,
              software, and real world consequences meet. We build verification systems and investment processes that
              keep decisions reviewable, evidence led, and accountable over time.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="#open-roles"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm sm:text-base font-semibold text-black hover:bg-zinc-100 transition"
              >
                View open roles <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/about/people"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-7 py-3 text-sm sm:text-base font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
              >
                Our people and culture <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Kpi icon={<Users className="h-5 w-5" />} value="180" label="Employees" />
              <Kpi icon={<MapPin className="h-5 w-5" />} value="London, Nairobi, Bangalore" label="Operating nodes" />
              <Kpi icon={<ShieldCheck className="h-5 w-5" />} value="Audit ready delivery" label="Built in" />
            </div>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ImageCard src="/careers.JPG" alt="Careers team image 1" />
          <ImageCard src="/careers1.JPG" alt="Careers team image 2" />
          <ImageCard src="/careers2.JPG" alt="Careers team image 3" />
        </div>
      </section>

      {/* Why work here */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.22em] uppercase text-white/70">
            <Sparkles className="h-4 w-4" /> What to expect
          </div>

          <h2 className="mt-6 text-balance text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">
            Work that rewards careful thinking
          </h2>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            You will work in cross functional teams and you will be expected to document decisions. We optimise for long
            term quality and auditability rather than speed theatre.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => (
            <ValueCard key={idx} icon={v.icon} title={v.title} body={v.body} />
          ))}
        </div>
      </section>

      {/* Open roles */}
      <section id="open-roles" className="border-y border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-18 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs tracking-[0.22em] uppercase text-white/60">Open roles</p>
            <h2 className="mt-4 text-balance text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">
              Roles across verification, impact, and governance
            </h2>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              These listings are fictional and designed for coursework, but written to read like a real firm. Each role
              exists because trust work requires labour, not slogans.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6">
            {roles.map((r, idx) => (
              <RoleCard key={idx} role={r} />
            ))}
          </div>

          <div className="mt-12 mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="flex items-start gap-4">
              <HeartHandshake className="w-10 h-10 text-white/85 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white">Early career and internships</h3>
                <p className="mt-3 text-zinc-300 leading-relaxed">
                  We accept early career applications for roles that include structured mentorship and clear scope. We do
                  not require a single elite pipeline. If you can explain your reasoning, document your decisions, and
                  handle uncertainty responsibly, you can contribute here.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Pill icon={<GraduationCap className="h-4 w-4" />} text="Graduate pathway" />
                  <Pill icon={<Briefcase className="h-4 w-4" />} text="Internship track" />
                  <Pill icon={<MapPin className="h-4 w-4" />} text="Hybrid by node" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring process */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-18 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs tracking-[0.22em] uppercase text-white/60">Hiring process</p>
          <h2 className="mt-4 text-balance text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">
            Calm, structured, and evidence led
          </h2>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            We evaluate how you think, not how well you perform under artificial pressure. Expect clarity, structure,
            and realistic tasks.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-4 gap-6">
          {hiringProcess.map((p, idx) => (
            <ProcessCard key={idx} step={p.step} title={p.title} body={p.body} />
          ))}
        </div>

        <div className="mt-12 mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-xl font-semibold text-white">What we look for</h3>
          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>• Clear reasoning and the ability to explain trade offs</li>
            <li>• Comfort with uncertainty without pretending to be certain</li>
            <li>• Documentation habits that make work reviewable</li>
            <li>• Respect for the social consequences of technical systems</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <p className="text-xs tracking-[0.22em] uppercase text-white/60">Next steps</p>
                <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
                  Want to understand the work before applying
                </h2>
                <p className="mt-3 text-zinc-300 leading-relaxed">
                  Explore how the firm operates, how verification is delivered, and the ethical constraints we treat as
                  delivery requirements.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/insights/operations"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-100 transition"
                >
                  Operations and governance <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/insights/analysis"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
                >
                  Critical analysis <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

/* ---------------------------- small components ---------------------------- */

function BackgroundGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.18),transparent_45%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_55%)]" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "92px 92px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
    </div>
  )
}

function Kpi({ icon, value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
      <div className="flex items-center justify-between">
        <div className="text-lg sm:text-xl font-semibold text-white">{value}</div>
        <div className="text-white/70">{icon}</div>
      </div>
      <div className="mt-1 text-xs tracking-[0.18em] uppercase text-white/60">{label}</div>
    </div>
  )
}

function ImageCard({ src, alt }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      <div className="relative aspect-[16/10]">
        <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/70" />
      </div>
    </div>
  )
}

function ValueCard({ icon, title, body }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
      <div className="flex items-center gap-3 text-white/85">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
          {icon}
        </div>
        <div className="text-sm font-semibold text-white/90">{title}</div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-zinc-200/85">{body}</p>
    </div>
  )
}

function RoleCard({ role }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/30 p-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <Briefcase className="h-4 w-4" /> {role.team}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <MapPin className="h-4 w-4" /> {role.location}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              {role.level}
            </span>
          </div>

          <h3 className="mt-4 text-2xl font-semibold text-white">{role.title}</h3>
          <p className="mt-3 text-zinc-300 leading-relaxed">{role.summary}</p>

          <ul className="mt-5 space-y-3 text-zinc-200/85">
            {role.bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {role.tags.map((t, i) => (
              <span key={i} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="md:text-right">
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
          >
            Apply (placeholder) <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="mt-3 text-xs text-white/60">Fictional listing for coursework</div>
        </div>
      </div>
    </div>
  )
}

function ProcessCard({ step, title, body }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <div className="flex items-center justify-between">
        <div className="text-xs tracking-[0.22em] uppercase text-white/60">{step}</div>
        <div className="text-white/70">
          <ShieldCheck className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-4 text-lg font-semibold">{title}</div>
      <p className="mt-3 text-sm leading-relaxed text-zinc-200/85">{body}</p>
    </div>
  )
}

function Pill({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      {icon} {text}
    </span>
  )
}