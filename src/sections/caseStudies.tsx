import Heading from "../components/Heading";
import { arrows } from "../constants/icons";
import { caseStudies } from "../data/data";

export default function CaseStudiesSection() {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex h-auto gap-10 items-center">
        <Heading
          fontSize="text-[40px]"
          bgColor="bg-[#B9FF66]"
          fontColor="text-black"
        >
          Case Studies
        </Heading>
        <p className="w-[580px]">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className="flex !p-17.5 bg-[#191A23] items-center rounded-[45px] gap-16 justify-between">
        {caseStudies.map((caseStudie) => (
          <div className="w-[286px] flex flex-col gap-5">
            <p className="text-white">{caseStudie.description}</p>
            <div className="flex gap-4">
              <p className="text-[#B9FF66]">Learn more</p>
              <img src={arrows.green} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
