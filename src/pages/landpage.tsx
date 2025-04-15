import "../../tailwind.css";
import Comment from "../components/Comment";
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
      <Comment comment="This is a comment" client="John Doe" position="Developer"/>
    </main>
  );
}
