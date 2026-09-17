import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { blogPosts } from "../content/blog"
import { getCanonicalUrl, siteConfig } from "../config/siteConfig"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

const pageTitle = "InsightBox Blog — Social Media, Learning and Knowledge"
const pageDescription =
  "Articles from InsightBox on social media, learning, and turning saved information into knowledge you can actually use."

export function BlogIndex() {
  const canonicalUrl = `${getCanonicalUrl()}/blog/`
  const ogImage = `${getCanonicalUrl()}/og-image.svg`

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content={siteConfig.name} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <Navbar />
      <main>
        <section className="bg-navy-deep pt-24 pb-16 sm:pt-28 sm:pb-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              InsightBox Blog
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              {pageDescription}
            </p>
          </div>
        </section>

        <section className="bg-off-white py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <ul className="space-y-6">
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}/`}
                    className="block rounded-2xl border border-soft-gray bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-violet/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet"
                  >
                    <time className="text-sm text-text-muted" dateTime={post.date}>
                      {post.date}
                    </time>
                    <h2 className="mt-2 text-xl font-bold tracking-tight text-text-dark sm:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-text-muted">{post.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
