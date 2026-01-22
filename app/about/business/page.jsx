import Link from "next/link"
import { Navbar } from "../../../components/navbar"
import { Footer } from "../../../components/footer"
import {
  ArrowRight,
  ShieldCheck,
  Layers,
  Scale,
  Lock,
  LineChart,
  Users,
  Briefcase,
  Building2,
  Globe2,
  BadgeCheck,
  ClipboardList,
  AlertTriangle,
  Banknote,
  FileSearch,
  Workflow,
  CheckCircle2,
} from "lucide-react"

export default function BusinessPage() {
  const revenueLines = [
    {
      icon: <LineChart className="h-5 w-5" />,
      title: "Fund management fees",
      body:
        "Management fees from regenerative investment vehicles, priced to support long term monitoring, due diligence, and stewardship rather than high churn trading.",
      detail:
        "Incentive logic: outcome quality and risk discipline matter. The model rewards durable performance, not hype cycles.",
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Bhramavora subscriptions",
      body:
        "Annual subscriptions for institutions that require continuous monitoring, evidence packs, and API access for reporting and governance workflows.",
      detail:
        "Incentive logic: recurring revenue funds maintenance, auditability, and support so verification does not become a one off deliverable.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Verification and assurance services",
      body:
        "Contracted assurance engagements delivering audit ready evidence trails, exception logs, and documented uncertainty rather than a single score.",
      detail:
        "Incentive logic: revenue is tied to scrutiny and labour. If standards weaken, the service loses credibility and renewal value.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Long term partnerships",
      body:
        "Multi year partnerships with institutions and public interest bodies where verification standards, data access, and escalation processes are co designed.",
      detail:
        "Incentive logic: shared governance reduces short term pressure to produce convenient conclusions and builds lock in through trust.",
    },
  ]

  const clientSegments = [
    {
      icon: <Building2 className="h-5 w-5" />,
      title: "Institutional investors",
      body:
        "Asset owners and managers who need defensible evidence for climate, labour, and supply chain claims that can stand up under board scrutiny and external challenge.",
    },
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "Public bodies and regulators",
      body:
        "Decision makers who require interpretable assurance packs, traceable provenance, and explicit uncertainty notes rather than black box scoring.",
    },
    {
      icon: <Globe2 className="h-5 w-5" />,
      title: "Civil society and assurance partners",
      body:
        "Stakeholders who need readable outputs, dispute pathways, and traceable evidence, even if they are not the paying client in the original engagement.",
    },
  ]

  const controlSet = [
    {
      icon: <Scale className="h-5 w-5" />,
      title: "Eligibility constraints",
      body:
        "Investment eligibility blocks value creation through externalised harm. If a project meets returns but fails on social or ecological outcomes, it is rejected or escalated with a written rationale.",
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Auditability by default",
      body:
        "Verification outputs preserve provenance, exception logs, reviewer notes, and confidence grading. This prevents quiet weakening of standards when commercial pressure rises.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Escalation and accountable judgement",
      body:
        "Contested decisions are treated as core work. Weak evidence outcomes trigger escalation routes and independent review before outputs influence investment decisions.",
    },
  ]

  const risks = [
    {
      title: "Mission drift through AUM incentives",
      body:
        "Asset management can default to growth by scale. Valtreon reduces this by tying revenue to verification labour and maintaining a purpose binding charter that constrains extractive behaviour.",
    },
    {
      title: "Pressure for certainty theatre",
      body:
        "Clients often want simplified scores. Valtreon sells documented uncertainty and preserves disputes. This creates friction, but it protects trust, audit readiness, and long term defensibility.",
    },
    {
      title: "Power in defining valid evidence",
      body:
        "Verification risks becoming gatekeeping. Valtreon mitigates this through participation routes, transparent review notes, and evidence packs designed to be readable beyond the paying client.",
    },
  ]

  const tiers = [
    {
      title: "Monitor",
      price: "£40k–£90k per year",
      who: "Small institutional teams and pilot portfolios",
      includes: [
        "Continuous monitoring for a defined set of claims and metrics",
        "Monthly exception log and uncertainty notes",
        "Standard evidence pack export (board readable)",
        "Email support with defined response SLAs",
      ],
      note:
        "Designed to make ongoing verification affordable without pretending everything can be automated.",
    },
    {
      title: "Assure",
      price: "£120k–£250k per year",
      who: "Asset managers and organisations facing external scrutiny",
      includes: [
        "All Monitor features plus deeper review gates",
        "Quarterly assurance pack with reviewer sign off",
        "API access for reporting workflows",
        "Dispute pathway and escalation protocol onboarding",
      ],
      note:
        "This tier funds human review capacity and makes auditability the default posture.",
    },
    {
      title: "Stewardship",
      price: "£300k+ per year (partnership)",
      who: "Multi year partnerships and high consequence portfolios",
      includes: [
        "Co designed verification standards and governance routines",
        "Independent review scheduling and escalation governance",
        "Community data trust engagement where applicable",
        "Regulator ready evidence packs and audit simulations",
      ],
      note:
        "For situations where the cost of getting it wrong is higher than the cost of scrutiny.",
    },
  ]

  const deliveryFlow = [
    {
      title: "Onboarding and scope",
      body:
        "Define what claims matter, what evidence is acceptable, and what outcomes are high consequence. Set confidence grading rules and escalation triggers before work begins.",
      icon: <ClipboardList className="h-5 w-5" />,
    },
    {
      title: "Evidence ingestion",
      body:
        "Collect disclosures plus third party signals. Record provenance, coverage gaps, and missingness rather than backfilling with overconfident assumptions.",
      icon: <FileSearch className="h-5 w-5" />,
    },
    {
      title: "Verification and review",
      body:
        "Run staged checks, then human review for high impact outputs. Disputes generate reviewer notes and can be escalated to oversight rather than collapsed into a single metric.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
    {
      title: "Assurance pack delivery",
      body:
        "Deliver a board readable evidence pack: provenance summary, exception log, uncertainty statement, and rationale for approvals or rejections. Outputs remain contestable later.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: "Ongoing monitoring",
      body:
        "Track drift in evidence quality over time. If data sources change or incentives shift, the verification status is downgraded with a visible reason and a re review trigger.",
      icon: <Workflow className="h-5 w-5" />,
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/35 to-transparent pointer-events-none" />

        <section className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-white/60">Business model</p>

            <h1 className="mt-6 text-balance text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em]">
              An investment firm built around verification services
            </h1>

            <p className="mt-6 text-lg md:text-xl text-zinc-300/90 leading-relaxed text-balance">
              Valtreon operates as a business to business investment and verification firm supported by Bhramavora, our
              audit and evidence infrastructure. The model aligns incentives with decision quality, long term resilience,
              and contestability under scrutiny, rather than short term asset growth.
            </p>
          </div>

          {/* Positioning */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 md:p-10 mb-12">
            <div className="flex items-start gap-4">
              <BadgeCheck className="h-10 w-10 text-white/80 flex-shrink-0" />
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-white/60">Positioning</p>
                <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
                  Capital without verification enables greenwashing. Verification without capital cannot change incentives.
                </h2>

                <p className="mt-4 text-zinc-300 leading-relaxed">
                  Valtreon combines investment capability with verification infrastructure so evidence becomes operational, not
                  decorative. The product is not only software. The product is the workflow: review gates, audit trails, dispute
                  routes, and confidence grading when evidence is incomplete.
                </p>

                <p className="mt-4 text-zinc-300 leading-relaxed">
                  This is the feasibility logic. Verification costs real labour. If the business model does not fund review,
                  governance, and evidence handling, standards drift and “ESG” becomes narrative management. Valtreon explicitly
                  funds scrutiny as part of the commercial engine.
                </p>
              </div>
            </div>
          </div>

          {/* Top tiles */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <MetricCard icon={<Banknote className="w-10 h-10" />} value="Multi-line" label="Revenue model" />
            <MetricCard icon={<Users className="w-10 h-10" />} value="B2B" label="Primary client base" />
            <MetricCard icon={<ClipboardList className="w-10 h-10" />} value="Audit-ready" label="Delivery posture" />
          </div>

          {/* Clients */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-white/60">Clients and stakeholders</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Who the model is built for</h2>
            <p className="mt-5 text-zinc-300 leading-relaxed">
              The model is designed around accountability under scrutiny. That means serving institutions who need defensible
              evidence, while ensuring outputs remain interpretable by regulators and stakeholders who were not part of the
              commercial transaction.
            </p>

            <div className="mt-8 grid lg:grid-cols-3 gap-6">
              {clientSegments.map((c, idx) => (
                <MiniCard key={idx} icon={c.icon} title={c.title} body={c.body} />
              ))}
            </div>
          </div>

          {/* Revenue */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-white/60">Revenue</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">How we generate revenue</h2>
            <p className="mt-5 text-zinc-300 leading-relaxed">
              Valtreon uses a multi-line revenue model to reduce mission drift and avoid dependence on any single client group.
              The incentive design is explicit: recurring income funds auditability and maintenance, while assurance engagements
              fund deep review, dispute handling, and governance routines.
            </p>

            <div className="mt-10 space-y-8">
              {revenueLines.map((r, i) => (
                <RevenueLine key={i} icon={r.icon} title={r.title} body={r.body} detail={r.detail} />
              ))}
            </div>
          </div>

          {/* Pricing tiers */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-white/60">Pricing</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Pricing tiers that fund scrutiny</h2>

            <p className="mt-5 text-zinc-300 leading-relaxed">
              Pricing is designed around a simple principle: the more consequential the decision, the more human review and
              governance must be funded. This makes the model realistic and prevents verification from becoming under resourced
              “software theatre”.
            </p>

            <div className="mt-10 grid lg:grid-cols-3 gap-6">
              {tiers.map((t, i) => (
                <TierCard key={i} tier={t} />
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-white/80 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold">What we refuse to sell</div>
                  <p className="mt-2 text-xs leading-relaxed text-white/65">
                    Valtreon does not sell “guaranteed green scores”, “risk free impact”, or any product that hides uncertainty.
                    If a client wants a clean conclusion regardless of evidence quality, that is treated as a commercial red flag.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery journey */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-white/60">Delivery</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">How a client engagement works</h2>

            <p className="mt-5 text-zinc-300 leading-relaxed">
              This workflow connects the business model to operations. It shows what the organisation actually does beyond a
              mission statement: how evidence is handled, where human judgement is applied, and how audit readiness is produced.
            </p>

            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliveryFlow.map((s, i) => (
                <StepCard key={i} step={s} index={i} />
              ))}
            </div>
          </div>

          {/* Feasibility + unit economics logic */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-white/60">Feasibility</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Operational realism at medium scale</h2>

            <p className="mt-5 text-zinc-300 leading-relaxed">
              Valtreon is modelled as a medium sized organisation with approximately <span className="text-white/90 font-semibold">310 employees</span>{" "}
              and annual revenue of around <span className="text-white/90 font-semibold">£55 million</span>. This scale supports specialist verification teams,
              governance routines, and engineering maintenance, while remaining small enough to avoid growth targets that would
              dilute assurance quality.
            </p>

            <p className="mt-4 text-zinc-300 leading-relaxed">
              Unit economics are driven by labour and review capacity. Subscriptions cover continuous monitoring and platform upkeep.
              Assurance engagements cover deep reviews, exception handling, dispute routes, and stakeholder readable evidence packs.
              The business is viable because it prices scrutiny honestly rather than hiding human work inside vague “AI” claims.
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <InlineFact
                icon={<ShieldCheck className="w-5 h-5" />}
                title="Cost drivers"
                body="Review labour, governance routines, secure evidence handling, platform maintenance."
              />
              <InlineFact
                icon={<Lock className="w-5 h-5" />}
                title="What clients pay for"
                body="Auditability, contestability, documented uncertainty, defensible decision records."
              />
              <InlineFact
                icon={<Scale className="w-5 h-5" />}
                title="Why medium scale"
                body="Protect assurance quality, reduce capture risk, retain real oversight capacity."
              />
            </div>
          </div>

          {/* Controls */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-white/60">Controls</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Controls that prevent mission drift</h2>

            <p className="mt-5 text-zinc-300 leading-relaxed">
              The main risk for mission driven finance is that market pressure pushes the organisation back toward extractive behaviour.
              Valtreon addresses this through a purpose binding charter and operational controls that keep trade offs visible. The friction is
              intentional: it prevents “easy” growth that would undermine verification credibility.
            </p>

            <div className="mt-10 space-y-8">
              {controlSet.map((c, i) => (
                <ControlLine key={i} icon={c.icon} title={c.title} body={c.body} />
              ))}
            </div>
          </div>

          {/* Tensions */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-white/60">Structural tensions</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Trade offs we keep visible</h2>

            <p className="mt-5 text-zinc-300 leading-relaxed">
              The model is not frictionless. Valtreon treats tensions as ongoing governance challenges rather than problems that can be solved once.
              The goal is to keep decisions contestable, document uncertainty, and preserve accountable human responsibility.
            </p>

            <div className="mt-8 grid lg:grid-cols-3 gap-6">
              {risks.map((r, i) => (
                <RiskCard key={i} title={r.title} body={r.body} />
              ))}
            </div>

            <p className="mt-8 text-zinc-300 leading-relaxed">
              This is also the differentiator. Unlike firms that monetise simplified narratives, Valtreon’s commercial logic depends on preserving
              scrutiny. Bhramavora is treated as service infrastructure, not a one time software product.
            </p>
          </div>

          {/* CTA */}
          <div className="mb-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-100 transition"
            >
              View Bhramavora <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about/people"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
            >
              People and culture <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}

/* ---------------------------- small components ---------------------------- */

function MetricCard({ icon, value, label }) {
  return (
    <div className="bg-zinc-950 border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition">
      <div className="mx-auto mb-4 w-fit opacity-90 text-white/90">{icon}</div>
      <div className="text-3xl font-semibold text-white mb-2">{value}</div>
      <p className="text-zinc-400">{label}</p>
    </div>
  )
}

function RevenueLine({ icon, title, body, detail }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/85 shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-base font-semibold">{title}</div>
        <p className="mt-2 text-sm leading-relaxed text-zinc-200/85">{body}</p>
        {detail ? <p className="mt-2 text-xs text-white/60 leading-relaxed">{detail}</p> : null}
      </div>
    </div>
  )
}

function ControlLine({ icon, title, body }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/85 shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-base font-semibold">{title}</div>
        <p className="mt-2 text-sm leading-relaxed text-zinc-200/85">{body}</p>
      </div>
    </div>
  )
}

function MiniCard({ icon, title, body }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
      <div className="flex items-center gap-3 text-white/85">
        {icon}
        <div className="font-semibold text-white">{title}</div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-zinc-200/85">{body}</p>
    </div>
  )
}

function InlineFact({ icon, title, body }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
      <div className="flex items-center gap-3 text-white/90">
        <div className="opacity-90">{icon}</div>
        <div className="text-sm font-semibold">{title}</div>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-200/85">{body}</p>
    </div>
  )
}

function RiskCard({ title, body }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
      <div className="flex items-center gap-3 text-white/85">
        <AlertTriangle className="h-5 w-5" />
        <div className="font-semibold text-white">{title}</div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-zinc-200/85">{body}</p>
    </div>
  )
}

function TierCard({ tier }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-white/20 transition">
      <div className="flex items-center justify-between gap-4">
        <div className="text-lg font-semibold">{tier.title}</div>
        <div className="text-xs tracking-[0.2em] uppercase text-white/60">Tier</div>
      </div>

      <div className="mt-3 text-2xl font-semibold text-white">{tier.price}</div>
      <div className="mt-2 text-sm text-white/70">{tier.who}</div>

      <ul className="mt-6 space-y-3 text-sm text-zinc-200/85">
        {tier.includes.map((x, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70 shrink-0" />
            <span className="leading-relaxed">{x}</span>
          </li>
        ))}
      </ul>

      {tier.note ? (
        <div className="mt-6 text-xs leading-relaxed text-white/60">
          {tier.note}
        </div>
      ) : null}
    </div>
  )
}

function StepCard({ step, index }) {
  const num = String(index + 1).padStart(2, "0")
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-white/20 transition">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-white/85">
          {step.icon}
        </div>
        <div className="text-xs tracking-[0.22em] uppercase text-white/60">{num}</div>
      </div>
      <div className="mt-5 text-sm font-semibold">{step.title}</div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-200/85">{step.body}</p>
    </div>
  )
}