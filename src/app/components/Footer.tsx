import React from 'react';
import { Link } from 'react-router';
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t, isRTL } = useLanguage();

  const quickLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.admissions'), path: '/admissions' },
    { label: t('nav.courses'), path: '/courses' },
    { label: t('nav.services'), path: '/services' },
    { label: t('nav.countries'), path: '/countries' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  const services = [
    { label: t('services.admissions.title'), path: '/admissions' },
    { label: t('services.equivalency.title'), path: '/services' },
    { label: t('services.authentication.title'), path: '/services' },
    { label: t('services.courses.title'), path: '/courses' },
  ];

  return (
    <footer style={{ backgroundColor: '#1a0a1e' }} className="text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className={`lg:col-span-1 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #73337d, #9b4aa8)' }}
              >
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <div className="text-sm font-bold text-white">Better Life</div>
                <div className="text-xs text-gray-400">
                  {isRTL ? 'القبولات والكورسات' : 'Admissions & Courses'}
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t('footer.tagline')}
            </p>
            {/* Social Links */}
            <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Youtube, href: '#' },
                { Icon: Linkedin, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#73337d')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)')}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="text-white font-semibold mb-5">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2"
                    style={isRTL ? { flexDirection: 'row-reverse', justifyContent: 'flex-end' } : {}}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: '#73337d' }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="text-white font-semibold mb-5">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2"
                    style={isRTL ? { flexDirection: 'row-reverse', justifyContent: 'flex-end' } : {}}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: '#73337d' }}
                    />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="text-white font-semibold mb-5">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:01020455489"
                  className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors"
                  style={isRTL ? { flexDirection: 'row-reverse', justifyContent: 'flex-end' } : {}}
                >
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ color: '#73337d' }} />
                  <span dir="ltr">010 20455489</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/201020455489"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors"
                  style={isRTL ? { flexDirection: 'row-reverse', justifyContent: 'flex-end' } : {}}
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#73337d' }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span dir="ltr">010 20455489</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@betterlife-edu.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors"
                  style={isRTL ? { flexDirection: 'row-reverse', justifyContent: 'flex-end' } : {}}
                >
                  <Mail className="w-4 h-4 flex-shrink-0" style={{ color: '#73337d' }} />
                  info@betterlife-edu.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 ${
            isRTL ? 'flex-row-reverse' : ''
          }`}
        >
          <p className="text-gray-500 text-sm">
            © 2024 Better Life Admissions & Courses. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
