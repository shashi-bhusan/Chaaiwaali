import { Outlet, Link, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const logoUrl = `${import.meta.env.BASE_URL}logo.png`;

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-ivory border-b border-navy/10">
        <nav className="container-chaai px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logoUrl} alt="Chaaiwaali — The Art of Chai" className="h-20 md:h-24 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`text-sm tracking-wider uppercase transition-colors hover:text-[var(--gold)] ${
                  isActive('/') ? 'text-[var(--gold)]' : 'text-navy'
                }`}
              >
                Home
              </Link>
              <Link
                to="/story"
                className={`text-sm tracking-wider uppercase transition-colors hover:text-[var(--gold)] ${
                  isActive('/story') ? 'text-[var(--gold)]' : 'text-navy'
                }`}
              >
                Our Story
              </Link>
              <Link
                to="/corporate"
                className={`text-sm tracking-wider uppercase transition-colors hover:text-[var(--gold)] ${
                  isActive('/corporate') ? 'text-[var(--gold)]' : 'text-navy'
                }`}
              >
                Corporate
              </Link>
              <Link
                to="/franchise"
                className={`text-sm tracking-wider uppercase transition-colors hover:text-[var(--gold)] ${
                  isActive('/franchise') ? 'text-[var(--gold)]' : 'text-navy'
                }`}
              >
                Partnership
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-navy"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm tracking-wider uppercase transition-colors ${
                  isActive('/') ? 'text-[var(--gold)]' : 'text-navy'
                }`}
              >
                Home
              </Link>
              <Link
                to="/story"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm tracking-wider uppercase transition-colors ${
                  isActive('/story') ? 'text-[var(--gold)]' : 'text-navy'
                }`}
              >
                Our Story
              </Link>
              <Link
                to="/corporate"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm tracking-wider uppercase transition-colors ${
                  isActive('/corporate') ? 'text-[var(--gold)]' : 'text-navy'
                }`}
              >
                Corporate
              </Link>
              <Link
                to="/franchise"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm tracking-wider uppercase transition-colors ${
                  isActive('/franchise') ? 'text-[var(--gold)]' : 'text-navy'
                }`}
              >
                Partnership
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[var(--navy)] text-[var(--ivory)] py-12">
        <div className="container-chaai px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link to="/">
                <img src={logoUrl} alt="Chaaiwaali" className="h-28 w-auto mb-4" />
              </Link>
              <p className="text-sm opacity-70 max-w-xs leading-relaxed">
                A modern hospitality ritual rooted in Indian heritage and elevated with British elegance.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm tracking-wider uppercase mb-4">Company</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <Link to="/story" className="hover:text-[var(--gold)] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/corporate" className="hover:text-[var(--gold)] transition-colors">
                    Corporate
                  </Link>
                </li>
                <li>
                  <Link to="/franchise" className="hover:text-[var(--gold)] transition-colors">
                    Franchise
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm tracking-wider uppercase mb-4">Contact</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <Link to="/contact" className="hover:text-[var(--gold)] transition-colors">
                    Inquiry Form
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm tracking-wider uppercase mb-4">Follow</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a href="#" className="hover:text-[var(--gold)] transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[var(--ivory)]/20 pt-8 text-center">
            <p className="text-sm opacity-60">
              Designed by beenaIT Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
