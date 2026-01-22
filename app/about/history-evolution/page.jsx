import Link from "next/link"
import { Navbar } from "../../../components/navbar"
import { Footer } from "../../../components/footer"
import {
  ArrowRight,
  Timer,
  ShieldCheck,
  Building,
  Globe2,
  Users,
  Sparkles,
  FileSearch,
  Gavel,
  Workflow,
  AlertTriangle,
} from "lucide-react"

export default function HistoryEvolutionPage() {
  const milestones = [
    {
      year: "2021",
      title: "A trust gap becomes visible",
      body:
        "Valtreon forms around a recurring failure pattern: high-stakes decisions were being justified with inconsistent reporting and non-auditable metrics. The initial focus was evidence provenance and repeatability across reporting cycles.",
    },
    {
      year: "2022",
      title: "Bhramavora becomes a workflow",
      body:
        "Early pilots test an evidence pipeline: ingest disclosures, attach third-party signals, flag inconsistencies, and force every conclusion to carry a review trail. The goal is decision integrity, not better marketing scores.",
    },
    {
      year: "2023",
      title: "Governance is treated as infrastructure",
      body:
        "Escalation paths, separation of duties, and reviewer sign-off rules are formalised. AI supports triage, but accountability stays human and the decision log remains contestable.",
    },
    {
      year: "2024",
      title: "Assurance and algorithmic audit expand delivery",
      body:
        "Demand extends beyond verification outputs into assurance engagements and model risk review. Bias pathways, data governance checks, and audit-ready evidence packs become part of standard delivery.",
    },
    {
      year: "2025",
      title: "Medium-sized scale, deliberately",
      body:
        "Valtreon stabilises its operating model: three nodes, a purpose-binding charter, and subscription-led delivery supported by audits and evidence packs. Scale is capped where it would reduce verification quality.",
    },
  ]

  // Keep consistent with your other pages. You have used 180 elsewhere.
  const todayStats = [
    { icon: <Building className="w-6 h-6" />, label: "Annual revenue (modelled)", value: "£55M" },
    { icon: <Users className="w-6 h-6" />, label: "Employees", value: "180" },
    { icon: <Globe2 className="w-6 h-6" />, label: "Operating nodes", value: "3" },
    { icon: <ShieldCheck className="w-6 h-6" />, label: "Assurance posture", value: "Audit trail first" },
  ]

  const evolutionSignals = [
    {
      icon: <FileSearch className="h-5 w-5" />,
      title: "Evidence discipline strengthened",
      body:
        "Claims are only accepted when provenance is clear. Missingness is recorded, uncertainty is visible, and evidence packs are generated for review rather than polished storytelling.",
    },
    {
      icon: <Workflow className="h-5 w-5" />,
      title: "Delivery becomes repeatable",
      body:
        "Verification shifts from one-off reviews to monitored workflows. Outputs are designed to survive follow-up questions, not just pass an initial check.",
    },
    {
      icon: <Gavel className="h-5 w-5" />,
      title: "Escalation becomes operational",
      body:
        "High-risk cases create pause states until review closes. This adds friction, but prevents certainty theatre when evidence is weak or contested.",
    },
    {
      icon: <AlertTriangle className="h-5 w-5" />,
      title: "Failure modes are treated as normal",
      body:
        "Instead of pretending models are neutral, teams plan for drift, bias pathways, incentive misreporting, and conflicts of interest as baseline conditions to govern.",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <HeroBg />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs tracking-[0.22em] uppercase text-white/60">About</p>

            <h1 className="mt-6 text-balance text-4xl sm:text-6xl font-semibold tracking-[-0.04em]">
              History and evolution
            </h1>

            <p className="mt-7 text-balance text-base sm:text-lg leading-relaxed text-zinc-200/90">
              Valtreon grew from a simple constraint: verification must still hold when challenged. The firm expands only
              where evidence quality, governance, and review capacity can be maintained. Bhramavora is treated as living
              infrastructure that improves through monitoring, audit feedback, and controlled iteration.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-4 gap-4 text-left">
              {todayStats.map((s, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <div className="flex items-center justify-between text-white/80">
                    <div className="opacity-80">{s.icon}</div>
                    <div className="text-xl font-semibold text-white">{s.value}</div>
                  </div>
                  <div className="mt-2 text-xs tracking-[0.18em] uppercase text-white/60">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm sm:text-base font-semibold text-black hover:bg-zinc-100 transition"
              >
                View products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/insights/operations"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-7 py-3 text-sm sm:text-base font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
              >
                Operations and governance <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about/authors"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-7 py-3 text-sm sm:text-base font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
              >
                About the authors <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-18 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs tracking-[0.22em] uppercase text-white/60">Timeline</div>
          <h2 className="mt-4 text-balance text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">
            Key milestones
          </h2>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            A condensed view of what changed: stronger evidence discipline, deeper oversight, and audit-ready delivery.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-white/20 transition"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-white/80">
                    <Timer className="h-5 w-5" />
                  </div>
                  <div className="text-lg font-semibold">{m.title}</div>
                </div>
                <div className="text-xs tracking-[0.22em] uppercase text-white/60">{m.year}</div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-200/85">{m.body}</p>
            </div>
          ))}
        </div>

        {/* WHAT EVOLVED (First-class: turns “history” into “operating model evolution”) */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <div>
              <div className="text-xs tracking-[0.22em] uppercase text-white/60">Evolution in practice</div>
              <h3 className="mt-3 text-2xl font-semibold">What changed inside the operating model</h3>
            </div>
            <Link
              href="/insights/analysis"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
            >
              Ethics and limitations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-7 grid md:grid-cols-2 gap-6">
            {evolutionSignals.map((x, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-blue-200/80">{x.icon}</div>
                  <div>
                    <div className="text-sm font-semibold">{x.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-200/85">{x.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="flex items-start gap-4">
              <Sparkles className="h-6 w-6 text-white/80 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold">What stayed consistent</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-200/85">
                  The firm does not trade accountability for speed. Uncertainty is recorded rather than hidden, and
                  conclusions are designed to be reviewed. That discipline is why Valtreon remains intentionally
                  medium-sized: scaling is only allowed when review capacity and governance controls scale with it.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/about/people"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
          >
            People and culture <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/about/business"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
          >
            Business model <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function HeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(59,130,246,0.18),transparent_48%),radial-gradient(circle_at_70%_25%,rgba(255,255,255,0.08),transparent_55%)]" />
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