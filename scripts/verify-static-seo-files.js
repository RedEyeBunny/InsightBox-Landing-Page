import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const dist = path.join(root, "dist")

const requiredFiles = [
  "index.html",
  "sitemap.xml",
  "robots.txt",
  "blog/index.html",
  "blog/short-form-content-learning/index.html",
  "blog/information-overload/index.html",
]

for (const file of requiredFiles) {
  const fullPath = path.join(dist, file)
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Missing ${file} in dist. GitHub Pages would not deploy it.`)
  }
}

const sitemap = fs.readFileSync(path.join(dist, "sitemap.xml"), "utf8")
const sitemapStart = sitemap.trimStart()

if (/<html[\s>]|<head[\s>]|<body[\s>]|<div id="root"/i.test(sitemap)) {
  throw new Error("dist/sitemap.xml contains HTML. Google Search Console will reject it.")
}

if (!sitemapStart.startsWith("<?xml") && !sitemapStart.startsWith("<urlset")) {
  throw new Error("dist/sitemap.xml must start with an XML declaration or <urlset>.")
}

if (!sitemap.includes("http://www.sitemaps.org/schemas/sitemap/0.9")) {
  throw new Error("dist/sitemap.xml is missing the official sitemap namespace.")
}

if (!sitemap.includes("<loc>https://useinsightbox.com/</loc>")) {
  throw new Error("dist/sitemap.xml is missing the homepage URL on a single line.")
}

console.log("Verified dist sitemap.xml is XML, not HTML.")
