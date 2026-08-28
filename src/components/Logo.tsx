interface LogoProps {
  className?: string
  variant?: "light" | "dark"
}

export function Logo({ className = "", variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-text-dark"

  return (
    <a href="#" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="InsightBox home">
      <img
        src="/logo.jpg"
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 rounded-[9px] object-cover"
        aria-hidden="true"
      />
      <span className={`text-lg font-bold tracking-tight ${textColor}`}>InsightBox</span>
    </a>
  )
}
