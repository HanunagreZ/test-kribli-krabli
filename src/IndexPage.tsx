import { Wrapper } from '@/layouts/Wrapper';
import { Banner } from '@/components/Banner';
import { Header } from '@/layouts/Header/Header';
import { Main } from '@/layouts/Main';
import { MainSection } from '@/sections/MainSection/MainSection';
import { AboutSection } from '@/sections/AboutSection/AboutSection';
import { EmployeesSection } from '@/sections/EmployeesSection/Employees';
import { HiringEmployeesSection } from '@/sections/HiringEmployeesSection/HiringEmployeesSection';
import { CasesSection } from '@/sections/CasesSection/CasesSection';
import { PreviewSection } from '@/sections/PreviewSection/PreviewSection';
import { BusinessApplication } from '@/sections/BusinessApplication/BusinessApplication';
import { ContactSection } from '@/sections/ContactSection/ContactSection';
import { ReviewsSection } from '@/sections/ReviewsSection/ReviewsSection';
import { ArticlesSection } from '@/sections/ArticlesSection/ArticlesSection';
import { Footer } from '@/layouts/Footer/Footer';

export const IndexPage = () => {
  return (
    <Wrapper>
      <Banner />
      <Header />
      <Main>
        <MainSection />
        <AboutSection />
        <EmployeesSection />
        <HiringEmployeesSection />
        <CasesSection />
        <PreviewSection />
        <BusinessApplication />
        <ContactSection />
        <ReviewsSection />
        <ArticlesSection />
      </Main>
      <Footer />
    </Wrapper>
  );
};
