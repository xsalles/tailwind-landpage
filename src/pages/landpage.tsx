import "../../tailwind.css";
import CaseStudiesSection from "../sections/caseStudies";
import CompanySection from "../sections/company";
import HeroSection from "../sections/hero";
import ProcessSection from "../sections/process";
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
      <ProcessSection />
    </main>
  );
}
