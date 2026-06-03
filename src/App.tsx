import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { PublicLayout } from '@/layouts/PublicLayout';
import { HomePage } from '@/pages/HomePage';
import { CoursesPage } from '@/pages/CoursesPage';
import { CourseDetailPage } from '@/pages/CourseDetailPage';
import { PricingPage } from '@/pages/PricingPage';
import { AboutPage } from '@/pages/AboutPage';
import { FAQPage } from '@/pages/FAQPage';
import { TermsPage } from '@/pages/TermsPage';
import { EnrollPage } from '@/pages/EnrollPage';
import { PlacementPage } from '@/pages/PlacementPage';
import { ContactPage } from '@/pages/ContactPage';
import { DashboardComingSoonPage } from '@/pages/DashboardComingSoonPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <HomePage />
            </PublicLayout>
          }
        />
        <Route
          path="/courses"
          element={
            <PublicLayout>
              <CoursesPage />
            </PublicLayout>
          }
        />
        <Route
          path="/courses/:courseId"
          element={
            <PublicLayout>
              <CourseDetailPage />
            </PublicLayout>
          }
        />
        <Route
          path="/pricing"
          element={
            <PublicLayout>
              <PricingPage />
            </PublicLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PublicLayout>
              <AboutPage />
            </PublicLayout>
          }
        />
        <Route
          path="/faq"
          element={
            <PublicLayout>
              <FAQPage />
            </PublicLayout>
          }
        />
        <Route
          path="/terms"
          element={
            <PublicLayout>
              <TermsPage />
            </PublicLayout>
          }
        />
        <Route
          path="/enroll"
          element={
            <PublicLayout>
              <EnrollPage />
            </PublicLayout>
          }
        />
        <Route
          path="/placement"
          element={
            <PublicLayout>
              <PlacementPage />
            </PublicLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <PublicLayout>
              <ContactPage />
            </PublicLayout>
          }
        />

        {/* Dashboard — student portal not yet available; redirect all /dashboard/* */}
        <Route
          path="/dashboard"
          element={
            <PublicLayout>
              <DashboardComingSoonPage />
            </PublicLayout>
          }
        />
        <Route path="/dashboard/*" element={<Navigate to="/dashboard" replace />} />

        {/* Catch-all */}
        <Route
          path="*"
          element={
            <PublicLayout>
              <NotFoundPage />
            </PublicLayout>
          }
        />
      </Routes>
    </>
  );
}
