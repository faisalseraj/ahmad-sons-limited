import { Building2, MapPin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 size={24} />
              <h3 className="font-semibold text-lg">AHMAD SONS LIMITED</h3>
            </div>
            <div className="space-y-2 text-sm text-blue-100">
              <p>Company Number: 14282062</p>
              <p>Private Limited Company</p>
              <p>Incorporated: 8 August 2022</p>
              <p className="text-xs mt-3 text-blue-200">
                Registered in England and Wales
              </p>
            </div>
          </div>

          {/* Registered Office */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={24} />
              <h3 className="font-semibold text-lg">Registered Office</h3>
            </div>
            <address className="text-sm text-blue-100 not-italic">
              34 Roderick Road<br />
              Birmingham<br />
              England<br />
              B11 1UE
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mail size={24} />
              <h3 className="font-semibold text-lg">Information</h3>
            </div>
            <nav className="flex flex-col gap-2 text-sm text-blue-100">
              <a href="#about" className="hover:text-white transition-colors">
                About Us
              </a>
              <a href="#services" className="hover:text-white transition-colors">
                Our Services
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="text-sm text-blue-100 text-center">
            <p>
              © {currentYear} AHMAD SONS LIMITED. All rights reserved.
            </p>
            <p className="mt-2 text-xs">
              Company Number: 14282062 | Registered in England and Wales
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
