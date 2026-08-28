import { ChevronDown } from "lucide-react"
import { AnimatedSection } from "./AnimatedSection"
import { DownloadButton } from "./DownloadButton"
import { PhoneMockup } from "./PhoneMockup"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-navy-deep pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28"
    >
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4 rounded-full bg-violet/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <div className="mb-6 inline-flex items-center rounded-full border border-violet/30 bg-violet/10 px-4 py-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-violet-bright">
                Turn the internet into your knowledge library
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[4.5rem] lg:leading-[1.05]">
              Stop saving things you&apos;ll never find again.
            </h1>

            <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/70 sm:text-xl">
              InsightBox turns useful videos, posts and discoveries into organised
              knowledge you can actually come back to.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <DownloadButton size="lg" fullWidth className="sm:w-auto">
                Download InsightBox
              </DownloadButton>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-1 rounded-xl border border-white/20 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:w-auto"
              >
                See how it works
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <p className="mt-4 text-sm text-white/40">Android APK • Free to try</p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
