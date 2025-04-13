import "../../tailwind.css"
import CompanySection from "../sections/company"
import HeroSection from '../sections/hero'
import ProposalSection from "../sections/proposal"
import ServicesSection from "../sections/services"

export default function Landpage() {
  return (
    <main className="flex flex-col gap-[90px]">
        <HeroSection />
        <CompanySection />
        <ServicesSection />
        <ProposalSection/>
    </main>
  )
}
