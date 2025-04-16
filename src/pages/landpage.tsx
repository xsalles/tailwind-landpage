import "../../tailwind.css";
import Carrossel from "../components/Carrossel";
import CaseStudiesSection from "../sections/caseStudies";
import CompanySection from "../sections/company";
import HeroSection from "../sections/hero";
import ProcessSection from "../sections/process";
import ProposalSection from "../sections/proposal";
import ServicesSection from "../sections/services";
import TeamSection from "../sections/team";

export default function Landpage() {
  return (
    <main className="flex flex-col gap-[90px]">
      <HeroSection />
      <CompanySection />
      <ServicesSection />
      <ProposalSection />
      <CaseStudiesSection />
      <ProcessSection />
      <TeamSection />
      <div className="w-full flex justify-center items-center">
        <Carrossel />
      </div>
    </main>
  );
}
