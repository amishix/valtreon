import Link from "next/link"
import { Navbar } from "../../components/navbar"
import { BookOpen, ArrowRight } from "lucide-react"

export default function ReferencesPage() {
  const references = [
    {
      type: "Book",
      author: "Kaldrack, Irina, and Martina Leeker, eds.",
      title: "There Is No Software, There Are Just Services",
      publication: "Lüneburg: meson press, 2015.",
      note: "Used to frame software as ongoing labour and services, not a finished product.",
    },
    {
      type: "Book",
      author: "McGee, Patrick.",
      title: "Apple in China: The Capture of the World's Greatest Company",
      publication: "New York: Scribner, 2025.",
      note: "Used to analyse supply chain power, dependency, and hidden externalities in global systems.",
    },
    {
      type: "Book",
      author: "Raworth, Kate.",
      title: "Doughnut Economics: Seven Ways to Think Like a 21st-Century Economist",
      publication: "London: Random House Business, 2017.",
      note: "Primary framework for defining ‘safe and just’ boundaries for investment decisions.",
    },
    {
      type: "Journal",
      author: "Gonzalez-Barahona, Jesús M.",
      title: "A Brief History of Free, Open Source Software and Its Communities",
      publication: "Computer 54, no. 2 (2021): 75–87.",
      note: "Used to justify transparent governance patterns and auditable tooling practices.",
    },

    // Non-academic / institutional references (allowed + useful for your website inspiration)
    {
      type: "Institutional",
      author: "Goldman Sachs",
      title: "Sustainable Finance and Sustainability Reporting pages",
      publication: "Corporate website material, accessed 2025–2026.",
      note: "Interface and content inspiration for operational structure, sustainability sections, and public-facing narrative style.",
    },
    {
      type: "Institutional",
      author: "BlackRock",
      title: "Investment stewardship, sustainability, and organisational reporting pages",
      publication: "Corporate website material, accessed 2025–2026.",
      note: "Used as inspiration for how large financial institutions present governance, risk, and accountability claims publicly.",
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
            <p className="text-xs tracking-[0.22em] uppercase text-white/60">References</p>

            <h1 className="mt-6 text-balance text-4xl sm:text-6xl font-semibold tracking-[-0.04em]">
              Sources and frameworks
            </h1>

            <p className="mt-7 text-balance text-base sm:text-lg leading-relaxed text-zinc-200/90">
              This project is a fictional organisation, but it is grounded in real critical frameworks and real-world
              institutional patterns. Sources below include academic texts, peer-reviewed writing, and public corporate
              disclosures used as interface and communication references.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/insights/analysis"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm sm:text-base font-semibold text-black hover:bg-zinc-100 transition"
              >
                Read critical analysis <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/about/mission"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-7 py-3 text-sm sm:text-base font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
              >
                Mission and values <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-18 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs tracking-[0.22em] uppercase text-white/60">Bibliography</div>
          <h2 className="mt-4 text-balance text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">
            Academic and institutional sources
          </h2>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            Each source is included because it shaped an explicit part of the organisation’s design, governance, or
            technical positioning.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {references.map((r, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-white/20 transition">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-white/80">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs tracking-[0.22em] uppercase text-white/60">{r.type}</div>
                    <div className="mt-1 text-base font-semibold text-white">{r.title}</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-sm text-zinc-200/85 leading-relaxed">
                <div className="text-white/70">{r.author}</div>
                <div className="mt-1 text-white/55">{r.publication}</div>
              </div>

              {r.note ? (
                <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="text-xs tracking-[0.22em] uppercase text-white/60">Why it matters</div>
                  <p className="mt-2 text-sm text-zinc-200/85 leading-relaxed">{r.note}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-12 mx-auto max-w-4xl rounded-3xl border border-white/10 bg-black/30 p-8">
          <p className="text-xs tracking-[0.22em] uppercase text-white/60">Note</p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-200/85">
            Corporate sources listed here are used as examples of how financial institutions present sustainability,
            governance, and organisational identity in public-facing communication. They are not endorsements and they
            do not replace academic sources.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-7 py-3 text-sm sm:text-base font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
          >
            Back to home <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
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