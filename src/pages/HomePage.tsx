import {
  HeroSection,
  SocialProofSection,
  HowItWorksSection,
  CourseLevelsSection,
  WhatYouGetSection,
  InstructorSection,
  PricingSection,
  CohortUrgencySection,
  FinalCTASection,
} from '@/components/home';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <HowItWorksSection />
      <CourseLevelsSection />
      <WhatYouGetSection />
      <InstructorSection />
      <PricingSection />
      <CohortUrgencySection />
      <FinalCTASection />
    </>
  );
}
