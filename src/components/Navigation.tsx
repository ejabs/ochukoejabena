import { useEffect, useRef, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Operating Model", href: "#operating-model" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [render, setRender] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const asideRef = useRef<HTMLElement | null>(null);
  const prevActiveRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (render) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [render]);

  useEffect(() => {
    if (!render) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [render]);

  // Focus trap: cycle focus within the sidebar when mounted
  useEffect(() => {
    if (!render) return;

    // store previously focused element to restore later
    prevActiveRef.current = document.activeElement as HTMLElement | null;

    const container = asideRef.current;
    if (!container) return;

    const focusableSelector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(container.querySelectorAll<HTMLElement>(focusableSelector));
    if (focusable.length) {
      focusable[0].focus();
    }

    const onTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const active = document.activeElement as HTMLElement;
      if (!focusable.length) {
        e.preventDefault();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (active === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', onTab);
    return () => {
      window.removeEventListener('keydown', onTab);
      // restore focus
      try {
        prevActiveRef.current?.focus();
      } catch {}
    };
  }, [render]);

  const handleOpen = () => {
    prevActiveRef.current = document.activeElement as HTMLElement | null;
    setRender(true);
    requestAnimationFrame(() => setIsOpen(true));
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setRender(false);
      // restore focus after unmount
      try {
        prevActiveRef.current?.focus();
      } catch {}
    }, 500);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-divider">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between h-14">
        <a href="#" className="text-sm font-sans font-semibold text-foreground tracking-wide">
          OAE
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs font-sans text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => (render ? handleClose() : handleOpen())}
          className="md:hidden text-muted-foreground hover:text-foreground text-sm"
          aria-label="Toggle menu"
          aria-expanded={render && isOpen}
        >
          {render && isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      {render && (
        <div
          className="fixed inset-0 z-40 md:hidden flex items-stretch"
          onClick={handleClose}
          aria-hidden={!isOpen}
        >
          {/* Backdrop (darker) */}
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Sidebar - left aligned, exactly 50% width */}
          <aside
            ref={asideRef}
            className={`relative z-50 w-[50vw] min-w-[260px] max-w-[50vw] h-screen bg-[#071427]/95 border-r border-divider p-6 overflow-auto transform transition-transform duration-500 ease-out shadow-2xl ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between mb-6">
              <a href="#" className="text-base font-sans font-semibold text-foreground tracking-wide">
                OAE
              </a>
              <button
                onClick={handleClose}
                className="text-muted-foreground hover:text-foreground text-lg p-2 rounded-md transition-colors"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={handleClose}
                  className="block text-lg font-medium text-foreground/95 hover:text-foreground pl-1 transition-all duration-200 flex items-center gap-3"
                >
                  <svg className="w-4 h-4 text-primary/80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="mt-8 border-t border-divider pt-6">
              <p className="text-sm text-muted-foreground">Let's build something great together.</p>
              <a
                href="#contact"
                onClick={handleClose}
                className="inline-block mt-4 px-4 py-2 bg-foreground text-background rounded-md text-sm font-medium hover:opacity-95 transition-opacity"
              >
                Contact
              </a>

              <div className="mt-6 flex items-center gap-4">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.82.58A12 12 0 0012 .5z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.5V21H17v-5.1c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.3-2 2.7V21H9z" />
                  </svg>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.5 3c-2.5 0-4.5 2.3-3.9 4.8A12.94 12.94 0 013 4s-4 9 5 13a13 13 0 01-8 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
              </div>
            </div>
          </aside>

          {/* invisible area to the right of sidebar to capture clicks (fills remaining 50%) */}
          <div className={`flex-1 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      )}
    </nav>
  );
};

export default Navigation;
