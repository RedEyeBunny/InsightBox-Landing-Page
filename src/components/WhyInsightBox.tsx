import { Brain, Layers, Search, Zap } from "lucide-react"
import { whyCards } from "../config/content"
import { AnimatedSection } from "./AnimatedSection"

const iconMap = {
  brain: Brain,
  layers: Layers,
  search: Search,
  zap: Zap,
}

export function WhyInsightBox() {
  return (
    <section id="why" className="bg-off-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-text-dark sm:text-4xl lg:text-5xl">
            The internet gives you information. InsightBox helps you keep it.
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyCards.map((card, i) => {
            const Icon = iconMap[card.icon]
            return (
              <AnimatedSection key={card.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-soft-gray bg-white p-6 transition-all hover:-translate-y-1 hover:border-violet/20 hover:shadow-lg hover:shadow-violet/5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet/10 transition-colors group-hover:bg-violet/15">
                    <Icon className="h-6 w-6 text-violet" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-text-dark">{card.title}</h3>
                  <p className="text-base leading-relaxed text-text-muted">{card.description}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
