import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const { t, language, setLanguage, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.admissions'), path: '/admissions' },
    { label: t('nav.courses'), path: '/courses' },
    { label: t('nav.services'), path: '/services' },
    { label: t('nav.countries'), path: '/countries' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div
    className="flex items-center justify-between h-13 lg:h-20"
    style={{ direction: 'ltr' }} // 🔥 يثبت الترتيب
  >
    
    {/* Logo */}
    <Link to="/" className="flex items-center gap-3 flex-shrink-0">
      <div className="text-left"> {/* 🔥 ثابت */}
        <img 
          src="https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-1/543373301_1192327992930638_6047528909729759757_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=lQGc_zq6QR8Q7kNvwEGHZ6f&_nc_oc=AdqC45y5jO33npRMu3rUjjrowi54qDCHc4S-K5b1mpuFhvptIFBAwIdXjxlRYjA7aLY&_nc_zt=24&_nc_ht=scontent.fcai19-7.fna&_nc_gid=W5qZdNapVGGybZ8fgTamxg&oh=00_Af0F2VdOnN2VTFjPu4dtU5vTtmUOCT4sEx0QqlQ5SQvSAw&oe=69F0938D" 
          alt="Better Life Logo" 
          className="h-13 w-auto object-contain"
        />
      </div>
    </Link>

    {/* Desktop Nav */}
    <nav className="hidden lg:flex items-center gap-1">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            isActive(item.path)
              ? 'text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
          }`}
          style={isActive(item.path) ? { backgroundColor: '#73337d' } : {}}
        >
          {item.label}
        </Link>
      ))}
    </nav>

    {/* Right Actions */}
    <div className="flex items-center gap-3">
      
      {/* Language Switcher */}
      <div className="flex items-center bg-gray-100 rounded-full p-1">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
            language === 'en'
              ? 'text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          style={language === 'en' ? { backgroundColor: '#73337d' } : {}}
        >
          EN
        </button>

        <button
          onClick={() => setLanguage('ar')}
          className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
            language === 'ar'
              ? 'text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          style={language === 'ar' ? { backgroundColor: '#73337d' } : {}}
        >
          AR
        </button>
      </div>

      {/* CTA Button */}
      <Link
        to="/admissions"
        className="hidden sm:flex items-center px-5 py-2 rounded-xl text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all duration-200 hover:opacity-90"
        style={{ backgroundColor: '#73337d' }}
      >
        {t('nav.applyNow')}
      </Link>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

    </div>
  </div>
</div>

      {/* Mobile Menu */}
      <AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'calc(100vh - 94px)' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed top-16 left-0 w-full z-40 lg:hidden bg-white border-t border-gray-100 shadow-xl"
    >
      <div className="max-w-7xl mx-auto px-1 py-2 space-y-1 h-110 overflow-y-auto flex flex-col items-center justify-center">
        
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center justify-center w-19 max-w-md px-1 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              isActive(item.path)
                ? 'text-white'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
            style={isActive(item.path) ? { backgroundColor: '#4f4551' } : {}}
          >
            {item.label}
          </Link>
        ))}

        <div className="pt-2 w-full max-w-md">
          <Link
            to="/admissions"
            className="flex items-center justify-center w-full px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200"
            style={{ backgroundColor: '#483e4a' }}
          >
            {t('nav.applyNow')}
          </Link>
        </div>

      </div>
    </motion.div>
  )}
</AnimatePresence>
    </header>
  );
}