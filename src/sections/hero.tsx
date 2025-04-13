import Button from "../components/Button";
import { illustrationsHero } from "../constants/illustrations";

export default function HeroSection() {
  return (
    <section className="flex w-full h-auto justify-between gap-[108px]">
      <div className="flex flex-col gap-[35px] w-[531px]">
        <h1 className="text-[60px] font-medium">Navigating the digital landscape for success</h1>
        <p className="text-[20px]">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button bgColor="bg-[#191A23]" fontColor="text-white" width="w-[264px]">
          Book a consultation
        </Button>
      </div>
      <img src={illustrationsHero.megaphone} alt="" />
    </section>
  );
}
