import "../../tailwind.css"
import CompanySection from "../sections/company"
import HeroSection from '../sections/hero'

export default function Landpage() {
  return (
    <main className="flex flex-col gap-[90px]">
        <HeroSection />
        <CompanySection />
    </main>
  )
}
