import React from 'react';
import { createBrowserRouter, Outlet, ScrollRestoration } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Admissions from './pages/Admissions';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Services from './pages/Services';
import Countries from './pages/Countries';
import Contact from './pages/Contact';

function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollRestoration />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* Floating WhatsApp Button */}
     
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#f9f8f7' }}>
      <div className="text-center px-4">
        <div className="text-8xl font-bold mb-4" style={{ color: '#73337d' }}>404</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-500 mb-8">The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="px-6 py-3 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-all"
          style={{ backgroundColor: '#73337d' }}
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'admissions', Component: Admissions },
      { path: 'courses', Component: Courses },
      { path: 'courses/:id', Component: CourseDetails },
      { path: 'services', Component: Services },
      { path: 'countries', Component: Countries },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
]);
