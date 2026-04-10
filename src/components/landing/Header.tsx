const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
    <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
      <a href="#top" className="flex items-center gap-2">
        <span className="text-lg font-extrabold tracking-tight text-foreground">MIGO</span>
        <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">AI</span>
        <span className="hidden sm:inline text-xs text-muted-foreground ml-2 border-l border-border pl-2">Agentic hiring</span>
      </a>
      <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
        <a href="#employers" className="hover:text-foreground transition-colors">Employers</a>
        <a href="#candidates" className="hover:text-foreground transition-colors">Candidates</a>
        <a href="#pilot" className="hover:text-foreground transition-colors">Pilot</a>
      </nav>
    </div>
  </header>
);

export default Header;
