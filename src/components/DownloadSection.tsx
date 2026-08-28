import { AnimatedSection } from "./AnimatedSection"
import { DownloadButton } from "./DownloadButton"
import { QRCodeDisplay } from "./QRCodeDisplay"

export function DownloadSection() {
  return (
    <section id="download" className="relative overflow-hidden bg-navy-deep py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-violet/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Your saved content shouldn&apos;t disappear.
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/60 sm:text-lg">
              Download InsightBox and start turning the things you discover online into
              knowledge worth keeping.
            </p>
            <DownloadButton size="lg" fullWidth className="sm:w-auto">
              Install on Android
            </DownloadButton>
            <p className="mt-4 text-sm text-white/40">Free • Android • Open link on your phone</p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="flex flex-col items-center lg:items-end">
            <p className="mb-4 text-sm font-semibold text-white/60">Scan to install</p>
            <QRCodeDisplay size={240} />
            <p className="mt-3 max-w-[220px] text-center text-xs text-white/40">
              Scan with your Android camera, then follow the install steps
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
