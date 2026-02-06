'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    <header className="bg-brand-surface border-b border-brand-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center">
            <div className="text-xl font-bold text-brand-primary tracking-tight">
              AHMAD SONS LIMITED
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.hash}
                href={`#${item.hash}`}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.hash)
                    ? 'text-brand-accent bg-brand-icon-bg'
                    : 'text-brand-text-muted hover:text-brand-accent hover:bg-brand-icon-bg/50'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-brand-text hover:bg-brand-bg-soft"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-brand-border">
            {navItems.map((item) => (
              <a
                key={item.hash}
                href={`#${item.hash}`}
                onClick={handleNavClick}
                className={`block px-4 py-3 text-sm font-medium rounded-lg ${
                  isActive(item.hash)
                    ? 'text-brand-accent bg-brand-icon-bg'
                    : 'text-brand-text-muted hover:text-brand-accent hover:bg-brand-icon-bg/50'
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
