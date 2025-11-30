import { Menu, Package, X } from 'lucide-react'
import React, { useState } from 'react'

interface NavigationProps {
    scrolled: boolean,
}

const Navigation: React.FC<NavigationProps> = ({
    scrolled
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    const menus = [
        {
            label: 'Features',
            link: '#features'
        },
        {
            label: 'Pricing',
            link: '#pricing'
        },
        {
            label: 'Contact',
            link: '#contact'
        },
    ];
    
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/80 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">KANBAN</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {menus.map(({link, label}) => (
                <a key={label} href={link} className="text-gray-600 hover:text-blue-600 transition-colors relative group">
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              ))}
              <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t animate-slideInUp">
            <div className="px-4 py-4 space-y-3">
                {menus.map(({label, link}) => (
                    <a key={label} href={link} className="block text-gray-600 hover:text-blue-600 transition-colors">{label}</a>
                ))}
              <button className="w-full px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg transition-all">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
  )
}

export default Navigation