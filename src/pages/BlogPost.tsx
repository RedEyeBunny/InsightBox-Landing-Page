import { Link, useParams } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { getPostBySlug } from "../content/blog"
import { getCanonicalUrl, siteConfig } from "../config/siteConfig"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export function BlogPost() {
  const { slug = "" } = useParams()
  const post = getPostBySlug(slug)
  const siteUrl = getCanonicalUrl()
  const ogImage = `${siteUrl}/og-image.svg`

  if (!post) {
    return (
      <>
        <Helmet>
          <html lang="en" />
          <title>Article not found | InsightBox</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <Navbar />
        <main className="bg-off-white">
          <section className="bg-navy-deep pt-24 pb-16 sm:pt-28">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Article not found
              </h1>
            </div>
          </section>
          <section className="py-16">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <Link to="/blog/" className="font-semibold text-violet hover:text-violet-bright">
                Back to blog
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  const pageTitle = `${post.title} | InsightBox`
  const canonicalUrl = `${siteUrl}/blog/${post.slug}/`
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url: canonicalUrl,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "InsightBox",
    },
    publisher: {
      "@type": "Organization",
      name: "InsightBox",
      url: `${siteUrl}/`,
    },
  }
  const publishedLabel = new Date(`${post.date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{pageTitle}</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content={siteConfig.name} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      </Helmet>

      <Navbar />
      <main>
        <section className="bg-navy-deep pt-24 pb-16 sm:pt-28 sm:pb-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link
              to="/blog/"
              className="text-sm font-semibold text-violet-bright hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Back to blog
            </Link>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <time className="mt-4 block text-sm text-white/50" dateTime={post.date}>
              {publishedLabel}
            </time>
          </div>
        </section>

        <article className="bg-off-white py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">{post.body}</div>
        </article>
      </main>
      <Footer />
    </>
  )
}
