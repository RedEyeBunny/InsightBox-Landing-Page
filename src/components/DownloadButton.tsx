import { Download } from "lucide-react"
import { hasApkDownloadUrl, isDirectApkDownload, siteConfig } from "../config/siteConfig"

interface DownloadButtonProps {
  variant?: "primary" | "secondary" | "outline-light"
  size?: "sm" | "md" | "lg"
  className?: string
  children?: React.ReactNode
  fullWidth?: boolean
  showIcon?: boolean
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
}

const variantClasses = {
  primary:
    "bg-violet text-white hover:bg-violet-bright focus-visible:ring-violet-bright shadow-lg shadow-violet/25",
  secondary:
    "bg-white/10 text-white border border-white/20 hover:bg-white/15 focus-visible:ring-white/40",
  "outline-light":
    "bg-transparent text-white border border-white/30 hover:bg-white/10 focus-visible:ring-white/40",
}

export function DownloadButton({
  variant = "primary",
  size = "md",
  className = "",
  children,
  fullWidth = false,
  showIcon = true,
}: DownloadButtonProps) {
  const hasUrl = hasApkDownloadUrl()

  if (!hasUrl) {
    const disabledClasses =
      variant === "primary"
        ? "cursor-not-allowed bg-violet/30 text-white/50"
        : "cursor-not-allowed bg-soft-gray text-text-muted"

    return (
      <button
        type="button"
        disabled
        title="Set apkDownloadUrl in siteConfig.ts before launch"
        className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep ${disabledClasses} ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      >
        {showIcon && <Download className="h-4 w-4" aria-hidden="true" />}
        {children ?? "Download coming soon"}
      </button>
    )
  }

  const directDownload = isDirectApkDownload()

  return (
    <a
      href={siteConfig.apkDownloadUrl}
      {...(directDownload ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {showIcon && <Download className="h-4 w-4" aria-hidden="true" />}
      {children ?? "Download InsightBox"}
    </a>
  )
}
