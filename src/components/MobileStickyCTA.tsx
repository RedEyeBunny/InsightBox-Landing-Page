import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useScrollPastHero } from "../hooks/useScrollPastHero"
import { DownloadButton } from "./DownloadButton"

export function MobileStickyCTA() {
  const pastHero = useScrollPastHero(500)

  return (
    <AnimatePresence>
      {pastHero && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy-deep/95 p-3 backdrop-blur-lg sm:hidden"
        >
          <DownloadButton fullWidth size="md" showIcon={false}>
            <>
              Get InsightBox
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </>
          </DownloadButton>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
