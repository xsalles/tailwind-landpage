import "../../tailwind.css";
import CardTeam from "../components/CardTeam";
import { illustrationsPeople } from "../constants/illustrations";
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
      <CardTeam
        description="dasdsad"
        name="dsada"
        photo={illustrationsPeople.brian}
        position="Ceo ne pai"
      />
    </main>
  );
}
