import { Navbar } from "../../../components/navbar"
import { Footer } from "../../../components/footer"
import Image from "next/image"
import { FileSearch, Scale, ShieldCheck, Lock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutAuthorsPage() {
  const focusAreas = [
    {
      icon: <FileSearch className="h-5 w-5" />,
      title: "Evidence and auditability",
      body: "Building systems that preserve provenance, record uncertainty, and stay reviewable under scrutiny.",
    },
    {
      icon: <Scale className="h-5 w-5" />,
      title: "Decision making in regulated domains",
      body: "Designing workflows where governance, escalation, and accountability are part of the architecture.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Responsible computing",
      body: "Taking bias, power, and access seriously as system risks rather than side notes.",
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Security minded design",
      body: "Treating data minimisation, access control, and clear boundaries as product fundamentals.",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/35 to-transparent pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.22em] uppercase text-white/60">About the author</p>
            <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-balance">
              Values, motivation, and intent
            </h1>
            <p className="mt-6 text-lg md:text-xl text-zinc-300/90 max-w-3xl mx-auto leading-relaxed">
              This is not only a fictional organisation. It is a statement about the kind of computer science work I want
              to do and the kind of impact I want that work to have.
            </p>
          </div>

          {/* Author block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            {/* Image */}
            <div className="lg:col-span-4">
              <div className="rounded-3xl border border-white/10 bg-zinc-950 overflow-hidden">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/Author.JPG"
                    alt="Author portrait"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Quick identity card (optional but looks professional) */}
              <div className="mt-6 rounded-3xl border border-white/10 bg-zinc-950 p-6">
                <div className="text-xs tracking-[0.22em] uppercase text-white/60">Author perspective</div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  Computer Science student focusing on systems, data, and accountability. Interested in building software
                  that holds up under pressure in finance, public infrastructure, and other regulated environments.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/about/mission"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-4 py-2 text-xs font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
                  >
                    Mission <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/insights/analysis"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-4 py-2 text-xs font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
                  >
                    Critical analysis <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-8">
              <div className="bg-zinc-950 border border-white/10 rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                  Statement of personal values and goals
                </h2>

                <div className="space-y-5 text-zinc-300 leading-relaxed">
                  <p>
                    I built Valtreon to connect my computer science training with the uncomfortable question that kept
                    coming up across my studies: who gets to decide what is “true”, “good”, or “acceptable” when decisions
                    are mediated by dashboards, models, and reporting frameworks. As a student, I have often felt the gap
                    between what technology can do and how it is actually deployed, especially in finance and data driven
                    decision making where speed and presentation can quietly outrun accountability.
                  </p>

                  <p>
                    A lot of modern systems present themselves as neutral. In practice, they shape what counts as valid
                    evidence and they can concentrate power in ways that are hard to challenge. Over time I became more
                    interested in systems that remain contestable: where claims can be traced back to inputs, where uncertainty
                    is recorded rather than edited out, and where people can escalate concerns without being dismissed as
                    “non technical”.
                  </p>

                  <p>
                    That is what Valtreon is trying to model. The firm is designed around verification as a workflow, not
                    a slogan. It treats audit trails, escalation paths, and governance routines as product infrastructure.
                    From a computer science perspective, that means building systems where integrity is not an afterthought:
                    provenance, access control, exception logs, and review notes are part of the core architecture.
                  </p>

                  <p>
                    The name <span className="text-white font-medium">Valtreon</span> came from that same line of thinking.
                    While searching for a name, I kept returning to the feeling that modern finance can resemble a closed
                    digital world: rules are embedded in systems, and people affected by outcomes often cannot see how
                    decisions were produced. I remembered watching <em>Tron</em>, where characters are trapped inside
                    a system they do not control or fully understand. Valtreon is a deliberate inversion of that idea:
                    an organisation designed to make systems legible rather than opaque, and to return agency to reviewers,
                    regulators, and affected communities instead of hiding judgement behind interfaces.
                  </p>

                  <p>
                    On a personal level, this connects to my experience of navigating competitive environments as a student,
                    where expectations can feel opaque and success can depend on decoding hidden rules. Add financial pressure
                    on top and it becomes obvious that access and transparency are not abstract topics. They change who can
                    participate, who can take risks, and who gets left behind. Those experiences shaped my interest in building
                    systems that do not assume perfect users, unlimited resources, or unquestioned authority.
                  </p>

                  <p>
                    My career goal is to work in high impact, regulated or high consequence domains, where technical decisions
                    have real social and economic weight. I want to contribute to products that make decision making more
                    reviewable and accountable over time, not just more automated. Valtreon represents the kind of organisation
                    I would want to build or join: one where technical rigour and ethical responsibility are not separated,
                    and where computer science is used to reduce harm, surface uncertainty, and support better collective
                    judgement rather than simply optimising for speed or profit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Career direction + technical focus */}
          <div className="bg-zinc-950 border border-white/10 rounded-3xl p-8 md:p-10 mb-14">
            <div className="text-xs tracking-[0.22em] uppercase text-white/60">Career direction</div>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold">What I am building towards in computer science</h2>
            <p className="mt-4 text-zinc-300 leading-relaxed max-w-4xl">
              This project reflects the technical direction I want to develop: systems that support auditability, data governance,
              security minded design, and responsible decision workflows. The point is not to claim technology fixes ethics.
              The point is to design software that makes accountability harder to avoid.
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {focusAreas.map((x, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-black/30 p-6">
                  <div className="flex items-center gap-3 text-white/85">
                    {x.icon}
                    <div className="font-semibold text-white">{x.title}</div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-200/85">{x.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Closing note */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 md:p-10 mb-8">
            <p className="text-zinc-300 leading-relaxed text-center max-w-4xl mx-auto">
              This statement is included to link the organisational design of Valtreon to my personal values and career goals
              in computer science. It grounds the project in reflective practice and research driven critique, not only fictional
              world building. I hope the website communicates why governance, ethics, and technical rigour cannot be separated
              in high impact systems.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}