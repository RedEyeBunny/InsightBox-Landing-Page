import { motion } from "framer-motion"
import { problemCards } from "../config/content"
import { AnimatedSection } from "./AnimatedSection"
import { useReducedMotion } from "../hooks/useReducedMotion"

export function ProblemSection() {
  const reduced = useReducedMotion()

  return (
    <section id="problem" className="bg-off-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-text-dark sm:text-4xl lg:text-5xl">
            Your saves are becoming a graveyard.
          </h2>
        </AnimatedSection>

        {/* Messy pile of cards */}
        <AnimatedSection delay={0.1} className="relative mx-auto mb-12 max-w-2xl">
          <div className="relative h-[280px] sm:h-[320px]">
            {problemCards.map((card, i) => (
              <motion.div
                key={card.label}
                className={`absolute flex items-center gap-3 rounded-xl border border-black/5 bg-white px-4 py-3 shadow-md ${card.color} bg-gradient-to-br`}
                style={{
                  top: `${(i % 3) * 18 + 5}%`,
                  left: `${(i % 2) * 15 + 5 + (i > 2 ? 10 : 0)}%`,
                  zIndex: i,
                  rotate: `${(i - 2.5) * 4}deg`,
                }}
                initial={reduced ? false : { opacity: 0, scale: 0.9 }}
                whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <span className="text-xl" aria-hidden="true">
                  {card.emoji}
                </span>
                <span className="text-sm font-medium text-text-dark">{card.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 flex justify-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-text-dark">247</p>
              <p className="text-sm text-text-muted">saved</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-violet">0</p>
              <p className="text-sm text-text-muted">revisited</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mx-auto max-w-xl text-center">
          <div className="space-y-4 text-base leading-relaxed text-text-muted sm:text-lg">
            <p>We save interesting things every day.</p>
            <p className="text-text-dark">
              A useful idea.
              <br />A business lesson.
              <br />A coding trick.
              <br />A book recommendation.
              <br />A workout.
              <br />A useful website.
            </p>
            <p className="font-medium text-text-dark">Then we forget where we saw it.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
