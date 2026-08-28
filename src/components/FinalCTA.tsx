import { AnimatedSection } from "./AnimatedSection"
import { DownloadButton } from "./DownloadButton"

export function FinalCTA() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-text-dark sm:text-4xl lg:text-5xl">
            Stop collecting content. Start collecting knowledge.
          </h2>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <DownloadButton size="lg" fullWidth className="sm:w-auto">
              Download InsightBox
            </DownloadButton>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-xl border border-soft-gray px-8 py-4 text-base font-semibold text-text-dark transition-colors hover:bg-off-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet sm:w-auto"
            >
              Learn how it works
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
