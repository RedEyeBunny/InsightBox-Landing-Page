import { siteConfig } from "../config/siteConfig"
import { Logo } from "./Logo"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-soft-gray bg-off-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-6">
            <li>
              <a href="#how-it-works" className="text-sm text-text-muted hover:text-text-dark">
                How it works
              </a>
            </li>
            <li>
              <a href="#features" className="text-sm text-text-muted hover:text-text-dark">
                Features
              </a>
            </li>
            <li>
              <a href="#download" className="text-sm text-text-muted hover:text-text-dark">
                Download
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {siteConfig.twitterUrl && (
            <a
              href={siteConfig.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted hover:text-text-dark"
            >
              X
            </a>
          )}
          {siteConfig.instagramUrl && (
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted hover:text-text-dark"
            >
              Instagram
            </a>
          )}
          {siteConfig.linkedinUrl && (
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted hover:text-text-dark"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-text-muted">
        &copy; {year} {siteConfig.name}. All rights reserved.
      </p>
    </footer>
  )
}
