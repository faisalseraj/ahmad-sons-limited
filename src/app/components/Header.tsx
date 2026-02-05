import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', hash: 'home' },
  { name: 'About Us', hash: 'about' },
  { name: 'Services', hash: 'services' },
  { name: 'Vision & Values', hash: 'vision-values' },
  { name: 'Careers', hash: 'careers' },
  { name: 'Contact', hash: 'contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(() =>
    typeof window !== 'undefined' ? window.location.hash.slice(1) || 'home' : 'home'
  );

  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash.slice(1) || 'home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const isActive = (hash: string) => {
    const h = currentHash || 'home';
    return h === hash;
  };

  const handleNavClick = () => setMobileMenuOpen(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center">
            <div className="text-xl font-semibold text-[#1e3a8a] tracking-tight">
              AHMAD SONS LIMITED
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.hash}
                href={`#${item.hash}`}
                className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                  isActive(item.hash)
                    ? 'text-[#1e3a8a] bg-blue-50'
                    : 'text-gray-700 hover:text-[#1e3a8a] hover:bg-gray-50'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded text-gray-700 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <a
                key={item.hash}
                href={`#${item.hash}`}
                onClick={handleNavClick}
                className={`block px-4 py-3 text-sm font-medium rounded ${
                  isActive(item.hash)
                    ? 'text-[#1e3a8a] bg-blue-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
