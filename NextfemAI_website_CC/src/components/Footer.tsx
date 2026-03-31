export function Footer() {
  return (
    <footer className="border-t-2 border-nearblack bg-nearblack px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
          src="/nextfem-favicon-transparent.png"
          alt="Nextfem AI"
          className="h-6 w-auto"
        />
        <span className="text-[11px] text-[#6b5f7a]">© 2025 Nextfem AI</span>
      </div>
      <span className="text-[11px] text-[#6b5f7a]">Built with Claude Code</span>
    </footer>
  )
}
