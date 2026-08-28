import { AnimatedSection } from "./AnimatedSection"
import { DownloadButton } from "./DownloadButton"

export function EarlyAccess() {
  return (
    <section id="early-access" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
            Help shape InsightBox.
          </h2>
          <p className="mb-8 text-base leading-relaxed text-text-muted sm:text-lg">
            InsightBox is still early. The first users will directly influence what
            gets built next.
          </p>
          <DownloadButton size="lg">Try InsightBox</DownloadButton>
        </AnimatedSection>

        {/* Placeholder for future testimonials */}
        <div className="mt-16 hidden" aria-hidden="true" data-testid="testimonials-placeholder">
          {/* Replace with real testimonials when available */}
        </div>
      </div>
    </section>
  )
}
