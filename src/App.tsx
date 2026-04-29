import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { PublicLayout } from '@/layouts/PublicLayout';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { HomePage } from '@/pages/HomePage';
import { CoursesPage } from '@/pages/CoursesPage';
import { CourseDetailPage } from '@/pages/CourseDetailPage';
import { PricingPage } from '@/pages/PricingPage';
import { AboutPage } from '@/pages/AboutPage';
import { FAQPage } from '@/pages/FAQPage';
import { TermsPage } from '@/pages/TermsPage';
import { EnrollPage } from '@/pages/EnrollPage';
import { PlacementPage } from '@/pages/PlacementPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import {
  DashboardHomePage,
  CommunityPage,
  ResourcesPage,
  ProfilePage,
} from '@/pages/dashboard';

/**
 * Scrolls to top on every route change. Placed inside the router so it can
 * subscribe to location changes.
 */
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

        {/* Authenticated — Learning Dashboard */}
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <DashboardHomePage />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/community"
          element={
            <DashboardLayout>
              <CommunityPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/resources"
          element={
            <DashboardLayout>
              <ResourcesPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/profile"
          element={
            <DashboardLayout>
              <ProfilePage />
            </DashboardLayout>
          }
        />

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
