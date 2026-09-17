import { StrictMode } from "react"
import { renderToString } from "react-dom/server"
import { HelmetProvider, type HelmetServerState } from "react-helmet-async"
import { StaticRouter } from "react-router-dom"
import App from "./App"
import { getBlogPrerenderPaths } from "./content/blog"

HelmetProvider.canUseDOM = false

export const prerenderRoutes = ["/", ...getBlogPrerenderPaths()]

export function render(url: string): { html: string; helmet?: HelmetServerState | null } {
  const helmetContext: { helmet?: HelmetServerState | null } = {}

  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>,
  )

  return { html, helmet: helmetContext.helmet }
}

