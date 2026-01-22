import Link from "next/link"
import { Navbar } from "../../../components/navbar"
import { Footer } from "../../../components/footer"
import {
  Leaf,
  ShieldCheck,
  Users,
  AlertCircle,
  Scale,
  FileSearch,
  Lock,
  Cpu,
  Database,
  Workflow,
  ArrowRight,
  GitBranch,
  BadgeCheck,
  Gavel,
  ClipboardList,
  AlertTriangle,
} from "lucide-react"

export default function AnalysisPage() {
  const riskRegister = [
    {
      risk: "Data privacy and re-identification",
      whyItMatters:
        "Verification can unintentionally expose sensitive social, ecological, or community information. Even anonymised data can be re-identified when combined with external datasets.",
      howWeControlIt:
        "Purpose limitation, minimisation, retention schedules, and role-based access. Where community evidence is involved, consent-based data trust agreements define permitted use and reporting obligations.",
      tradeOff:
        "Stricter minimisation can reduce model coverage. We accept narrower datasets rather than expand into surveillance-by-default.",
    },
    {
      risk: "Algorithmic bias and uneven error costs",
      whyItMatters:
        "Models can encode historical inequalities, proxy discrimination, and uneven error costs across regions. The danger is not only inaccuracy, but harm that looks ‘objective’.",
      howWeControlIt:
        "Evaluation gates, bias review, human-in-the-loop sign off, and confidence grading. When drift or uncertainty rises, outputs are downgraded to advisory and require stronger review.",
      tradeOff:
        "More human review reduces speed and margins. We treat that friction as a governance requirement, not inefficiency.",
    },
    {
      risk: "Institutional capture and certainty theatre",
      whyItMatters:
        "If paying clients can pressure outputs toward clean conclusions, verification becomes reputation management rather than accountability work.",
      howWeControlIt:
        "Separation of duties, escalation routes, audit trails, and independent challenge roles. Disputed or weak-evidence cases cannot be ‘rounded off’ without a recorded rationale.",
      tradeOff:
        "We may lose clients who want marketing-friendly certainty. We prefer slower growth over diluted assurance.",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/35 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-white/60">Insights</p>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] text-balance">
              Critical analysis: ethics, sustainability, and access
            </h1>
            <p className="mt-6 text-lg md:text-xl text-zinc-300/90 max-w-4xl mx-auto text-balance leading-relaxed">
              This section evaluates Valtreon through sustainability and ethical considerations that directly relate to
              the business model, operational delivery, and management structure. It shows how “technical” design choices
              become governance decisions that shape power, accountability, and participation.
            </p>
          </div>

          {/* LO1 / LO2 explicit framing */}
          <div className="rounded-2xl border border-white/10 bg-zinc-950 p-8 md:p-10 mb-12">
            <div className="flex items-start gap-4">
              <FileSearch className="h-10 w-10 text-white/80 flex-shrink-0" />
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-white/60">Alignment to LO1 and LO2</p>
                <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
                  Sustainability and ethics are built into the operating model
                </h2>

                <p className="mt-4 text-zinc-300 leading-relaxed">
                  Critical analysis means examining how access, participation, sustainability, and ethical considerations
                  emerge from the organisation’s business model and management structure. In Valtreon’s case, the “product”
                  is not only Bhramavora’s interface. The product is also the workflow: who can challenge a decision, how
                  evidence is collected, what happens when data is missing, and whether decisions remain reviewable over
                  time.
                </p>

                <p className="mt-4 text-zinc-300 leading-relaxed">
                  Unlike competitors who reduce ESG to reputation management or a single number, Valtreon treats verification
                  as accountable labour. We record uncertainty rather than hide it, separate delivery from approval to reduce
                  conflicts of interest, and design outputs to be intelligible beyond the paying client. These choices
                  directly constrain revenue tactics, but they increase legitimacy under scrutiny.
                </p>

                <div className="mt-7 grid md:grid-cols-3 gap-4">
                  <InlineFact
                    icon={<BadgeCheck className="w-5 h-5" />}
                    title="Contestability"
                    body="Outputs remain challengeable, not cosmetic."
                  />
                  <InlineFact
                    icon={<Gavel className="w-5 h-5" />}
                    title="Accountability"
                    body="Decisions require documented rationale."
                  />
                  <InlineFact
                    icon={<ClipboardList className="w-5 h-5" />}
                    title="Operational controls"
                    body="Ethics enforced through process and roles."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sustainability */}
          <SectionPanel
            icon={<Leaf className="w-10 h-10 text-white/85" />}
            eyebrow="Sustainability"
            title="Digital verification has a real material footprint"
          >
            <p className="text-zinc-200/90 leading-relaxed">
              Valtreon’s operations consume digital resources including cloud infrastructure and data processing
              services. To mitigate this, the organisation prioritises energy efficient architectures and limits
              unnecessary data retention. Financial sustainability is supported through diversified revenue streams
              aligned with long term impact goals.
            </p>

            <p className="mt-5 text-zinc-200/90 leading-relaxed">
              The sustainability question is not whether the firm publishes the right language. It is whether the firm’s
              evidence practices create avoidable environmental overhead. Evidence pipelines require compute, storage,
              network transfer, and maintenance labour. This creates a tension: more ingestion can increase measurable
              coverage, but it also increases energy use and retention risk. Valtreon resolves this by treating additional
              data as a liability unless it materially improves decision quality and can be governed safely.
            </p>

            <p className="mt-5 text-zinc-200/90 leading-relaxed">
              This is directly tied to operations and incentives. By keeping the firm intentionally medium sized and pricing
              around assurance quality, Valtreon avoids the “scale at any cost” logic that often drives excessive data
              capture and low value analytics shipped for competitive positioning rather than impact.
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <MiniCard
                icon={<Cpu className="h-5 w-5" />}
                title="Energy efficient architecture choices"
                body="Bhramavora uses staged verification: lightweight checks run first, deeper analysis only triggers when evidence thresholds are met. This reduces always-on computation when inputs are weak."
              />
              <MiniCard
                icon={<Database className="h-5 w-5" />}
                title="Retention is treated as risk"
                body="We minimise retention and store only what is required for audit trails, contractual assurance, or regulator-facing evidence packs. Retention schedules are explicit to prevent silent surveillance creep."
              />
              <MiniCard
                icon={<Workflow className="h-5 w-5" />}
                title="Reuse reduces repeat processing"
                body="Verified artefacts are reusable across reporting cycles. Once evidence is validated, it becomes referenceable, reducing repeated ingestion and repeated transformation of identical source material."
              />
              <MiniCard
                icon={<Scale className="h-5 w-5" />}
                title="Financial sustainability without extraction"
                body="Diversified revenue reduces pressure to over-scale. Subscriptions fund platform maintenance, while assurance engagements fund deep review. We protect quality rather than chase growth targets."
              />
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-white/80 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Limits and honest claims</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-200/85">
                    Valtreon does not claim that software solves sustainability. Sustainability is treated as a delivery
                    constraint: reduce unnecessary computation, limit retention, document trade offs, and accept slower
                    growth when scaling would increase resource use or weaken assurance quality.
                  </p>
                </div>
              </div>
            </div>
          </SectionPanel>

          {/* Ethical considerations */}
          <SectionPanel
            icon={<ShieldCheck className="w-10 h-10 text-white/85" />}
            eyebrow="Ethical considerations"
            title="Privacy, bias, and power asymmetry are structural risks"
          >
            <p className="text-zinc-200/90 leading-relaxed">
              Key ethical challenges include data privacy, algorithmic bias, and power asymmetries between institutions
              and communities. Valtreon addresses these through transparent system design, human oversight, and
              stakeholder participation in governance processes.
            </p>

            <p className="mt-5 text-zinc-200/90 leading-relaxed">
              The ethical risk is not only that a model is wrong. The deeper risk is that verification becomes a way to
              legitimise a narrative, particularly when the client is powerful and affected groups are not. This is why
              Valtreon treats governance as product infrastructure: evidence remains traceable, decisions remain reviewable,
              and contested interpretations are escalated rather than forced into a single clean conclusion.
            </p>

            <p className="mt-5 text-zinc-200/90 leading-relaxed">
              Unlike competitors who sell “confidence” as a feature, Valtreon sells documented uncertainty. We treat friction
              as an ethical control. It slows down bad decisions and forces justification when evidence is incomplete.
            </p>

            {/* Risk register style: marker-friendly */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-white/80 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold">Ethical risk register (operational view)</h3>
                  <p className="mt-2 text-sm text-zinc-200/85 leading-relaxed">
                    This is how ethical concerns connect to delivery controls, roles, and governance mechanisms rather than
                    remaining abstract principles.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {riskRegister.map((r, i) => (
                  <div key={i} className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
                    <div className="text-sm font-semibold text-white">{r.risk}</div>

                    <div className="mt-3 grid lg:grid-cols-3 gap-4 text-sm text-zinc-200/85 leading-relaxed">
                      <div>
                        <div className="text-xs tracking-[0.18em] uppercase text-white/60">Why it matters</div>
                        <p className="mt-2">{r.whyItMatters}</p>
                      </div>
                      <div>
                        <div className="text-xs tracking-[0.18em] uppercase text-white/60">Controls</div>
                        <p className="mt-2">{r.howWeControlIt}</p>
                      </div>
                      <div>
                        <div className="text-xs tracking-[0.18em] uppercase text-white/60">Trade off</div>
                        <p className="mt-2">{r.tradeOff}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
              <h3 className="text-lg font-semibold">How ethical controls map to operations</h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-200/85">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/80" />
                  <span>
                    <span className="text-white/90 font-semibold">Separation of duties:</span> teams that build verification logic
                    do not approve high impact conclusions alone.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/80" />
                  <span>
                    <span className="text-white/90 font-semibold">Escalation paths:</span> when evidence is incomplete or outcomes
                    are contested, the case is escalated and documented rather than rounded off.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/80" />
                  <span>
                    <span className="text-white/90 font-semibold">Audit trail by default:</span> provenance, reviewer notes,
                    and rationale are preserved so conclusions remain contestable later.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/80" />
                  <span>
                    <span className="text-white/90 font-semibold">Stakeholder participation:</span> governance includes routes for
                    community data stewards and independent reviewers to challenge reductive indicators.
                  </span>
                </li>
              </ul>
            </div>
          </SectionPanel>

          {/* Access & participation */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <div className="flex items-start gap-4">
              <Users className="w-10 h-10 text-white/80 flex-shrink-0" />
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-white/60">Access and participation</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Readable beyond the paying client</h2>

                <p className="mt-5 text-zinc-300 leading-relaxed">
                  While Valtreon primarily serves institutional clients, its verification outputs are designed to be interpretable
                  by regulators and civil society organisations. However, barriers remain for smaller actors with limited digital
                  access. This tension highlights the ongoing challenge of balancing professional services with inclusive participation.
                </p>

                <p className="mt-4 text-zinc-300 leading-relaxed">
                  In operational terms, access is a governance question: who can challenge a conclusion, what evidence is required to
                  dispute it, and whether documentation is understandable outside the platform. Valtreon reduces barriers by producing
                  standardised evidence packs, plain-language uncertainty notes, and regulator-facing summaries. We are explicit that
                  advanced analytics remain institution-led because they require sustained review capacity and legal accountability.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/insights/operations"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
                  >
                    View operations and governance <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/references"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
                  >
                    View references <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Closing statement */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-semibold text-white mb-4">Concluding position</h2>
            <p className="text-zinc-300 leading-relaxed">
              Valtreon is intentionally designed to resist certainty theatre. Sustainability and ethics are treated as constraints
              that shape architecture, data practices, and management structure. The organisational claim is not that finance becomes
              perfect, but that decisions become more reviewable, more contestable, and less able to hide harm behind polished metrics.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

/* ---------------------------- small components ---------------------------- */

function SectionPanel({ icon, eyebrow, title, children }) {
  return (
    <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
      <div className="flex items-start gap-4 mb-6">
        <div className="text-white/85">{icon}</div>
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-white/60">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">{title}</h2>
        </div>
      </div>
      {children}
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