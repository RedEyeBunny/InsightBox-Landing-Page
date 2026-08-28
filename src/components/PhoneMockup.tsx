import { motion } from "framer-motion"
import { floatingTags } from "../config/content"
import { useReducedMotion } from "../hooks/useReducedMotion"

export function PhoneMockup() {
  const reduced = useReducedMotion()

  return (
    <div className="relative mx-auto w-full max-w-[320px] lg:max-w-[360px]" aria-hidden="true">
      {/* Violet glow */}
      <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-violet/20 blur-3xl" />

      {/* Floating tags */}
      {floatingTags.map((tag, i) => (
        <motion.div
          key={tag}
          className="absolute z-10 hidden rounded-full border border-white/10 bg-navy-dark/90 px-3 py-1.5 text-xs font-medium text-white/80 shadow-lg backdrop-blur-sm sm:block"
          style={{
            top: `${[8, 35, 60, 20][i]}%`,
            left: i % 2 === 0 ? "-18%" : "auto",
            right: i % 2 === 1 ? "-15%" : "auto",
          }}
          animate={
            reduced
              ? undefined
              : {
                  y: [0, -6, 0],
                }
          }
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          {tag}
        </motion.div>
      ))}

      {/* Phone frame */}
      <motion.div
        className="relative mx-auto"
        animate={reduced ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="rounded-[2.5rem] border-[3px] border-white/10 bg-navy-dark p-2 shadow-2xl shadow-black/40">
          <div className="overflow-hidden rounded-[2rem] bg-navy-deep">
            {/* Status bar */}
            <div className="flex items-center justify-between px-5 py-2 text-[10px] text-white/50">
              <span>9:41</span>
              <div className="flex gap-1">
                <span className="h-2 w-3 rounded-sm bg-white/30" />
                <span className="h-2 w-3 rounded-sm bg-white/30" />
              </div>
            </div>

            {/* App content */}
            <div className="px-4 pb-6 pt-2">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-violet/30" />
                <div>
                  <p className="text-[10px] text-mint">Saved from Instagram</p>
                  <p className="text-xs font-medium text-white/60">2 hours ago</p>
                </div>
              </div>

              <h3 className="mb-3 text-sm font-bold leading-snug text-white">
                5 lessons from building a startup while working full-time
              </h3>

              <div className="mb-3 rounded-xl bg-white/5 p-3">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-violet-bright">
                  Key Points
                </p>
                <ul className="space-y-1.5 text-[11px] leading-relaxed text-white/70">
                  <li className="flex gap-1.5">
                    <span className="text-mint">•</span>
                    Most products fail because distribution is ignored.
                  </li>
                  <li className="flex gap-1.5">
                    <span className="text-mint">•</span>
                    Build the audience before building complicated features.
                  </li>
                  <li className="flex gap-1.5">
                    <span className="text-mint">•</span>
                    Small feedback loops beat large launches.
                  </li>
                </ul>
              </div>

              <div className="mb-3 rounded-xl border border-mint/20 bg-mint/5 p-3">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-mint">
                  Actionable Takeaway
                </p>
                <p className="text-[11px] leading-relaxed text-white/80">
                  Talk to 10 potential users before adding another feature.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {["Startup", "Product", "Marketing"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-violet/20 px-2.5 py-0.5 text-[10px] font-medium text-violet-bright"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Phone notch */}
        <div className="absolute left-1/2 top-3 h-5 w-24 -translate-x-1/2 rounded-full bg-navy-deep" />
      </motion.div>
    </div>
  )
}
