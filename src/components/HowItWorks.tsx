import { Share2, Sparkles, Library } from "lucide-react"
import { AnimatedSection } from "./AnimatedSection"

const steps = [
  {
    icon: Share2,
    title: "Save it",
    description: "Share useful content with InsightBox.",
  },
  {
    icon: Sparkles,
    title: "Extract the insight",
    description: "InsightBox identifies the important ideas, context and useful takeaways.",
  },
  {
    icon: Library,
    title: "Keep the knowledge",
    description: "Find useful information again when you actually need it.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-14 text-center sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-text-dark sm:text-4xl lg:text-5xl">
            From &ldquo;I saw something useful&rdquo; to &ldquo;I know where it is.&rdquo;
          </h2>
        </AnimatedSection>

        <div className="relative grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Connecting line — desktop */}
          <div
            className="absolute top-10 hidden h-0.5 bg-gradient-to-r from-violet/20 via-violet/40 to-violet/20 md:block"
            style={{ left: "16.67%", right: "16.67%" }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.1} className="relative text-center">
              <div className="relative z-10 mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-violet/10">
                <step.icon className="h-8 w-8 text-violet" aria-hidden="true" />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-violet text-xs font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-text-dark">{step.title}</h3>
              <p className="text-base leading-relaxed text-text-muted">{step.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
