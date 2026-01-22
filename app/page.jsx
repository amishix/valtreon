"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import {
  ArrowRight,
  ShieldCheck,
  LineChart,
  Globe2,
  Building2,
  Users,
  Newspaper,
  Sparkles,
  Lock,
  FileSearch,
  ArrowUpRight,
} from "lucide-react"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const highlights = useMemo(
    () => [
      {
        icon: <ShieldCheck className="h-5 w-5" />,
        title: "Verification first",
        body:
          "Bhramavora turns sustainability and impact claims into traceable evidence. Outputs stay contestable, not cosmetic.",
        href: "/products",
        cta: "Explore products",
      },
      {
        icon: <LineChart className="h-5 w-5" />,
        title: "Decision quality",
        body:
          "We help institutions reduce hidden risk by linking claims, evidence, and outcomes across time, not just reporting cycles.",
        href: "/about/business",
        cta: "How it works commercially",
      },
      {
        icon: <Globe2 className="h-5 w-5" />,
        title: "Global operations",
        body:
          "A distributed structure across London, Nairobi, and Bangalore to reduce bias and keep verification grounded in context.",
        href: "/insights/operations",
        cta: "Operations overview",
      },
    ],
    [],
  )

  const quickFacts = useMemo(
    () => [
      { label: "Annual revenue", value: "£55m", icon: <Building2 className="h-4 w-4" /> },
      { label: "Team size", value: "310", icon: <Users className="h-4 w-4" /> },
      { label: "Global nodes", value: "3", icon: <Globe2 className="h-4 w-4" /> },
      { label: "Audit outputs", value: "Traceable", icon: <Lock className="h-4 w-4" /> },
    ],
    [],
  )

  const updates = useMemo(
    () => [
      {
        label: "Market note",
        title: "Why weak ESG evidence becomes financial risk",
        body:
          "Mispriced climate and labour risks reappear as volatility. Verification is not charity, it is risk control.",
        tag: "Risk",
        href: "/insights/analysis",
      },
      {
        label: "Platform",
        title: "Bhramavora evidence pipeline now supports third party attestations",
        body:
          "Projects can attach provenance, reviewer notes, and decision history to strengthen audit readiness.",
        tag: "Product",
        href: "/products",
      },
      {
        label: "Portfolio",
        title: "New eligibility screen for supply chain fragility indicators",
        body: "We flag concentration risk and opaque subcontracting patterns before capital is allocated.",
        tag: "Operations",
        href: "/insights/operations",
      },
    ],
    [],
  )

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <HeroBackdrop />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-14 sm:pt-24 sm:pb-18">
          <div
            className={[
              "mx-auto max-w-5xl",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              "transition-all duration-700 ease-out",
            ].join(" ")}
          >
            <div className="text-xs tracking-[0.22em] uppercase text-white/60">Valtreon</div>

            <h1 className="mt-5 text-balance text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.04em]">
              Trust infrastructure for financial decisions
            </h1>

            <p className="mt-6 max-w-3xl text-balance text-base sm:text-lg leading-relaxed text-zinc-200/90">
              We are a mission first investment and verification firm. We help institutions make accountable decisions by
              linking claims to evidence, keeping outcomes reviewable, and pricing long term risk that traditional models
              often ignore.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/about/mission"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm sm:text-base font-semibold text-black hover:bg-zinc-100 transition"
              >
                About Valtreon <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-7 py-3 text-sm sm:text-base font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
              >
                Bhramavora products <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/insights/analysis"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-7 py-3 text-sm sm:text-base font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
              >
                Insights <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {quickFacts.map((f, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-semibold">{f.value}</div>
                    <div className="text-white/70">{f.icon}</div>
                  </div>
                  <div className="mt-1 text-[11px] tracking-[0.18em] uppercase text-white/60">{f.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <div className="flex items-center gap-3">
                <FileSearch className="h-5 w-5 text-white/70" />
                <div className="text-sm text-zinc-200/90">Designed with an audit trail mindset and FCA style scrutiny</div>
              </div>
              <Link
                href="/references"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
              >
                References <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* IMAGE PANEL (uses /public/homepage.JPG) */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
              <div className="relative h-[260px] sm:h-[320px]">
                {/* Your real image */}
                <Image
                  src="/homepage.JPG"
                  alt="Valtreon homepage hero visual"
                  fill
                  priority
                  className="object-cover"
                />

                {/* Keep the premium overlays for readability */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.85))]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.22),transparent_55%),radial-gradient(circle_at_75%_40%,rgba(255,255,255,0.08),transparent_60%)]" />
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "84px 84px",
                  }}
                />

                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                  <div className="flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-white/60">
                    <Sparkles className="h-4 w-4" />
                    Featured focus
                  </div>
                  <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-[-0.02em]">
                    Evidence led finance for unstable futures
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-zinc-200/90 max-w-2xl leading-relaxed">
                    Bad financial decisions do not just lose money. They lock in unsafe futures through ecological disruption,
                    supply chain fragility, and social instability. Valtreon helps clients see those risks earlier, and act with
                    accountable evidence.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-8">
              <div className="text-xs tracking-[0.22em] uppercase text-white/60">In brief</div>
              <div className="mt-5 space-y-5">
                <MiniItem
                  title="What we do"
                  body="We provide verification services and investment capability under one accountable structure."
                  href="/about/mission"
                />
                <MiniItem
                  title="Who we serve"
                  body="Institutional investors, regulators, public bodies, and organisations that need evidence backed reporting."
                  href="/products"
                />
                <MiniItem
                  title="How we operate"
                  body="Distributed global nodes with oversight mechanisms designed to resist institutional capture."
                  href="/insights/operations"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs tracking-[0.22em] uppercase text-white/60">What we do</div>
          <h2 className="mt-4 text-balance text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">
            A firm built around verification
          </h2>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            Traditional finance optimises for growth and speed. We optimise for decision quality, traceability, and outcomes
            that can stand up to scrutiny.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {highlights.map((h, idx) => (
            <div
              key={idx}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-white/20 hover:bg-white/[0.06] transition"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-blue-200/80">
                {h.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold">{h.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-200/85">{h.body}</p>

              <Link
                href={h.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
              >
                {h.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* LATEST UPDATES */}
      <section className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="text-xs tracking-[0.22em] uppercase text-white/60">Updates</div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">
                Latest notes and platform updates
              </h2>
              <p className="mt-3 text-zinc-300 max-w-2xl leading-relaxed">
                Short internal style updates to make the site feel like a real firm. These are fictional but aligned with
                what an investment and verification firm would publish.
              </p>
            </div>

            <Link
              href="/insights/analysis"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
            >
              View insights <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {updates.map((u, i) => (
              <article
                key={i}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 hover:border-white/20 hover:bg-white/[0.06] transition"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-white/60">
                    <Newspaper className="h-4 w-4" />
                    {u.label}
                  </div>
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
                    {u.tag}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold leading-snug">{u.title}</h3>
                <p className="mt-3 text-sm text-zinc-200/85 leading-relaxed">{u.body}</p>

                <Link
                  href={u.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
                >
                  Read more <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div>
                <div className="text-xs tracking-[0.22em] uppercase text-white/60">Next step</div>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em]">
                  Explore the firm structure and governance
                </h3>
                <p className="mt-3 text-zinc-200/85 leading-relaxed max-w-2xl">
                  If you want it to feel like Goldman Sachs, the About section should read like a firm overview with subpages
                  for mission, business model, and people. The Insights section should host analysis and operations. Products
                  stays separate as the platform offering.
                </p>
              </div>

              <div className="flex gap-3">
                <Link
                  href="/about/mission"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-100 transition"
                >
                  About us <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 hover:border-white/30 transition"
                >
                  Products <ArrowRight className="h-4 w-4" />
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

/* ----------------------------- small UI parts ------------------------------ */

function HeroBackdrop() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.18),transparent_45%),radial-gradient(circle_at_75%_35%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "92px 92px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
    </div>
  )
}

function MiniItem({ title, body, href }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
      <div className="text-sm font-semibold">{title}</div>
      <p className="mt-2 text-sm text-zinc-200/85 leading-relaxed">{body}</p>
      <Link href={href} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white">
        Learn more <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  )
}