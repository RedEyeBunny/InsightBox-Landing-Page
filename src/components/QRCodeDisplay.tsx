import { QRCodeSVG } from "qrcode.react"
import { hasApkDownloadUrl, siteConfig } from "../config/siteConfig"

interface QRCodeDisplayProps {
  size?: number
  className?: string
}

export function QRCodeDisplay({ size = 200, className = "" }: QRCodeDisplayProps) {
  const hasUrl = hasApkDownloadUrl()
  const qrImage = siteConfig.installQrCodeImage?.trim()

  if (!hasUrl && !qrImage) {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 ${className}`}
        style={{ width: size, height: size }}
        role="img"
        aria-label="QR code placeholder — install URL not configured"
      >
        <span className="text-xs text-white/40 text-center px-4">
          QR code available when install URL is set
        </span>
      </div>
    )
  }

  const qrSize = size - 24

  return (
    <div
      className={`rounded-2xl bg-white p-3 shadow-lg shadow-black/20 ${className}`}
      style={{ width: size, height: size }}
    >
      {qrImage ? (
        <img
          src={qrImage}
          alt="Scan to install InsightBox on Android"
          width={qrSize}
          height={qrSize}
          className="block h-full w-full object-contain"
          style={{ imageRendering: "pixelated" }}
        />
      ) : (
        <QRCodeSVG
          value={siteConfig.apkDownloadUrl}
          size={qrSize}
          bgColor="#ffffff"
          fgColor="#000000"
          level="M"
          includeMargin={false}
          aria-label="QR code to install InsightBox on Android"
        />
      )}
    </div>
  )
}
