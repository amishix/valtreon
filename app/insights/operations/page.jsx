import Link from "next/link"
import { Navbar } from "../../../components/navbar"
import { Footer } from "../../../components/footer"
import {
  MapPin,
  Building,
  Globe2,
  Users,
  ArrowRight,
  ShieldCheck,
  GitBranch,
  Lock,
  AlertTriangle,
  Workflow,
  FileText,
  Layers,
  CheckCircle2,
  FileSearch,
} from "lucide-react"

export default function OperationsPage() {
  const nodes = [
    {
      city: "London",
      focus: "Governance, risk, and assurance",
      responsibilities: [
        "Regulatory alignment and client assurance",
        "Investment committee governance and escalation",
        "Audit readiness and evidence pack delivery",
        "External reporting and institutional partnerships",
      ],
      details:
        "London is the assurance node. It anchors governance, risk appetite, and reporting discipline, and it is where verification outputs are packaged for institutional scrutiny. When evidence is incomplete or contested, escalation is documented here so decisions remain reviewable rather than being forced into a simplified headline metric.",
      imageSrc: "/London.JPG",
      imageAlt: "London operations",
    },
    {
      city: "Nairobi",
      focus: "Impact evidence and community data trusts",
      responsibilities: [
        "Place based impact measurement and evidence interpretation",
        "Data trust agreements and consent based access controls",
        "Partnership delivery with local institutions",
        "Challenge function for metrics that erase local context",
      ],
      details:
        "Nairobi is the context node. Its role is to prevent abstraction becoming harm by protecting how evidence is produced and what it represents. This node negotiates consent, governs access, and challenges indicators that flatten lived realities into generic reporting language, especially when projects affect livelihoods, land, or local infrastructure.",
      imageSrc: "/Nairobi.JPG",
      imageAlt: "Nairobi operations",
    },
    {
      city: "Bangalore",
      focus: "Engineering and verification architecture",
      responsibilities: [
        "Bhramavora platform development and maintenance",
        "Data pipelines, integrations, and API governance",
        "Model evaluation and anomaly detection workflows",
        "Tooling for audit trails and reviewer decision capture",
      ],
      details:
        "Bangalore is the platform node. It builds the evidence pipelines, access controls, audit trail tooling, and reliability layers that make verification defensible. Engineering work is treated as operational safety rather than feature delivery, because failures here become failures of accountability and client assurance.",
      imageSrc: "/Banglore.JPG",
      imageAlt: "Bangalore operations",
    },
  ]

  const controls = [
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "Escalation paths and dispute handling",
      body:
        "When evidence is incomplete, contradictory, or disputed, cases move through a documented escalation pathway rather than being forced into a single number. Escalations create review tasks, capture rationale, and require sign off from independent functions before outputs are released.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Assurance standards and evidence packs",
      body:
        "Verification outputs are delivered as an assurance pack: provenance summary, completeness checks, exception log, reviewer notes, and an explicit statement of uncertainty. The objective is to remain contestable under scrutiny, not to look polished.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Separation of duties",
      body:
        "Teams that build verification logic are not the sole approvers of high impact conclusions. Review functions remain independent, and high risk engagements require cross sign off between verification, risk, and data stewardship.",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Access control and consent governance",
      body:
        "Sensitive datasets are governed through consent based agreements, minimised retention, and role based access. Community sourced evidence is handled through trust agreements that define what data can be used, how it can be interpreted, and how it must be reported back.",
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Model risk management",
      body:
        "AI assisted review is treated as decision support, not authority. Model drift, bias, and automation risk are monitored. When automation risk rises, outputs are downgraded to advisory and require stronger human review before they can influence investment action.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Audit trail by default",
      body:
        "Every material transformation is logged: what evidence was used, what was excluded and why, which checks fired, who reviewed, and what judgement call was made. This makes it possible to reconstruct how a conclusion was reached later.",
    },
  ]

  const lifecycle = [
    {
      icon: <FileSearch className="h-5 w-5" />,
      title: "Evidence intake",
      body: "Disclosures and third-party signals are ingested with provenance preserved and missingness made visible.",
    },
    {
      icon: <Workflow className="h-5 w-5" />,
      title: "Verification checks",
      body: "Rules, anomaly flags, and review prompts identify weak claims, inconsistencies, and fragile indicators.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Human review",
      body: "Reviewers attach rationale, dissent, and uncertainty notes. High impact cases trigger cross functional sign off.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Assurance pack",
      body: "Outputs ship with exception logs, provenance summaries, and a plain language uncertainty statement.",
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
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] text-white text-balance">
              Operations and governance
            </h1>

            <p className="mt-6 text-lg md:text-xl text-zinc-300/90 max-w-4xl mx-auto text-balance leading-relaxed">
              Valtreon operates as a medium sized investment and verification firm built to hold up under scrutiny.
              Our operating model assumes that financial decision making fails when it becomes detached from evidence and
              when reporting becomes easier to optimise than outcomes. To counter that, we organise around delivery
              controls: independent review, documented escalation paths, consent based data governance, and audit trails
              that preserve how conclusions were produced. Expertise is distributed across regional nodes so verification
              stays context aware and decisions remain challengeable rather than concentrated in one office.
            </p>
          </div>

          {/* Scale */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <MetricCard icon={<Building className="w-12 h-12 text-white" />} value="£55M" label="Annual revenue (modelled)" />
            <MetricCard icon={<Users className="w-12 h-12 text-white" />} value="310" label="Employees" />
            <MetricCard icon={<Globe2 className="w-12 h-12 text-white" />} value="3" label="Operating nodes" />
          </div>

          {/* LO alignment without sounding like a report */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <div className="flex items-start gap-4">
              <ShieldCheck className="h-10 w-10 text-white/80 flex-shrink-0" />
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-white/60">Operating principle</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Accountability is designed, not promised</h2>
                <p className="mt-4 text-zinc-300 leading-relaxed">
                  The organisation is structured so that evidence, participation, and oversight are not optional. When
                  data is missing or contested, the process does not “smooth it out”. It records uncertainty, triggers
                  escalation, and preserves reviewer judgement so decisions remain inspectable months later.
                </p>
              </div>
            </div>
          </div>

          {/* Ownership and purpose lock */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-white/60">Ownership and accountability</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Mission locked structure</h2>

            <p className="mt-5 text-zinc-300 leading-relaxed">
              Valtreon is modelled as a privately held company with a purpose binding charter and stakeholder advisory
              oversight. The charter constrains the firm’s ability to prioritise short term returns over social and
              ecological outcomes, and it requires written justification when decisions involve contested trade offs.
              The intention is practical: prevent verification becoming a marketing layer and ensure the labour of
              accountability remains visible inside the organisation.
            </p>

            <p className="mt-4 text-zinc-300 leading-relaxed">
              This is paired with separation of duties in delivery. High impact verification conclusions cannot be
              produced, approved, and commercialised by the same team without independent review. Where evidence is weak,
              confidence is downgraded, uncertainty is recorded, and escalation is triggered rather than hidden.
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <InlineFact
                icon={<Layers className="w-5 h-5" />}
                title="Two loop accountability"
                body="Executive delivery with challenge and escalation routes."
              />
              <InlineFact
                icon={<ShieldCheck className="w-5 h-5" />}
                title="Assurance first delivery"
                body="Outputs packaged for scrutiny, not storytelling."
              />
              <InlineFact
                icon={<AlertTriangle className="w-5 h-5" />}
                title="Resistance to pressure"
                body="Controls that stop client convenience becoming the standard."
              />
            </div>
          </div>

          {/* Decision lifecycle */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-white/60">Decision lifecycle</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">How evidence becomes a decision</h2>
            <p className="mt-5 text-zinc-300 leading-relaxed">
              This is the core workflow that makes verification defensible. It keeps results reviewable, contestable, and
              reconstructable, even when teams change or conditions shift.
            </p>

            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {lifecycle.map((s, i) => (
                <StepCard key={i} icon={s.icon} title={s.title} body={s.body} index={i + 1} />
              ))}
            </div>
          </div>

          {/* Org chart area that looks intentional */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-white/60">Structure</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Organisational structure</h2>

            <p className="mt-5 text-zinc-300 leading-relaxed">
              The organisation is designed so delivery and approval are separated. Verification can pause a decision, and
              governance can override commercial pressure. This prevents “one team owns the story” dynamics that often
              cause reputational reporting to replace accountability.
            </p>

            <div className="mt-8 grid lg:grid-cols-3 gap-6">
              <StructureTile
                title="Executive delivery"
                body="Portfolio teams run investments and client work, but do not have sole control over release decisions."
                icon={<CheckCircle2 className="h-5 w-5" />}
              />
              <StructureTile
                title="Independent review"
                body="Risk, assurance, and data stewardship functions review high consequence outputs and disputed cases."
                icon={<ShieldCheck className="h-5 w-5" />}
              />
              <StructureTile
                title="Escalation and sign off"
                body="Weak evidence or contested claims trigger escalation, documented rationale, and cross functional sign off."
                icon={<GitBranch className="h-5 w-5" />}
              />
            </div>

            {/* Optional image drop-in */}
            <div className="mt-8 rounded-2xl border border-dashed border-white/15 bg-black/30 overflow-hidden">
              <div className="aspect-[16/7] w-full flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="text-xs tracking-[0.2em] uppercase text-white/60">Org chart image placeholder</div>
                  <div className="mt-2 text-sm text-zinc-300">
                    When ready, add <span className="text-white/80">/public/org-chart.png</span> and render it here.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nodes */}
          <div className="mb-12">
            <div className="text-center mb-10">
              <p className="text-xs tracking-[0.2em] uppercase text-white/60">Operating model</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-white">
                Distributed nodes with shared standards
              </h2>
              <p className="mt-4 text-zinc-300 leading-relaxed max-w-5xl mx-auto">
                Each node owns a distinct responsibility set, but assurance standards and the evidence lifecycle stay
                consistent. This reduces fragmentation and prevents accountability gaps when decisions cross regions,
                teams, and client contexts.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {nodes.map((node, index) => (
                <NodeCard key={index} node={node} />
              ))}
            </div>
          </div>

          {/* Delivery controls */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-white/60">Controls</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">How we keep work auditable</h2>

            <p className="mt-5 text-zinc-300 leading-relaxed">
              These controls exist because trust work fails when it becomes a dashboard. The goal is reconstruction: an
              external reviewer should be able to follow the chain of evidence and understand why judgement calls were
              made.
            </p>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {controls.map((c, idx) => (
                <Control key={idx} icon={c.icon} title={c.title} body={c.body} />
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-black/30 p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-white/80 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-base font-semibold">Known limitations</div>
                  <p className="mt-2 text-sm text-zinc-200/85 leading-relaxed">
                    Verification cannot eliminate uncertainty. Some outcomes remain qualitative, slow moving, or
                    contested. Data can be uneven across regions and institutions can attempt to optimise disclosure.
                    Valtreon treats these limits as operational realities: uncertainty is documented, confidence is
                    graded, and disputed cases are escalated rather than hidden.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mb-8">
            <Link
              href="/about/people"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-black hover:bg-zinc-100 transition"
            >
              People and culture <ArrowRight className="w-5 h-5" />
            </Link>

            <div className="mt-4">
              <Link href="/insights/analysis" className="text-sm font-semibold text-white/80 hover:text-white transition">
                Read critical analysis
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

/* ---------------------------- small components ---------------------------- */

function MetricCard({ icon, value, label }) {
  return (
    <div className="bg-zinc-950 border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition">
      <div className="mx-auto mb-4 w-fit opacity-90">{icon}</div>
      <div className="text-4xl font-semibold text-white mb-2">{value}</div>
      <p className="text-zinc-400">{label}</p>
    </div>
  )
}

function InlineFact({ icon, title, body }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-3 text-white/90">
        <div className="opacity-90">{icon}</div>
        <div className="text-sm font-semibold">{title}</div>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-200/85">{body}</p>
    </div>
  )
}

function StepCard({ icon, title, body, index }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center justify-between">
        <div className="text-white/85">{icon}</div>
        <div className="text-xs tracking-[0.18em] uppercase text-white/60">{`0${index}`}</div>
      </div>
      <div className="mt-4 text-base font-semibold">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-200/85">{body}</p>
    </div>
  )
}

function StructureTile({ title, body, icon }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-white/80">{icon}</div>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-200/85">{body}</p>
    </div>
  )
}

function NodeCard({ node }) {
  return (
    <div className="bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] transition-all">
      <div className="relative h-44 sm:h-48 overflow-hidden">
        <img src={node.imageSrc} alt={node.imageAlt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="text-xs tracking-[0.2em] uppercase text-white/70">Node</div>
          <div className="mt-1 text-lg font-semibold text-white">{node.city}</div>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="w-6 h-6 text-white/85" />
          <div>
            <h3 className="text-2xl font-semibold text-white">{node.city}</h3>
            <p className="text-zinc-300">{node.focus}</p>
          </div>
        </div>

        <p className="text-zinc-400 leading-relaxed mb-6">{node.details}</p>

        <ul className="space-y-3">
          {node.responsibilities.map((responsibility, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
              <span className="text-zinc-300 leading-relaxed">{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Control({ icon, title, body }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-white/90">{icon}</div>
      <div className="mt-4 text-base font-semibold">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-200/85">{body}</p>
    </div>
  )
}