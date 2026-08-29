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
  url: "",

  /** Direct APK download — Expo artifact URL (not the build page) */
  apkDownloadUrl:
    "https://expo.dev/artifacts/eas/92dfe77d-f98e-4a18-9b23-4d01950d5b69.apk",

  /** Static QR code image — leave empty to auto-generate a crisp QR from apkDownloadUrl */
  installQrCodeImage: "",

  /** Social / contact links — leave empty to hide */
  instagramUrl: "",
  linkedinUrl: "",
  twitterUrl: "",
  contactEmail: "",

  /** SEO */
  seo: {
    title: "InsightBox — Turn the Internet Into Your Knowledge Library",
    description:
      "InsightBox helps you turn useful videos, posts and online discoveries into organised knowledge you can actually find and use again.",
    keywords: [
      "knowledge management app",
      "save useful content",
      "organise saved content",
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
