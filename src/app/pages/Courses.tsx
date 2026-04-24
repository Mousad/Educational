import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Star, Clock, Users, Filter, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { courses, categories } from '../data/coursesData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Courses() {
  const { t, isRTL, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = courses.filter((c) => {
    const matchCat = activeCategory === 'all' || c.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const title = language === 'ar' ? c.titleAr : c.titleEn;
    const matchSearch = !q || title.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const levelColors: Record<string, string> = {
    Beginner: '#27ae60',
    Intermediate: '#e67e22',
    Advanced: '#e74c3c',
    'Beginner to Advanced': '#73337d',
  };

  return (
    <div className="min-h-screen pt-20" style={{ fontFamily: isRTL ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
      {/* Hero */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #73337d 0%, #4a2954 100%)' }}
      >
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)`,
          backgroundSize: '30px 30px',
        }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-white text-4xl font-bold mb-4">{t('courses.title')}</h1>
            <p className="text-white/80 text-lg mb-8">{t('courses.subtitle')}</p>

            {/* Search */}
            <div className="relative max-w-lg mx-auto">
              <input
                type="text"
                placeholder={isRTL ? 'ابحث عن كورس...' : 'Search courses...'}
                className="w-full px-5 py-4 pr-12 rounded-2xl text-gray-900 text-sm focus:outline-none shadow-xl"
                style={{ direction: isRTL ? 'rtl' : 'ltr' }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Filter className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center gap-2 overflow-x-auto py-4 no-scrollbar ${isRTL ? 'flex-row-reverse' : ''}`}>
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: activeCategory === cat.key ? '#73337d' : 'transparent',
                  color: activeCategory === cat.key ? 'white' : '#6b7280',
                  border: activeCategory === cat.key ? 'none' : '1px solid #e5e7eb',
                }}
              >
                {language === 'ar' ? cat.ar : cat.en}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16" style={{ backgroundColor: '#f9f8f7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p className="text-gray-500">{isRTL ? 'لا توجد كورسات مطابقة' : 'No courses found'}</p>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
              {filtered.map((course) => (
                <motion.div
                  key={course.id}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
                  className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={course.image}
                      alt={language === 'ar' ? course.titleAr : course.titleEn}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Level Badge */}
                    <div
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm"
                      style={{ backgroundColor: levelColors[course.level] || '#73337d' }}
                    >
                      {language === 'ar' ? course.levelAr : course.level}
                    </div>
                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm" style={{ backgroundColor: '#73337d' }}>
                      ${course.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category */}
                    <div className={`flex items-center gap-2 mb-3 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                      <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: 'rgba(115,51,125,0.08)', color: '#73337d' }}>
                        {language === 'ar'
                          ? categories.find((c) => c.key === course.category)?.ar
                          : categories.find((c) => c.key === course.category)?.en}
                      </span>
                    </div>

                    <h3 className="font-bold text-gray-900 mb-2 leading-tight" style={{ fontSize: '1.02rem' }}>
                      {language === 'ar' ? course.titleAr : course.titleEn}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2">
                      {language === 'ar' ? course.descAr : course.descEn}
                    </p>

                    {/* Instructor */}
                    <div className={`flex items-center gap-2 mb-4 text-sm text-gray-600 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: '#73337d' }}>
                        {(language === 'ar' ? course.instructor.ar : course.instructor.en)[0]}
                      </div>
                      <span>{language === 'ar' ? course.instructor.ar : course.instructor.en}</span>
                    </div>

                    {/* Stats */}
                    <div className={`flex items-center gap-4 text-sm text-gray-500 pb-4 mb-4 border-b border-gray-100 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-gray-700">{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}h</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="text-xl font-bold" style={{ color: '#73337d' }}>${course.price}</span>
                      <Link
                        to={`/courses/${course.id}`}
                        className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-md"
                        style={{ backgroundColor: '#73337d' }}
                      >
                        {t('courses.enrollNow')}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
