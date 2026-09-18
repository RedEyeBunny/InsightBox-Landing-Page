import type { ReactNode } from "react"
import { ShortFormContentLearningArticle } from "./articles/ShortFormContentLearning"
import { InformationOverloadArticle } from "./articles/InformationOverload"

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  body: ReactNode
}

export const blogPosts: BlogPost[] = [
  {
    slug: "information-overload",
    title: "Information Overload: How to Consume Less and Remember More",
    description:
      "Practical ways to reduce information overload, decide what is worth keeping, and make useful information easier to remember and use.",
    date: "2026-09-18",
    body: <InformationOverloadArticle />,
  },
  {
    slug: "short-form-content-learning",
    title: "Short-Form Content, Learning and Why Saving Information Isn't Useful Enough",
    description:
      "Why saving useful social-media content isn't enough, and why remembering, organizing, and retrieving what matters is more important than simply bookmarking it.",
    date: "2026-09-17",
    body: <ShortFormContentLearningArticle />,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  const normalized = slug.replace(/\/+$/, "")
  return blogPosts.find((post) => post.slug === normalized)
}

export function getBlogPrerenderPaths(): string[] {
  return ["/blog/", ...blogPosts.map((post) => `/blog/${post.slug}/`)]
}
