import CardService from "../components/CardService";
import Heading from "../components/Heading";
import { services } from "../data/data";

export default function ServicesSection() {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex h-auto gap-10">
        <Heading fontSize="text-[40px]" bgColor="bg-[#B9FF66]" fontColor="text-black">
          Services
        </Heading>
        <p className="w-[580px]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="grid grid-cols-2 flex-wrap gap-10">
        {services.map((service) => (
          <CardService
            fontSize="text-[30px]"
            bgColor={service.bgColor === "bg-[#191A23]" || service.bgColor === "bg-[#B9FF66]" ? "bg-white" : "bg-[#B9FF66]"}
            children={service.title}
            imageLink={service.arrowIcon}
            illustration={service.illustration}
            bgColorCard={service.bgColor}
            fontColor="text-black"
            fontColorCard={service.fontColor}
          />
        ))}
      </div>
    </section>
  );
}
