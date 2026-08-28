import { Helmet } from "react-helmet-async"
import { getCanonicalUrl, siteConfig } from "./config/siteConfig"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { ProblemSection } from "./components/ProblemSection"
import { HowItWorks } from "./components/HowItWorks"
import { ProductShowcase } from "./components/ProductShowcase"
import { PlatformSection } from "./components/PlatformSection"
import { WhyInsightBox } from "./components/WhyInsightBox"
import { KnowledgeGraph } from "./components/KnowledgeGraph"
import { EarlyAccess } from "./components/EarlyAccess"
import { DownloadSection } from "./components/DownloadSection"
import { FinalCTA } from "./components/FinalCTA"
import { Footer } from "./components/Footer"
import { MobileStickyCTA } from "./components/MobileStickyCTA"

function App() {
  const canonicalUrl = getCanonicalUrl()
  const ogImage = `${canonicalUrl}/og-image.svg`

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{siteConfig.seo.title}</title>
        <meta name="description" content={siteConfig.seo.description} />
        <meta name="keywords" content={siteConfig.seo.keywords.join(", ")} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={siteConfig.seo.title} />
        <meta property="og:description" content={siteConfig.seo.description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content={siteConfig.name} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.seo.title} />
        <meta name="twitter:description" content={siteConfig.seo.description} />
        <meta name="twitter:image" content={ogImage} />
        {siteConfig.twitterUrl && <meta name="twitter:site" content={siteConfig.twitterUrl} />}
      </Helmet>

      <Navbar />
      <main className="pb-20 sm:pb-0">
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <ProductShowcase />
        <PlatformSection />
        <WhyInsightBox />
        <KnowledgeGraph />
        <EarlyAccess />
        <DownloadSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  )
}

export default App
