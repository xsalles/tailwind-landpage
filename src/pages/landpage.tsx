import "../../tailwind.css";
import Faq from "../components/Faq";
import CaseStudiesSection from "../sections/caseStudies";
import CompanySection from "../sections/company";
import HeroSection from "../sections/hero";
import ProposalSection from "../sections/proposal";
import ServicesSection from "../sections/services";

export default function Landpage() {
  return (
    <main className="flex flex-col gap-[90px]">
      <HeroSection />
      <CompanySection />
      <ServicesSection />
      <ProposalSection />
      <CaseStudiesSection />
      <Faq number="01" title="ncoasicsa" description="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." />
    </main>
  );
}
