/**
 * Editable content & product-truth configuration.
 *
 * IMPORTANT: Only list platforms and features that the current APK actually supports.
 * Update `supportedPlatforms` when new integrations ship.
 * FAQ answers marked with PLACEHOLDER need confirmation before launch.
 */

export type PlatformStatus = "supported" | "coming_soon"

export interface Platform {
  id: string
  name: string
  icon: "instagram" | "youtube" | "linkedin" | "twitter" | "pinterest" | "globe" | "share"
  status: PlatformStatus
}

/**
 * Edit this list to reflect actual APK platform support.
 * Set status to "supported" only for platforms verified in the current build.
 */
export const supportedPlatforms: Platform[] = [
  { id: "instagram", name: "Instagram", icon: "instagram", status: "supported" },
  { id: "youtube", name: "YouTube", icon: "youtube", status: "supported" },
  { id: "linkedin", name: "LinkedIn", icon: "linkedin", status: "supported" },
  { id: "twitter", name: "X / Twitter", icon: "twitter", status: "supported" },
  { id: "websites", name: "Websites", icon: "globe", status: "supported" },
  { id: "pinterest", name: "Pinterest", icon: "pinterest", status: "coming_soon" },
  { id: "other", name: "Other sources", icon: "share", status: "supported" },
]

export interface FAQItem {
  question: string
  /** Use "[PLACEHOLDER: ...]" for answers that need confirmation */
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    question: "What is InsightBox?",
    answer:
      "InsightBox is a personal knowledge inbox for the things you discover online. Share useful videos, posts and articles with the app — it extracts the important ideas and organises them so you can find them again when you actually need them.",
  },
  {
    question: "What can I save to InsightBox?",
    answer:
      "[PLACEHOLDER: List what the current APK actually accepts via the Android share sheet — e.g. Instagram Reels, YouTube links, web URLs. Update before launch.]",
  },
  {
    question: "Is InsightBox free?",
    answer:
      "[PLACEHOLDER: Confirm pricing model — e.g. 'InsightBox is free to try during early access.' Update before launch.]",
  },
  {
    question: "Where can I download the Android app?",
    answer:
      "Download the Android APK directly from this website using the Download buttons. Scan the QR code on the download section if you're on another device.",
  },
  {
    question: "Does InsightBox store the original content?",
    answer:
      "[PLACEHOLDER: Confirm storage behaviour — e.g. whether original media is saved, linked, or only metadata/insights are kept. Update before launch.]",
  },
  {
    question: "How does InsightBox extract useful information?",
    answer:
      "When you share content, InsightBox analyses it to identify key points, context and actionable takeaways — then presents them in a clean, structured card you can revisit later.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "[PLACEHOLDER: Confirm supported platforms for the current APK build and update the Supported Content section in content.ts. Do not publish until verified.]",
  },
]

export const whyCards = [
  {
    title: "Remember",
    description: "Stop losing useful ideas inside endless saved posts.",
    icon: "brain" as const,
  },
  {
    title: "Organise",
    description: "Turn scattered content into structured knowledge.",
    icon: "layers" as const,
  },
  {
    title: "Revisit",
    description: "Find useful information when you actually need it.",
    icon: "search" as const,
  },
  {
    title: "Act",
    description: "Turn useful content into actionable takeaways instead of passive consumption.",
    icon: "zap" as const,
  },
]

export const knowledgeGraphNodes = [
  "AI",
  "Startups",
  "Python",
  "Marketing",
  "Product",
  "Business",
  "Psychology",
]

export const problemCards = [
  { label: "Instagram Reel", emoji: "📸", color: "from-pink-500/20 to-purple-500/20" },
  { label: "YouTube Short", emoji: "▶️", color: "from-red-500/20 to-orange-500/20" },
  { label: "LinkedIn post", emoji: "💼", color: "from-blue-500/20 to-cyan-500/20" },
  { label: "Screenshot", emoji: "🖼️", color: "from-gray-500/20 to-slate-500/20" },
  { label: "Article", emoji: "📰", color: "from-amber-500/20 to-yellow-500/20" },
  { label: "Tweet / thread", emoji: "💬", color: "from-sky-500/20 to-blue-500/20" },
]

export const floatingTags = [
  "3 things worth remembering",
  "AI Engineering",
  "Business",
  "Startup Ideas",
]
