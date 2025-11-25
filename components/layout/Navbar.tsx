import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Moon, Sun, User } from 'lucide-react';
import { Button } from '../ui/Button';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { label: 'Notícias', href: 'news' },
    { label: 'Esportes', href: 'sports' },
    { label: 'Cultura', href: 'culture' },
    { label: 'Política', href: 'politics' },
    { label: 'Empregos', href: 'jobs' },
    { label: 'Polícia', href: 'police' },
    { label: 'Saúde', href: 'health' },
    { label: 'Educação', href: 'education' },
    { label: 'Eleições 2024', href: 'elections' },
    { label: 'Micareta', href: 'micareta' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 shadow-sm py-2' 
          : 'bg-white dark:bg-[#0f172a] border-b border-gray-100 dark:border-slate-800 py-3'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          
          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -ml-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center lg:justify-start flex-1 lg:flex-none cursor-pointer group mr-8" onClick={() => onNavigate('home')}>
            <div className="flex flex-col items-center lg:items-start">
              <span className="font-serif font-black text-2xl lg:text-3xl tracking-tighter text-primary-900 dark:text-white leading-none group-hover:opacity-90 transition-opacity">
                NOTÍCIAS
              </span>
              <div className="flex items-center w-full justify-between lg:justify-start gap-1">
                 <span className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-gray-400 dark:text-slate-500 mt-1">
                  FEIRA DE SANTANA
                 </span>
                 <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-1"></span>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 flex-grow justify-center">
             <button
                onClick={() => onNavigate('home')}
                className="p-2 text-primary-600 dark:text-white hover:bg-primary-50 dark:hover:bg-slate-800 rounded-md transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              </button>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => onNavigate(link.href)}
                className={`px-3 py-2 text-xs xl:text-sm font-bold uppercase tracking-wide transition-colors rounded-md ${
                    link.label === 'Micareta' 
                    ? 'text-rose-500 hover:text-rose-600 hover:bg-rose-50' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-1 md:space-x-3">
             {/* Search Desktop */}
             <div className={`hidden md:flex items-center transition-all duration-300 ${isSearchOpen ? 'w-64' : 'w-10'}`}>
                {isSearchOpen ? (
                   <div className="relative w-full animate-fade-in">
                     <input 
                      autoFocus
                      onBlur={() => setIsSearchOpen(false)}
                      type="text" 
                      placeholder="Buscar..." 
                      className="w-full pl-4 pr-10 py-1.5 bg-gray-100 dark:bg-slate-800 border-none rounded-full text-sm focus:ring-2 focus:ring-primary-500 dark:text-white placeholder-gray-400"
                    />
                    <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" />
                   </div>
                ) : (
                  <button onClick={() => setIsSearchOpen(true)} className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                    <Search className="w-5 h-5" />
                  </button>
                )}
             </div>

             {/* Search Mobile */}
             <button className="md:hidden p-2 text-gray-500 dark:text-gray-400">
               <Search className="w-5 h-5" />
             </button>

             <div className="h-6 w-px bg-gray-200 dark:bg-slate-700 hidden md:block"></div>

             <button 
              onClick={toggleDarkMode}
              className="p-2 text-gray-500 hover:text-amber-500 dark:text-gray-400 dark:hover:text-amber-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              aria-label="Alternar tema"
             >
               {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
             </button>
             
             <div className="hidden lg:block">
                <Button size="sm" variant="primary" className="shadow-lg shadow-primary-500/20 bg-gradient-to-r from-primary-700 to-primary-600">
                  <User className="w-4 h-4 mr-2" />
                  Entrar
                </Button>
             </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 shadow-xl animate-slide-up h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-4 py-6 space-y-2">
            <button
                onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left px-4 py-3 rounded-xl text-base font-bold text-gray-900 dark:text-white bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700"
              >
                Início
            </button>
             {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  onNavigate(link.href);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors uppercase tracking-wide"
              >
                {link.label}
              </button>
            ))}
             <div className="pt-6 mt-6 border-t border-gray-100 dark:border-slate-800">
                <Button className="w-full justify-center py-4 text-base">Área do Leitor</Button>
             </div>
          </div>
        </div>
      )}
    </header>
  );
};