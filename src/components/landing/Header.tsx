const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-foreground">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#top" className="flex items-center gap-1">
        <span className="bg-foreground text-background px-2 py-1 text-sm font-black tracking-tight">MIGO</span>
        <span className="border-2 border-foreground px-2 py-1 text-sm font-black tracking-tight text-foreground">AI</span>
      </a>
      <nav className="flex items-center gap-8 text-sm font-semibold text-foreground">
        <a href="#why-teams" className="hover:opacity-70 transition-opacity">Why Migo</a>
        <a href="#employers" className="hover:opacity-70 transition-opacity">Employers</a>
        <a href="#candidates" className="hover:opacity-70 transition-opacity">Candidates</a>
        <a href="#faq" className="hover:opacity-70 transition-opacity">FAQ</a>
        <a href="#pilot" className="hover:opacity-70 transition-opacity">Pilot</a>
      </nav>
    </div>
  </header>
);

export default Header;
