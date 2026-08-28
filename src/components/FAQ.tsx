import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { faqItems } from "../config/content"
import { AnimatedSection } from "./AnimatedSection"

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  const isPlaceholder = answer.includes("[PLACEHOLDER")

  return (
    <div className="border-b border-soft-gray">
      <h3>
        <button
          type="button"
          className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet rounded"
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          <span className="text-base font-semibold text-text-dark sm:text-lg">{question}</span>
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}
        role="region"
        aria-hidden={!isOpen}
      >
        <div className="overflow-hidden">
          <p
            className={`text-base leading-relaxed ${isPlaceholder ? "text-text-muted italic" : "text-text-muted"}`}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-off-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10 text-center sm:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
            Frequently asked questions
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="rounded-2xl border border-soft-gray bg-white px-6">
            {faqItems.map((item, i) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
