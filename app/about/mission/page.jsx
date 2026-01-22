import Link from "next/link"
import { Navbar } from "../../../components/navbar"
import { Footer } from "../../../components/footer"
import {
  ArrowRight,
  Shield,
  Sprout,
  Users,
  FileSearch,
  Scale,
  Radar,
  Lock,
  BadgeCheck,
  ClipboardList,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react"

export default function MissionPage() {
  const values = [
    {
      title: "Evidence before narrative",
      body:
        "We treat claims as hypotheses that require traceable evidence. If evidence is weak, we record uncertainty rather than producing a convenient headline.",
      icon: <FileSearch className="h-5 w-5" />,
    },
    {
      title: "Bounded value creation",
      body:
        "Returns that come from shifting harm onto workers, communities, or ecosystems are treated as risk. We do not call externalised harm ‘performance’.",
      icon: <Scale className="h-5 w-5" />,
    },
    {
      title: "Accountability is a workflow",
      body:
        "Trust is not a brand. It is how decisions are made, reviewed, escalated, and documented so others can challenge them later.",
      icon: <ClipboardList className="h-5 w-5" />,
    },
    {
      title: "Oversight beyond capital owners",
      body:
        "High impact decisions must be contestable by stakeholders who are affected, not only those who profit. We design participation routes into governance.",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Operate under turbulence",
      body:
        "We assume instability, disagreement, and rapid change. We prioritise monitoring and adaptation rather than one-off assessments that pretend the future is stable.",
      icon: <Radar className="h-5 w-5" />,
    },
    {
      title: "Auditability by default",
      body:
        "Bhramavora preserves audit trails, reviewer notes, exceptions, and confidence grading so outputs remain reviewable over time.",
      icon: <Lock className="h-5 w-5" />,
    },
  ]

  const toc = [
    {
      title: "Inputs",
      body:
        "Disclosures, third-party signals, community-governed evidence (where consent exists), and specialist review labour across nodes.",
    },
    {
      title: "Activities",
      body:
        "Verification checks, exception handling, human review, escalation for disputed evidence, and investment eligibility screening.",
    },
    {
      title: "Outputs",
      body:
        "Evidence packs, uncertainty notes, audit trails, regulator-readable summaries, and decision-ready risk and impact briefings.",
    },
    {
      title: "Outcomes",
      body:
        "Better capital allocation, reduced greenwashing, stronger accountability, and fewer hidden harms that later reappear as volatility and instability.",
    },
  ]

  const commitments = [
    "Do not publish a single-number score without the underlying evidence pack and uncertainty notes",
    "Minimise data retention and document retention schedules to avoid surveillance-by-default verification",
    "Separate build and approve functions so the same team cannot create and sign-off high-impact conclusions alone",
    "Maintain dispute pathways and escalation rules when evidence is contested or incomplete",
    "Design outputs to be readable beyond the paying client, including regulator-facing summaries",
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <BackgroundGrid />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="text-xs tracking-[0.22em] uppercase text-white/60">Valtreon</div>

            <h1 className="mt-5 text-balance text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em]">
              Trust infrastructure for financial decisions
            </h1>

            <p className="mt-7 text-balance text-base sm:text-lg leading-relaxed text-zinc-200/90">
              Valtreon is a mission-first investment and verification firm. We exist to rebuild trust in financial decision
              making at a time when markets increasingly rely on metrics, models, and reporting frameworks that can be incomplete,
              inconsistent, or strategically shaped. When decisions are made on weak evidence, capital is misallocated, risk is
              mispriced, and harm is pushed onto communities, workers, and future generations. That harm does not stay external.
              It returns as instability through ecological disruption, supply chain fragility, rising inequality, and political
              turbulence.
            </p>

            {/* Crisp mission statement */}
            <div className="mt-10 mx-auto max-w-3xl rounded-2xl border border-white/10 bg-zinc-950 p-6 md:p-8 text-left">
              <div className="flex items-start gap-4">
                <BadgeCheck className="h-10 w-10 text-white/80 flex-shrink-0" />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-white/60">Mission</p>
                  <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
                    Link claims to evidence, keep decisions reviewable, and allocate capital only where outcomes can stand up to scrutiny.
                  </h2>
                  <p className="mt-4 text-zinc-300 leading-relaxed">
                    Our mission is operational, not aspirational. We build verification workflows and investment eligibility
                    constraints that make it difficult to profit from uncertainty theatre. We monitor outcomes across time,
                    and we treat disagreement as part of reality rather than an inconvenience to hide.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm sm:text-base font-semibold text-black hover:bg-zinc-100 transition"
              >
                Explore Bhramavora <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/about/business"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm sm:text-base font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
              >
                Business model <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Kpi value="Evidence led" label="Decision making" />
              <Kpi value="Audit trail ready" label="Verification outputs" />
              <Kpi value="Human oversight" label="High impact decisions" />
            </div>
          </div>
        </div>
      </section>

      {/* Why we exist */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 py-18 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-xs tracking-[0.22em] uppercase text-white/60">Why we exist</div>

          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-balance">
            Because finance can shape safer futures or lock in harm
          </h2>

          <p className="mt-5 text-zinc-300 leading-relaxed">
            Sustainability reporting and ESG metrics are often treated as proxies for real-world outcomes. In practice they
            can fail when organisations self-report selectively, when indicators are inconsistent across sectors, or when scoring
            systems cannot be challenged. This creates an incentive to optimise disclosure rather than improve outcomes.
          </p>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Unlike competitors who treat ESG as reputation management or a single-number score, Valtreon treats verification as
            accountable labour. We preserve exceptions, dispute pathways, and uncertainty notes. If the evidence is weak, the
            output must remain contestable. That is how trust becomes infrastructure rather than branding.
          </p>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            We also assume the operating environment is unstable. Uncertainty, disagreement, and rapid change are normal conditions.
            That means the organisation is designed to adapt through monitoring, review, and transparent updates rather than relying
            on one-off assessments.
          </p>
        </div>
      </section>

      {/* What we provide */}
      <section className="border-y border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-18 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs tracking-[0.22em] uppercase text-white/60">What we provide</div>
            <h2 className="mt-4 text-balance text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">
              A verification platform, backed by an investment firm
            </h2>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              Valtreon combines verification services with capital allocation so incentives reward evidence and accountability,
              not disclosure theatre. This is how we help clients make better, safer decisions over time.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Shield className="h-5 w-5" />}
              title="Bhramavora verification services"
              bullets={[
                "Builds evidence pipelines from disclosures, third-party signals, and project metrics",
                "Runs checks for inconsistencies, anomalies, and missing evidence using rule-based logic and AI-assisted review",
                "Preserves audit trails, reviewer notes, and decision rationale so outputs remain reviewable",
                "Exposes verified metrics via secure APIs for reporting, oversight, and downstream analysis",
              ]}
              cta={{ href: "/products", label: "Products overview" }}
            />

            <FeatureCard
              icon={<Sprout className="h-5 w-5" />}
              title="Regenerative investment services"
              bullets={[
                "Allocates capital toward projects that restore ecological capacity and strengthen social systems",
                "Uses eligibility constraints to prevent value creation through externalised harm",
                "Monitors outcomes continuously rather than relying on annual narratives",
                "Reinvests a defined portion of surplus into ecological regeneration and public interest tooling",
              ]}
              cta={{ href: "/insights/operations", label: "How we operate" }}
            />
          </div>

          <div className="mt-10 mx-auto max-w-3xl text-sm text-zinc-300 leading-relaxed">
            In combination, these services create a feedback loop. Verification improves decision quality. Better decisions reduce
            hidden harms. Reduced harms support more stable long-term outcomes for both institutions and the societies they depend on.
          </div>
        </div>
      </section>

      {/* Theory of change */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-18 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs tracking-[0.22em] uppercase text-white/60">Theory of change</div>
          <h2 className="mt-4 text-balance text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">
            How verification becomes real-world outcomes
          </h2>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            This model makes the causal logic explicit. It shows how a software-supported service changes behaviour through
            governance, review, and evidence quality, not through a single metric.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {toc.map((t, i) => (
            <MiniPanel key={i} title={t.title} body={t.body} />
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-18 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs tracking-[0.22em] uppercase text-white/60">Values</div>
            <h2 className="mt-4 text-balance text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">
              Principles that guide decisions and system design
            </h2>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              Values only matter when they change what the organisation will do under pressure. These are written as operating
              constraints, not slogans.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, idx) => (
              <ValueCard key={idx} icon={v.icon} title={v.title} body={v.body} />
            ))}
          </div>
        </div>
      </section>

      {/* Commitments + limits */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-18 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-zinc-950 border border-white/10 rounded-2xl p-8 md:p-10">
            <div className="text-xs tracking-[0.22em] uppercase text-white/60">Commitments</div>
            <h2 className="mt-4 text-3xl font-semibold text-white">What we will do, even when it is inconvenient</h2>

            <ul className="mt-6 space-y-4 text-zinc-300 leading-relaxed">
              {commitments.map((c, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-white/80 mt-0.5 flex-shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/insights/analysis"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
              >
                Critical analysis <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/insights/operations"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
              >
                Operations and governance <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-zinc-950 border border-white/10 rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-white/80 mt-0.5" />
              <div>
                <div className="text-xs tracking-[0.22em] uppercase text-white/60">Limits</div>
                <h3 className="mt-3 text-xl font-semibold text-white">What we do not promise</h3>
                <p className="mt-4 text-zinc-300 leading-relaxed">
                  Valtreon does not claim to make finance perfect, or to remove uncertainty. Some outcomes are slow, qualitative,
                  and contested. Data can be uneven across regions. Institutions can attempt to optimise disclosure. Our approach is
                  to make those limits visible: document uncertainty, preserve disputes, and keep decisions reviewable rather than
                  hiding complexity behind polished metrics.
                </p>

                <p className="mt-4 text-zinc-300 leading-relaxed">
                  This is why we treat trust as infrastructure. The goal is not certainty. The goal is accountability.
                </p>
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

function Kpi({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
      <div className="text-lg sm:text-xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-xs tracking-[0.18em] uppercase text-white/60">{label}</div>
    </div>
  )
}

function FeatureCard({ icon, title, bullets, cta }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-blue-200/80">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <ul className="mt-6 space-y-3 text-sm text-zinc-200/85">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400/80" />
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>

      {cta ? (
        <div className="mt-8">
          <Link
            href={cta.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
          >
            {cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : null}
    </div>
  )
}

function ValueCard({ icon, title, body }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/30 p-7">
      <div className="flex items-center gap-3 text-white/85">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          {icon}
        </div>
        <div className="text-sm font-semibold text-white/90">{title}</div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-zinc-200/85">{body}</p>
    </div>
  )
}

function MiniPanel({ title, body }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
      <div className="text-xs tracking-[0.22em] uppercase text-white/60">{title}</div>
      <p className="mt-3 text-sm leading-relaxed text-zinc-200/85">{body}</p>
    </div>
  )
}