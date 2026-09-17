import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { createServer } from "vite"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")
const dist = path.join(root, "dist")
const templatePath = path.join(dist, "index.html")

if (!fs.existsSync(templatePath)) {
  throw new Error("dist/index.html is missing. Run vite build before prerender.")
}

const template = fs.readFileSync(templatePath, "utf-8")

function urlToFile(url) {
  if (url === "/") return path.join(dist, "index.html")
  const relative = url.replace(/^\//, "").replace(/\/$/, "")
  return path.join(dist, relative, "index.html")
}

function splitHeadTags(appHtml) {
  const tags = []
  let rest = appHtml
  const tagRe =
    /^(?:<title\b[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*\/?>|<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>)/i

  while (true) {
    const match = rest.match(tagRe)
    if (!match) break
    tags.push(match[0])
    rest = rest.slice(match[0].length)
  }

  return { tags: tags.join("\n    "), body: rest }
}

function stripPageSpecificHeadTags(page) {
  return page
    .replace(/<title\b[^>]*>[\s\S]*?<\/title>\s*/i, "")
    .replace(/<meta\s+name="description"[\s\S]*?>\s*/gi, "")
    .replace(/<meta\s+name="keywords"[\s\S]*?>\s*/gi, "")
    .replace(/<link\s+rel="canonical"[\s\S]*?>\s*/gi, "")
    .replace(/<meta\s+property="og:[^"]*"[\s\S]*?>\s*/gi, "")
    .replace(/<meta\s+name="twitter:[^"]*"[\s\S]*?>\s*/gi, "")
}

function injectAppHtml(page, appHtml) {
  const { tags, body } = splitHeadTags(appHtml)
  let html = stripPageSpecificHeadTags(page)

  if (tags) {
    html = html.replace("</head>", `    ${tags}\n  </head>`)
  }

  if (html.includes('<div id="root"></div>')) {
    return html.replace('<div id="root"></div>', `<div id="root">${body}</div>`)
  }

  throw new Error("Could not find empty #root in dist/index.html")
}

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
})

try {
  const { render, prerenderRoutes } = await vite.ssrLoadModule("/src/entry-server.tsx")

  for (const url of prerenderRoutes) {
    const { html } = await render(url)
    const page = injectAppHtml(template, html)
    const outfile = urlToFile(url)
    fs.mkdirSync(path.dirname(outfile), { recursive: true })
    fs.writeFileSync(outfile, page)
    console.log(`prerendered ${url} -> ${path.relative(dist, outfile)}`)
  }
} finally {
  await vite.close()
}
