import Faq from "../components/Faq";
import Heading from "../components/Heading";
import { faqData } from "../data/data";

export default function ProcessSection() {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex h-auto gap-10">
        <Heading
          fontSize="text-[40px]"
          bgColor="bg-[#B9FF66]"
          fontColor="text-black"
        >
          Our Working Process
        </Heading>
        <p className="w-[580px]">
        Meet the skilled and experienced team behind our successful digital marketing strategies
        </p>
      </div>
      <div className="flex flex-col h-auto w-full gap-7.5">
        {
            faqData.map((faq, key) => (
              <Faq 
                key={key}
                number={faq.number}
                title={faq.title}
                description={faq.description}
              />
            ))
        }
      </div>
    </section>
  );
}
