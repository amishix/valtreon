"use client"

import Link from "next/link"
import { GeometricLogo } from "./geometric-logo"
import { useEffect, useRef, useState } from "react"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [aboutOpen, setAboutOpen] = useState(false)
  const [insightsOpen, setInsightsOpen] = useState(false)

  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const [mobileInsightsOpen, setMobileInsightsOpen] = useState(false)

  const aboutRef = useRef(null)
  const insightsRef = useRef(null)

  useEffect(() => {
    function onDocClick(e) {
      const t = e.target
      if (aboutRef.current && !aboutRef.current.contains(t)) setAboutOpen(false)
      if (insightsRef.current && !insightsRef.current.contains(t)) setInsightsOpen(false)
    }
    document.addEventListener("mousedown", onDocClick)
    return () => document.removeEventListener("mousedown", onDocClick)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileAboutOpen(false)
      setMobileInsightsOpen(false)
    }
  }, [mobileMenuOpen])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <GeometricLogo />
            <span className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
              Valtreon
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* About dropdown */}
            <div className="relative" ref={aboutRef}>
              <button
                type="button"
                onClick={() => {
                  setAboutOpen((v) => !v)
                  setInsightsOpen(false)
                }}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-all"
              >
                About
                <ChevronDown className={`h-4 w-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
              </button>

              {aboutOpen ? (
                <div className="absolute left-0 mt-3 w-72 rounded-2xl border border-white/10 bg-zinc-950/95 shadow-xl overflow-hidden">
                  <div className="p-2">
                    <DesktopItem
                      href="/about/mission"
                      title="Mission and values"
                      desc="Why we exist and how we define responsible outcomes"
                      onClick={() => setAboutOpen(false)}
                    />
                    <DesktopItem
                      href="/about/business"
                      title="Business model"
                      desc="How we generate revenue without breaking trust"
                      onClick={() => setAboutOpen(false)}
                    />
                    <DesktopItem
                      href="/about/people"
                      title="People and culture"
                      desc="Teams, oversight, and how decisions get challenged"
                      onClick={() => setAboutOpen(false)}
                    />
                    <DesktopItem
                      href="/about/history-evolution"
                      title="History and evolution"
                      desc="How the organisation formed and matured over time"
                      onClick={() => setAboutOpen(false)}
                    />
                    <DesktopItem
                      href="/about/authors"
                      title="About the author"
                      desc="Personal values, goals, and why this project matters"
                      onClick={() => setAboutOpen(false)}
                    />
                  </div>
                </div>
              ) : null}
            </div>

            <Link href="/products" className="text-sm font-medium text-white/80 hover:text-white transition-all">
              Products
            </Link>

            {/* Insights dropdown */}
            <div className="relative" ref={insightsRef}>
              <button
                type="button"
                onClick={() => {
                  setInsightsOpen((v) => !v)
                  setAboutOpen(false)
                }}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-all"
              >
                Insights
                <ChevronDown className={`h-4 w-4 transition-transform ${insightsOpen ? "rotate-180" : ""}`} />
              </button>

              {insightsOpen ? (
                <div className="absolute left-0 mt-3 w-72 rounded-2xl border border-white/10 bg-zinc-950/95 shadow-xl overflow-hidden">
                  <div className="p-2">
                    <DesktopItem
                      href="/insights/operations"
                      title="Operations"
                      desc="Structure, scale, governance, and delivery model"
                      onClick={() => setInsightsOpen(false)}
                    />
                    <DesktopItem
                      href="/insights/analysis"
                      title="Critical analysis"
                      desc="Ethics, sustainability, access, and verification limits"
                      onClick={() => setInsightsOpen(false)}
                    />
                  </div>
                </div>
              ) : null}
            </div>

            <Link href="/careers" className="text-sm font-medium text-white/80 hover:text-white transition-all">
              Careers
            </Link>

            <Link href="/references" className="text-sm font-medium text-white/80 hover:text-white transition-all">
              References
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2.5 text-white hover:bg-white/10 transition"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileMenuOpen ? (
        <div className="md:hidden border-t border-white/10 bg-zinc-950/95 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-6 py-6 space-y-3">
            <MobileTopLink href="/" label="Home" onClick={() => setMobileMenuOpen(false)} />

            {/* About accordion */}
            <button
              type="button"
              onClick={() => setMobileAboutOpen((v) => !v)}
              className="w-full flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left"
            >
              <span className="text-lg font-semibold text-white">About</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileAboutOpen ? (
              <div className="pl-2 space-y-2">
                <MobileSubLink href="/about/mission" label="Mission and values" onClick={() => setMobileMenuOpen(false)} />
                <MobileSubLink href="/about/business" label="Business model" onClick={() => setMobileMenuOpen(false)} />
                <MobileSubLink href="/about/people" label="People and culture" onClick={() => setMobileMenuOpen(false)} />
                <MobileSubLink
                  href="/about/history-evolution"
                  label="History and evolution"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <MobileSubLink href="/about/authors" label="About the author" onClick={() => setMobileMenuOpen(false)} />
              </div>
            ) : null}

            <MobileTopLink href="/products" label="Products" onClick={() => setMobileMenuOpen(false)} />
            <MobileTopLink href="/careers" label="Careers" onClick={() => setMobileMenuOpen(false)} />

            {/* Insights accordion */}
            <button
              type="button"
              onClick={() => setMobileInsightsOpen((v) => !v)}
              className="w-full flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left"
            >
              <span className="text-lg font-semibold text-white">Insights</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${mobileInsightsOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileInsightsOpen ? (
              <div className="pl-2 space-y-2">
                <MobileSubLink href="/insights/operations" label="Operations" onClick={() => setMobileMenuOpen(false)} />
                <MobileSubLink href="/insights/analysis" label="Critical analysis" onClick={() => setMobileMenuOpen(false)} />
              </div>
            ) : null}

            <MobileTopLink href="/references" label="References" onClick={() => setMobileMenuOpen(false)} />

            <div className="pt-6 mt-6 border-t border-white/10 text-xs text-white/60">
              Client login and investor relations are not implemented in this coursework build.
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  )
}

/* ---------------------------- helpers ---------------------------- */

function DesktopItem({ href, title, desc, onClick }) {
  return (
    <Link href={href} onClick={onClick} className="group block rounded-xl px-3 py-3 hover:bg-white/5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-white/90">{title}</span>
        <ChevronRight className="h-4 w-4 text-white/40" />
      </div>
      <div className="mt-1 text-xs text-white/55">{desc}</div>
    </Link>
  )
}

function MobileTopLink({ href, label, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
    >
      <span className="text-lg font-semibold text-white">{label}</span>
      <ChevronRight className="h-5 w-5 text-white/60" />
    </Link>
  )
}

function MobileSubLink({ href, label, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex justify-between rounded-2xl border border-white/10 bg-black/30 px-5 py-3"
    >
      <span className="text-sm font-medium text-white/85">{label}</span>
      <ChevronRight className="h-4 w-4 text-white/50" />
    </Link>
  )
}