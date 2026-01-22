import { Navbar } from "../../../components/navbar"
import Link from "next/link"
import {
  ArrowRight,
  Quote,
  Users,
  ShieldCheck,
  Scale,
  User,
  Heart,
  MessageCircle,
  Globe2,
  Building2,
  FileSearch,
  Gavel,
  Workflow,
  BadgeCheck,
  Layers,
  Lock,
  AlertTriangle,
  CheckCircle2,
  ScrollText,
  LineChart,
  Handshake,
  BookOpen,
  MapPin,
} from "lucide-react"

/**
 * People & Culture — Valtreon (About Us)
 * Goal:
 * - Looks like a serious firm website (Goldman-style structure)
 * - Still hits the brief: employee profiles, collaboration mode, backgrounds, culture analysis
 * - Explicitly includes access/participation + ethics links (LO1/LO2) without feeling like a report
 * Notes:
 * - Uses your relative navbar import that works in your repo.
 * - No footer here (you can add later if you want, but keeping this page clean like GS).
 */

export default function PeoplePage() {
  const featuredProfiles = [
    {
      name: "Amina Yusuf",
      role: "Community Data Steward",
      division: "Impact Verification",
      location: "Nairobi",
      image: "/HeadshotA.png",
      tenure: "Joined 2031",
      quote: "Local knowledge is not a ‘nice to have’. It changes what counts as evidence.",
      background: {
        education: ["BSc Environmental Economics", "Short programme in Data Governance"],
        prior: [
          "Climate adaptation finance work with informal settlement organisations",
          "Field partnerships on resilience funding and community consent processes",
        ],
        focus: ["Consent protocols", "Place based metrics", "Data trust governance"],
      },
      dayToDay: [
        "Negotiates what data is collected, who can access it, and what ‘verification’ means locally",
        "Red teams assumptions in datasets that under represent informal economies",
        "Co authors escalation memos when metrics conflict with lived outcomes",
      ],
      collaboration: [
        "Works with engineers to reduce harmful proxy indicators",
        "Works with policy and governance to align verification outputs with oversight needs",
        "Works with community delegates to ensure consent is explicit and reviewable",
      ],
    },
    {
      name: "Rohan Mehta",
      role: "Algorithmic Audit Engineer",
      division: "Bhramavora Engineering",
      location: "Bangalore",
      image: "/HeadshotB.png",
      tenure: "Joined 2030",
      quote: "A model is a decision. If it cannot be questioned, it should not be used.",
      background: {
        education: ["BEng Computer Science", "Specialisation in Responsible ML"],
        prior: [
          "Open source auditing contributor for model evaluation tooling",
          "Fintech risk modelling internship, focused on monitoring drift and edge cases",
        ],
        focus: ["Bias and drift checks", "Audit trails", "Human in the loop review"],
      },
      dayToDay: [
        "Builds verification tests that surface missing evidence, inconsistent claims, and fragile indicators",
        "Maintains ‘contestability’ features so reviewers can attach rationale, dissent, and uncertainty",
        "Runs audit simulations for clients preparing governance reviews or regulator scrutiny",
      ],
      collaboration: [
        "Pairs with impact analysts to avoid over quantifying qualitative outcomes",
        "Works with platform engineers on provenance, logging, and traceability",
        "Supports governance council reviews by translating technical findings into decision language",
      ],
    },
  ]

  const voices = [
    {
      name: "Policy and Governance Lead",
      location: "London",
      quote:
        "We do not optimise for speed at the cost of scrutiny. If a decision cannot be explained and defended, it is not ready.",
    },
    {
      name: "Impact Analyst",
      location: "Nairobi",
      quote:
        "When indicators flatten reality, we document dissent. That record is part of accountability and it travels with the decision.",
    },
    {
      name: "Platform Engineer",
      location: "Bangalore",
      quote:
        "Verification is not a score. It is a trail of evidence, uncertainty, review notes, and the reasons a judgement was made.",
    },
  ]

  const operatingPrinciples = [
    {
      icon: <Workflow className="h-5 w-5" />,
      title: "Cross functional review by default",
      body:
        "Every high impact decision passes through a review loop that includes technical, impact, and governance perspectives. The aim is not consensus theatre, but documented judgement that stays inspectable months later.",
    },
    {
      icon: <FileSearch className="h-5 w-5" />,
      title: "Evidence and provenance first",
      body:
        "Teams are evaluated on the quality of evidence trails, not how polished the narrative sounds. If evidence is partial, the system records uncertainty explicitly, including where the organisation is ‘guessing’ and why.",
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Auditability over aesthetics",
      body:
        "We treat audit trails as core product value. Reviewer notes, transformations, and decision rationale are preserved so that later teams can contest or update decisions without rewriting history.",
    },
    {
      icon: <Gavel className="h-5 w-5" />,
      title: "Escalation pathways are real",
      body:
        "Escalation is not a slide in a deck. It is a documented protocol: who can pause an investment decision, what evidence triggers a pause, and how independent review is convened.",
    },
    {
      icon: <AlertTriangle className="h-5 w-5" />,
      title: "We design for uncomfortable truths",
      body:
        "The system must be able to say ‘we do not know’ and ‘this looks wrong’ even when that creates commercial discomfort. If the platform cannot surface inconvenient findings, it is not doing verification.",
    },
  ]

  const council = [
    {
      title: "Worker representatives",
      body: "Protects internal voice, workload safety, and the integrity of review capacity.",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Client delegates",
      body: "Ensures institutional constraints are understood without allowing them to dominate judgement.",
      icon: <Handshake className="h-5 w-5" />,
    },
    {
      title: "Community data trust delegates",
      body: "Represents affected contexts, consent boundaries, and local interpretation of evidence.",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      title: "Independent ethics reviewers",
      body: "External scrutiny, conflict of interest controls, and veto mechanisms for high risk decisions.",
      icon: <Gavel className="h-5 w-5" />,
    },
  ]

  const training = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Evidence literacy",
      body: "How to read data provenance, recognise missingness, and document uncertainty without hand waving.",
    },
    {
      icon: <BadgeCheck className="h-5 w-5" />,
      title: "Verification practice",
      body: "How verification differs from scoring. Focus on traceability, contestability, and reviewable outputs.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Security and privacy",
      body: "Data minimisation, access controls, secure handling of sensitive social and ecological signals.",
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Context and power",
      body: "How metrics can become tools of control. How to design participation pathways that are not tokenistic.",
    },
  ]

  const nichePractices = [
    {
      icon: <ScrollText className="h-5 w-5" />,
      title: "Decision memos, not just dashboards",
      body:
        "Teams write decision memos for every material investment or verification outcome. The memo is short, but strict: what was claimed, what was evidenced, what is uncertain, who reviewed it, and what could change the conclusion.",
    },
    {
      icon: <LineChart className="h-5 w-5" />,
      title: "Drift monitoring for impact claims",
      body:
        "We track when the evidence behind a claim degrades over time. If data sources change, coverage drops, or incentives shift, the system flags ‘impact drift’ and triggers re review.",
    },
    {
      icon: <CheckCircle2 className="h-5 w-5" />,
      title: "Two key outcomes: verifiable and contestable",
      body:
        "A result can be ‘verifiable’ but still disputed. We treat contestability as a feature. Disagreement is recorded with rationale so governance can see where judgement diverges.",
    },
    {
      icon: <Building2 className="h-5 w-5" />,
      title: "Institutional hardening",
      body:
        "We pressure test how outputs survive board scrutiny, client committees, and regulator style questions. If a finding cannot withstand hostile questioning, we revise the evidence trail, not the conclusion.",
    },
  ]

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      {/* HERO */}
      <header className="relative overflow-hidden border-b border-white/10">
        <HeroBackground />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.22em] uppercase text-white/60">About us</p>

            <h1 className="mt-5 text-balance text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em]">
              The people of Valtreon are Valtreon
            </h1>

            <p className="mt-6 text-balance text-base sm:text-lg leading-relaxed text-zinc-200/90">
              Verification is not a technical feature. It is an organisational habit. Valtreon hires across different
              disciplines and regions so that financial intelligence stays accountable to real world consequences.
              Our culture is built to withstand scrutiny: we document uncertainty, preserve audit trails, and design
              decision making so it remains reviewable under pressure, not just when conditions are calm.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/about/mission"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
              >
                Purpose and values <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/insights/analysis"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-100 transition"
              >
                Read our critical analysis <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-4 gap-4">
              <MiniStat icon={<Users className="h-5 w-5" />} value="310" label="Employees" />
              <MiniStat icon={<Globe2 className="h-5 w-5" />} value="3" label="Global nodes" />
              <MiniStat icon={<Scale className="h-5 w-5" />} value="£55m" label="Revenue (est.)" />
              <MiniStat icon={<ShieldCheck className="h-5 w-5" />} value="Audit first" label="Reviewable outputs" />
            </div>
          </div>
        </div>
      </header>

      {/* PURPOSEFUL LEADERSHIP + OVERSIGHT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.22em] uppercase text-white/60">Leadership</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">
              Responsibility before hierarchy
            </h2>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              Valtreon operates in an environment where incentives are often misaligned: institutions can benefit from
              narrative compliance even when outcomes are weak. Our leadership model is designed to resist that drift by
              embedding review, escalation, and independent challenge into everyday operations.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-7">
              <div className="flex items-start gap-3">
                <Quote className="h-5 w-5 mt-1 text-white/75" />
                <div>
                  <p className="text-sm leading-relaxed text-zinc-200/85">
                    “Our culture is our identity. It is also a safety mechanism. We slow down when consequences are high,
                    and we document judgement so the organisation can be held to account later.”
                  </p>
                  <div className="mt-3 text-sm font-semibold">Stewardship Council Chair</div>
                  <div className="mt-1 text-xs text-white/55">Rotating role, elected term</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="flex items-center justify-between gap-6 flex-wrap">
                <h3 className="text-xl font-semibold">Stewardship Council</h3>
                <span className="text-xs tracking-[0.18em] uppercase text-white/60">
                  Oversight and escalation
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-zinc-200/85">
                The Council reviews mission adherence, ethical disputes, and high risk verification outputs. It is built
                to reduce institutional capture and prevent technical authority from dominating social judgement.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                {council.map((c, i) => (
                  <CouncilItem key={i} title={c.title} body={c.body} icon={c.icon} />
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 mt-0.5 text-white/75" />
                  <div>
                    <div className="text-sm font-semibold">What triggers escalation</div>
                    <p className="mt-2 text-xs leading-relaxed text-white/65">
                      Examples include: weak provenance, contradictory evidence, high consequence externalities, clear
                      incentives to misreport, or community delegates raising consent concerns. Escalation creates a pause
                      state until review closes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/insights/operations"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
                >
                  Operations and structure <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/insights/analysis"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
                >
                  Ethics and limitations <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROFILES */}
      <section className="border-y border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <p className="text-xs tracking-[0.22em] uppercase text-white/60">Featured profiles</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">
                People who shape verification in practice
              </h2>
              <p className="mt-4 text-zinc-300 max-w-3xl leading-relaxed">
                The brief asks who works here, what backgrounds they come from, and how they collaborate. Below are two
                representative profiles that show how Valtreon combines technical capability with governance and social
                context.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-100 transition"
            >
              Explore products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-8">
            {featuredProfiles.map((p, i) => (
              <article key={i} className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-white/20 transition">
                <div className="flex items-start gap-5">
                  <img
                    src={p.image || "/placeholder.svg"}
                    alt={p.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border border-white/15"
                  />
                  <div className="min-w-0">
                    <h3 className="text-2xl font-semibold">{p.name}</h3>
                    <div className="mt-1 text-zinc-300">{p.role}</div>
                    <div className="mt-1 text-xs text-white/55">
                      {p.division} • {p.location} • {p.tenure}
                    </div>

                    <div className="mt-4 flex items-start gap-2 text-sm text-zinc-200/85">
                      <Quote className="h-4 w-4 mt-0.5 text-white/70 shrink-0" />
                      <p className="leading-relaxed">{p.quote}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-6">
                  <DetailBlock
                    title="Background"
                    items={[
                      ...p.background.education.map((x) => `Education: ${x}`),
                      ...p.background.prior.map((x) => `Experience: ${x}`),
                    ]}
                  />
                  <DetailBlock title="Focus areas" items={p.background.focus} />
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-6">
                  <DetailBlock title="Day to day" items={p.dayToDay} />
                  <DetailBlock title="Collaboration" items={p.collaboration} />
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.background.focus.map((h, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATING PRINCIPLES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.22em] uppercase text-white/60">Culture in practice</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">
              How teams collaborate
            </h2>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              We are collaborative by design, not motivational posters. Our operating rhythm is built around review,
              disagreement, and documentation. This creates friction, but reduces quiet failure and overconfident
              automation, which is exactly what verification firms must avoid.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-7">
              <div className="text-sm font-semibold">How performance is judged</div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-200/85">
                Teams are evaluated on: quality of evidence trails, clarity of decision rationale, ability to surface
                uncertainty, and whether governance escalation was used appropriately. “Clean dashboards” without
                defensible provenance are treated as a risk.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid md:grid-cols-2 gap-6">
              {operatingPrinciples.map((p, i) => (
                <PrincipleCard key={i} icon={p.icon} title={p.title} body={p.body} />
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold">Collaboration model</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-200/85">
                Work is done in cross functional “verification pods” for each portfolio theme or client. Pods typically
                include an audit engineer, an impact analyst, a data steward, and a governance liaison. Competitive
                ranking is avoided because it pushes people to hide uncertainty. Instead, we reward teams that surface
                risk early.
              </p>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <MiniPill title="Pods" body="Small cross functional teams" icon={<Users className="h-4 w-4" />} />
                <MiniPill title="Red team" body="Challenge assumptions on purpose" icon={<AlertTriangle className="h-4 w-4" />} />
                <MiniPill title="Review gates" body="Escalation and sign off checkpoints" icon={<Gavel className="h-4 w-4" />} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NICHE PRACTICES */}
      <section className="border-t border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <p className="text-xs tracking-[0.22em] uppercase text-white/60">Verification craft</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">
                Niche practices that make this credible
              </h2>
              <p className="mt-4 text-zinc-300 max-w-3xl leading-relaxed">
                These are the details that separate “ESG theatre” from an organisation that can actually stand behind its
                outputs. We do not promise perfect truth. We promise traceable work.
              </p>
            </div>

            <Link
              href="/insights/analysis"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
            >
              Read limits and ethics <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {nichePractices.map((p, i) => (
              <NicheCard key={i} icon={p.icon} title={p.title} body={p.body} />
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">What “verified” means internally</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-200/85">
              “Verified” does not mean “true forever”. It means the claim is supported by traceable evidence at a given
              time, with documented uncertainty, clear provenance, and a recorded review decision. If the evidence
              changes or incentives shift, the verification status can be downgraded with a visible reason.
            </p>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <StatusTile
                title="Verified"
                body="Evidence is sufficient and provenance is clear"
                icon={<CheckCircle2 className="h-5 w-5" />}
              />
              <StatusTile
                title="Conditional"
                body="Evidence exists but uncertainty or coverage gaps remain"
                icon={<AlertTriangle className="h-5 w-5" />}
              />
              <StatusTile
                title="Contested"
                body="Evidence is disputed or interpretation diverges"
                icon={<MessageCircle className="h-5 w-5" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING + DEVELOPMENT */}
      <section className="border-t border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs tracking-[0.22em] uppercase text-white/60">Development</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">
                Training that supports scrutiny
              </h2>
              <p className="mt-4 text-zinc-300 leading-relaxed">
                We train people for verification craft, not just tooling. Technical skill without evidence literacy can
                produce confident, fragile outputs. The aim is to build teams who understand power, incentives, and the
                difference between measurement and reality.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid md:grid-cols-2 gap-6">
                {training.map((t, i) => (
                  <TrainingCard key={i} icon={t.icon} title={t.title} body={t.body} />
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 mt-0.5 text-white/75" />
                  <div>
                    <div className="text-sm font-semibold">Why this matters for the brief</div>
                    <p className="mt-2 text-xs leading-relaxed text-white/65">
                      This section shows how the organisation embeds ethics, participation, and sustainability into
                      operations. It is not a separate “ethics page” only. It is part of how people work and how the
                      platform is governed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/about/mission"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
                >
                  Mission and values <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/insights/operations"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
                >
                  Structure and scale <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOICES */}
      <section className="border-t border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <p className="text-xs tracking-[0.22em] uppercase text-white/60">Voices of the firm</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">
                What it feels like to work here
              </h2>
              <p className="mt-4 text-zinc-300 max-w-3xl leading-relaxed">
                Short reflections from different functions. The point is to show collaboration across roles and the
                institutional tone you want for the website.
              </p>
            </div>
            <Link
              href="/about/history"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-100 transition"
            >
              Our history and impact <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {voices.map((v, i) => (
              <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <div className="flex items-start gap-3 text-white/85">
                  <Quote className="h-5 w-5 mt-0.5" />
                  <p className="text-sm leading-relaxed text-zinc-200/85">{v.quote}</p>
                </div>
                <div className="mt-6 text-sm font-semibold">{v.name}</div>
                <div className="mt-1 text-xs text-white/55">{v.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

/* ---------------------------- UI helpers ---------------------------- */

function HeroBackground() {
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

function MiniStat({ icon, value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
      <div className="flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-semibold">{value}</div>
        <div className="text-white/70">{icon}</div>
      </div>
      <div className="mt-1 text-xs tracking-[0.18em] uppercase text-white/60">{label}</div>
    </div>
  )
}

function CouncilItem({ title, body, icon }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 text-white/80">{icon}</div>
        <div>
          <div className="text-sm font-semibold">{title}</div>
          <div className="mt-2 text-xs leading-relaxed text-white/65">{body}</div>
        </div>
      </div>
    </div>
  )
}

function DetailBlock({ title, items }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
      <div className="text-sm font-semibold">{title}</div>
      <ul className="mt-3 space-y-2 text-xs leading-relaxed text-white/70">
        {items.map((x, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/60 shrink-0" />
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PrincipleCard({ icon, title, body }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 hover:border-white/20 transition">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-blue-200/80">
        {icon}
      </div>
      <div className="mt-5 text-sm font-semibold">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-200/85">{body}</p>
    </div>
  )
}

function MiniPill({ title, body, icon }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
      <div className="flex items-center gap-2">
        <div className="text-white/80">{icon}</div>
        <div className="text-sm font-semibold">{title}</div>
      </div>
      <div className="mt-2 text-xs text-white/65 leading-relaxed">{body}</div>
    </div>
  )
}

function NicheCard({ icon, title, body }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-white/20 transition">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 text-blue-200/80">{icon}</div>
        <div>
          <div className="text-lg font-semibold">{title}</div>
          <p className="mt-3 text-sm leading-relaxed text-zinc-200/85">{body}</p>
        </div>
      </div>
    </div>
  )
}

function StatusTile({ title, body, icon }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-white/80">{icon}</div>
      </div>
      <div className="mt-2 text-xs leading-relaxed text-white/65">{body}</div>
    </div>
  )
}

function TrainingCard({ icon, title, body }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 hover:border-white/20 transition">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-blue-200/80">
        {icon}
      </div>
      <div className="mt-5 text-sm font-semibold">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-200/85">{body}</p>
    </div>
  )
}