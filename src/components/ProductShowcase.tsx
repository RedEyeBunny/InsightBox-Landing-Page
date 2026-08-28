import { AnimatedSection } from "./AnimatedSection"
import { DownloadButton } from "./DownloadButton"

export function ProductShowcase() {
  return (
    <section id="features" className="bg-off-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-text-dark sm:text-4xl lg:text-5xl">
            Not another summary. A knowledge layer.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-soft-gray bg-white shadow-xl shadow-black/5">
            {/* App header */}
            <div className="flex items-center gap-3 border-b border-soft-gray px-6 py-4">
              <div className="h-10 w-10 rounded-xl bg-violet/15" />
              <div>
                <p className="text-xs font-medium text-mint">InsightBox</p>
                <p className="text-sm text-text-muted">Saved from YouTube</p>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="mb-6 text-xl font-bold leading-snug text-text-dark sm:text-2xl">
                5 lessons from building a startup while working full-time
              </h3>

              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-violet">
                  Key Points
                </h4>
                <ul className="space-y-2.5 text-base leading-relaxed text-text-muted">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" aria-hidden="true" />
                    Most products fail because distribution is ignored.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" aria-hidden="true" />
                    Build the audience before building complicated features.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" aria-hidden="true" />
                    Small feedback loops beat large launches.
                  </li>
                </ul>
              </div>

              <div className="mb-6 rounded-xl border border-mint/30 bg-mint/5 p-5">
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-mint">
                  Actionable Takeaway
                </h4>
                <p className="text-base font-medium text-text-dark">
                  Talk to 10 potential users before adding another feature.
                </p>
              </div>

              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
                  Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Startup", "Product", "Marketing"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-violet/10 px-4 py-1.5 text-sm font-medium text-violet"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-10 text-center">
          <DownloadButton size="lg">Download InsightBox</DownloadButton>
        </AnimatedSection>
      </div>
    </section>
  )
}
