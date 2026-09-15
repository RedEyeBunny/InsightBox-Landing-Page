/**
 * Site-wide configuration — update these values before launch.
 *
 * apkDownloadUrl: Direct link to the Android APK file.
 *   Leave empty during development — CTAs will show a placeholder state.
 *
 * url: Canonical site URL (e.g. "https://insightbox.app").
 *   Used for Open Graph tags and canonical link.
 */

export const siteConfig = {
  name: "InsightBox",
  tagline: "Turn the Internet Into Your Knowledge Library",

  /** Canonical site URL — set before launch */
  url: "https://useinsightbox.com",

  /** Direct APK download — Expo artifact URL (not the build page) */
  apkDownloadUrl:
    "https://expo.dev/artifacts/eas/DOMqhSMjmlczz3YJaAXRVb4ZlUgllmCuZfEbzBYFYEI.apk",

  /** Static QR code image — leave empty to auto-generate a crisp QR from apkDownloadUrl */
  installQrCodeImage: "",

  /** Social / contact links — leave empty to hide */
  instagramUrl: "",
  linkedinUrl: "",
  twitterUrl: "",
  contactEmail: "",

  /** SEO */
  seo: {
    title: "InsightBox — Remember What You Save From Social Media",
    description:
      "Turn useful things you discover on social media into organized, searchable knowledge you can come back to later.",
    keywords: [
      "knowledge management app",
      "save useful content",
      "organize saved content",
      "personal knowledge app",
      "save Instagram reels",
      "remember useful content",
    ],
  },
} as const

export function hasApkDownloadUrl(): boolean {
  return siteConfig.apkDownloadUrl.trim().length > 0
}

export function isDirectApkDownload(): boolean {
  return siteConfig.apkDownloadUrl.trim().toLowerCase().endsWith(".apk")
}

export function getCanonicalUrl(): string {
  return siteConfig.url.trim() || "https://insightbox.app"
}
