import { motion } from "framer-motion"
import { knowledgeGraphNodes } from "../config/content"
import { AnimatedSection } from "./AnimatedSection"
import { useReducedMotion } from "../hooks/useReducedMotion"

const nodePositions = [
  { x: 50, y: 20 },
  { x: 20, y: 45 },
  { x: 80, y: 40 },
  { x: 35, y: 70 },
  { x: 65, y: 75 },
  { x: 50, y: 50 },
  { x: 75, y: 60 },
]

const connections: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 5],
  [1, 3],
  [1, 5],
  [2, 6],
  [2, 5],
  [3, 4],
  [3, 5],
  [4, 6],
  [5, 6],
]

export function KnowledgeGraph() {
  const reduced = useReducedMotion()

  return (
    <section id="vision" className="relative overflow-hidden bg-navy-dark py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center sm:mb-16">
          <span className="mb-4 inline-block rounded-full border border-violet/30 bg-violet/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-bright">
            The vision
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            One useful thing leads to another.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            InsightBox is designed to grow from a collection of saved content into a
            connected map of the things you actually care about.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="relative mx-auto aspect-[16/10] max-w-3xl overflow-hidden rounded-2xl border border-white/5 bg-navy-deep/50">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              {connections.map(([from, to], i) => {
                const a = nodePositions[from]
                const b = nodePositions[to]
                return (
                  <motion.line
                    key={`${from}-${to}`}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke="rgba(124, 92, 255, 0.25)"
                    strokeWidth="0.3"
                    initial={reduced ? undefined : { pathLength: 0, opacity: 0 }}
                    whileInView={reduced ? undefined : { pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.8 }}
                  />
                )
              })}
            </svg>

            {knowledgeGraphNodes.map((label, i) => {
              const pos = nodePositions[i]
              return (
                <motion.div
                  key={label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                  animate={
                    reduced
                      ? undefined
                      : {
                          y: [0, -3, 0],
                        }
                  }
                  transition={{
                    duration: 3 + i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                >
                  <div className="rounded-full border border-violet/30 bg-navy-deep/90 px-3 py-1.5 text-xs font-medium text-white/80 shadow-lg backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
                    {label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
