import Link from "next/link"
import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import {
  ArrowRight,
  ShieldCheck,
  Server,
  TrendingUp,
  Scale,
  FileSearch,
  Sparkles,
  Lock,
  AlertTriangle,
  LineChart,
  Workflow,
  Database,
  KeyRound,
  CheckCircle2,
  Clock,
  Plug,
  FileText,
} from "lucide-react"

export default function ProductsPage() {
  const core = [
    {
      icon: Server,
      title: "Bhramavora OS",
      subtitle: "Verification operating system for finance and impact claims",
      body: [
        "Bhramavora is Valtreon’s verification layer for investment decisions. It takes messy disclosures, project updates, and third party signals and turns them into evidence packs that can be challenged, audited, and revisited over time.",
        "It is AI assisted, but not AI led. Machine learning supports triage and anomaly detection, while high impact conclusions require reviewer sign off and recorded rationale.",
      ],
      bullets: [
        "Evidence pipelines: disclosures, metrics, procurement, third party signals, site data",
        "Consistency checks, anomaly detection, and gap analysis (what is missing, not just what is present)",
        "Audit trails by default: transformations, assumptions, reviewer notes, escalation history",
        "Secure APIs to export verified metrics into reporting and oversight workflows",
      ],
      note: "Designed for decision accountability, not just reporting output.",
    },
    {
      icon: TrendingUp,
      title: "Valtreon Impact Index (VII)",
      subtitle: "Portfolio level verification signals across funds and institutions",
      body: [
        "VII is a portfolio analytics layer that helps institutions see where impact claims look robust, where evidence is weak, and where risk is being externalised.",
        "Instead of one score, VII presents a signal set: confidence, provenance strength, volatility over time, and unresolved disputes, so risk teams can see what is stable and what remains contested.",
      ],
      bullets: [
        "Comparative portfolio analysis across sectors and geographies",
        "Confidence grading based on provenance and completeness (not reputation)",
        "Trend tracking: divergence from targets and indicator drift",
        "Watchlists for claims with repeated evidence gaps or inconsistent reporting",
      ],
      note: "Built to reduce greenwashing exposure and mispriced long term risk.",
    },
  ]

  const services = [
    {
      icon: Scale,
      title: "Algorithmic Audit Services",
      subtitle: "Independent assurance for models used in finance and sustainability",
      body: [
        "Valtreon audits automated decision systems used in investing, credit, procurement, and sustainability reporting.",
        "Audits focus on bias pathways, explainability limits, data governance, and operational accountability. Findings are delivered as a board ready report plus remediation actions and retest windows.",
      ],
      bullets: [
        "Bias and disparity testing with documented assumptions",
        "Model governance review: who can change what, when, and with what oversight",
        "Data provenance and consent checks for sensitive datasets",
        "Red team scenarios: failure modes, edge cases, automation overreach",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Verification and Assurance Engagements",
      subtitle: "Evidence packs for funds, bond frameworks, and impact programmes",
      body: [
        "For clients who do not want a full platform rollout, we deliver fixed scope verification engagements. These produce evidence packs, traceable decision logs, and a clear statement of what can and cannot be verified.",
      ],
      bullets: [
        "Pre investment verification (eligibility, baseline, and evidence readiness)",
        "Ongoing monitoring and exception tracking across reporting cycles",
        "Assurance packs for investor relations, regulators, and oversight committees",
        "Escalation and dispute documentation for contested indicators",
      ],
    },
  ]

  // Align with Business page: Monitor / Assure / Stewardship
  const pricing = [
    {
      name: "Monitor",
      price: "£40k–£90k",
      cadence: "per year, subscription",
      bestFor: "Smaller institutional teams, pilots, limited portfolios",
      includes: [
        "Bhramavora OS core workflows",
        "Evidence pack export templates",
        "Monthly exception log and uncertainty notes",
        "Standard support SLAs",
      ],
      footnote: "Best when you need continuous monitoring without heavy custom governance.",
    },
    {
      name: "Assure",
      price: "£120k–£250k",
      cadence: "per year, subscription",
      bestFor: "Asset managers, universities, large NGOs, oversight-heavy portfolios",
      includes: [
        "Everything in Monitor",
        "Quarterly assurance review with sign off notes",
        "API export for reporting workflows",
        "Defined escalation pathway and dispute handling protocol",
      ],
      footnote: "This tier funds human review capacity and audit readiness posture.",
      highlight: true,
    },
    {
      name: "Stewardship",
      price: "£300k+",
      cadence: "per year, partnership",
      bestFor: "Banks, sovereign funds, public interest coalitions with high consequence decisions",
      includes: [
        "Everything in Assure",
        "Co designed evidence schemas and sector checks",
        "Independent review scheduling and audit simulations",
        "Security reviews and governance hardening workshops",
      ],
      footnote: "Used when scrutiny is high and trade offs must remain visible under pressure.",
    },
  ]

  const deliverables = [
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Assurance pack output",
      body:
        "Provenance summary, completeness checks, exception log, confidence grading, reviewer notes, and a clear statement of uncertainty.",
    },
    {
      icon: <Workflow className="h-5 w-5" />,
      title: "Decision log and escalation trail",
      body:
        "Every material outcome records what was approved, what was rejected, what was escalated, and why, with sign off history.",
    },
    {
      icon: <LineChart className="h-5 w-5" />,
      title: "Portfolio watchlists (VII)",
      body:
        "Repeat gap indicators, drift flags, volatile claims, and unresolved disputes surfaced for risk committees and oversight teams.",
    },
  ]

  const integrations = [
    {
      icon: <Plug className="h-5 w-5" />,
      title: "Data sources",
      body:
        "Disclosures, project reporting feeds, procurement logs, third party signals, and internally defined metrics. Coverage gaps are shown explicitly.",
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: "API export",
      body:
        "Verified metrics and evidence references can be exported into reporting, governance, and analytics workflows through secure APIs.",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Monitoring cadence",
      body:
        "Continuous ingestion with scheduled review gates. Higher tiers add quarterly sign off and audit simulation routines.",
    },
  ]

  const security = [
    {
      icon: <KeyRound className="h-5 w-5" />,
      title: "Role based access control",
      body:
        "Access is granted by role and purpose. Sensitive datasets use stricter controls and explicit consent boundaries where relevant.",
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Data minimisation and retention",
      body:
        "Retention is treated as risk. Evidence is stored only when required for audit trails, assurance obligations, or regulator facing packs.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Auditability as a security feature",
      body:
        "Provenance, transformations, and reviewer notes remain traceable. This reduces silent tampering and accountability drift over time.",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative border-b border-white/10 overflow-hidden">
        <HeroBg />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs tracking-[0.22em] uppercase text-white/60">Products and services</p>
            <h1 className="mt-6 text-balance text-4xl sm:text-6xl font-semibold tracking-[-0.04em]">
              Bhramavora, plus assurance work that holds up under scrutiny
            </h1>
            <p className="mt-7 text-balance text-base sm:text-lg leading-relaxed text-zinc-200/90">
              Valtreon sells trust infrastructure. We help institutions make accountable investment decisions by linking
              claims to evidence, keeping decisions reviewable, and monitoring outcomes over time. Bhramavora is the
              operating system that makes this repeatable. Our audit and assurance work ensures the platform does not
              become a black box.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/about/mission"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm sm:text-base font-semibold text-black hover:bg-zinc-100 transition"
              >
                Why we exist <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/insights/operations"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-7 py-3 text-sm sm:text-base font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
              >
                How we operate <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Kpi label="Annual revenue" value="£55m (modelled)" />
              <Kpi label="Primary offering" value="B2B subscriptions" />
              <Kpi label="Assurance layer" value="Audits plus evidence packs" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY BHRAMAVORA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-18 sm:py-20">
        <Header
          eyebrow="Why Bhramavora"
          title="Because markets still reward stories more than proof"
          desc="Most ESG and impact reporting can be optimised like marketing. Bhramavora is designed to surface gaps, disputes, and provenance strength, so decisions remain contestable."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Reason
            icon={<FileSearch className="h-5 w-5" />}
            title="Evidence, not vibes"
            body="We do not accept narrative claims without provenance. The system shows what supports a claim, what contradicts it, and what is simply unknown."
          />
          <Reason
            icon={<Lock className="h-5 w-5" />}
            title="Audit trails by default"
            body="Every transformation is logged. Every high impact decision includes reviewer notes and escalation history, so accountability is real, not decorative."
          />
          <Reason
            icon={<Sparkles className="h-5 w-5" />}
            title="AI where it helps"
            body="AI flags anomalies and missing evidence, but it does not replace governance. Humans sign off the calls that change capital allocation."
          />
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-white/80 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold">What makes us different from ESG scoring platforms</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-200/85">
                We do not sell a single magic score. We sell a verification workflow: evidence ingestion, checks, review,
                escalation, and traceable outputs. If evidence is weak, Bhramavora makes that weakness visible rather
                than smoothing it into confidence theatre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PRODUCTS */}
      <section className="border-y border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-18 sm:py-20">
          <Header
            eyebrow="Core products"
            title="Platform layers used by investment teams, risk teams, and oversight"
            desc="Bhramavora is the operating system. VII is the portfolio signal layer that makes comparison and escalation practical."
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {core.map((p, i) => (
              <ProductCard key={i} {...p} />
            ))}
          </div>

          {/* What you actually deliver */}
          <div className="mt-12 rounded-3xl border border-white/10 bg-black/30 p-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-white/80" />
              <h3 className="text-lg font-semibold">Core deliverables</h3>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {deliverables.map((d, i) => (
                <MiniTile key={i} icon={d.icon} title={d.title} body={d.body} />
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs tracking-[0.2em] uppercase text-white/60">Example evidence pack contents</div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-200/85">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span>Provenance summary: sources, coverage, confidence grading rules</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span>Exception log: inconsistencies, missing evidence, unresolved disputes</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span>Reviewer notes: rationale, dissent, escalation decisions, sign off</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-18 sm:py-20">
        <Header
          eyebrow="Services"
          title="Assurance work that supports adoption"
          desc="We sell subscriptions, but we also deliver audits and fixed scope assurance engagements for teams that need proof before platform rollouts."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>

        {/* Integrations + cadence */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-center gap-3">
            <Plug className="h-5 w-5 text-white/80" />
            <h3 className="text-lg font-semibold">Integrations and operating cadence</h3>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {integrations.map((x, i) => (
              <MiniTile key={i} icon={x.icon} title={x.title} body={x.body} />
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="border-y border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-18 sm:py-20">
          <Header
            eyebrow="Security and governance"
            title="Trust infrastructure requires defensive design"
            desc="Security, consent, and auditability are not optional extras. They are part of product credibility."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {security.map((s, i) => (
              <MiniTile key={i} icon={s.icon} title={s.title} body={s.body} />
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-black/30 p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-white/80 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold">Known limitations</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-200/85">
                  Bhramavora cannot eliminate uncertainty. Some outcomes are qualitative, slow moving, or contested, and data
                  coverage can be uneven across regions. The product response is operational: uncertainty is recorded, confidence
                  is graded, and disputed cases are escalated rather than hidden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-18 sm:py-20">
          <Header
            eyebrow="Subscription model"
            title="Pricing that funds scrutiny"
            desc="The tiers reflect real delivery costs: governance overhead, review labour, audit readiness, and secure evidence handling."
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pricing.map((t, i) => (
              <TierCard key={i} {...t} />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/about/business"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black hover:bg-zinc-100 transition"
            >
              Business model <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/insights/analysis"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-7 py-3 text-sm font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
            >
              Critical analysis <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

/* ------------------------------- UI bits ------------------------------- */

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

function Header({ eyebrow, title, desc }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="text-xs tracking-[0.22em] uppercase text-white/60">{eyebrow}</div>
      <h2 className="mt-4 text-balance text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">{title}</h2>
      {desc ? <p className="mt-4 text-zinc-300 leading-relaxed">{desc}</p> : null}
    </div>
  )
}

function Kpi({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left">
      <div className="text-lg sm:text-xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-xs tracking-[0.18em] uppercase text-white/60">{label}</div>
    </div>
  )
}

function Reason({ icon, title, body }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-blue-200/80">
        {icon}
      </div>
      <div className="mt-6 text-lg font-semibold">{title}</div>
      <p className="mt-3 text-sm leading-relaxed text-zinc-200/85">{body}</p>
    </div>
  )
}

function MiniTile({ icon, title, body }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
      <div className="flex items-start gap-3 text-white/85">
        <div className="mt-0.5">{icon}</div>
        <div>
          <div className="text-sm font-semibold">{title}</div>
          <p className="mt-2 text-sm leading-relaxed text-zinc-200/85">{body}</p>
        </div>
      </div>
    </div>
  )
}

function ProductCard({ icon: Icon, title, subtitle, body, bullets, note }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/30 p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/90">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-xl font-semibold">{title}</div>
          <div className="text-sm text-white/60">{subtitle}</div>
        </div>
      </div>

      <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-200/85">
        {body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <ul className="mt-6 space-y-3 text-sm text-zinc-200/85">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400/80" />
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>

      {note ? (
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-200/85">
          <span className="font-semibold text-white">Note:</span> {note}
        </div>
      ) : null}
    </div>
  )
}

function ServiceCard({ icon: Icon, title, subtitle, body, bullets }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-white/90">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-xl font-semibold">{title}</div>
          <div className="text-sm text-white/60">{subtitle}</div>
        </div>
      </div>

      <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-200/85">
        {body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <ul className="mt-6 space-y-3 text-sm text-zinc-200/85">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/60" />
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TierCard({ name, price, cadence, bestFor, includes, footnote, highlight }) {
  return (
    <div
      className={[
        "rounded-3xl border p-8",
        highlight ? "border-white/30 bg-white/10" : "border-white/10 bg-black/30",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-semibold">{name}</div>
          <div className="mt-1 text-sm text-white/60">{bestFor}</div>
        </div>
        {highlight ? (
          <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs text-white/80">
            Most used
          </span>
        ) : null}
      </div>

      <div className="mt-6">
        <div className="text-4xl font-semibold tracking-[-0.03em]">{price}</div>
        <div className="mt-1 text-sm text-white/60">{cadence}</div>
      </div>

      <ul className="mt-6 space-y-3 text-sm text-zinc-200/85">
        {includes.map((x, i) => (
          <li key={i} className="flex gap-3">
            <ShieldCheck className="h-4 w-4 text-white/80 mt-0.5" />
            <span className="leading-relaxed">{x}</span>
          </li>
        ))}
      </ul>

      {footnote ? <div className="mt-6 text-xs text-white/60">{footnote}</div> : null}
    </div>
  )
}