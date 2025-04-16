import Carrossel from "../components/Carrossel";
import Heading from "../components/Heading";

export default function TestimonialsSection() {
  return (
    <section className="flex flex-col gap-20 w-full">
      <div className="flex h-auto gap-10 items-center">
        <Heading
          fontSize="text-[40px]"
          bgColor="bg-[#B9FF66]"
          fontColor="text-black"
        >
          Testimonials
        </Heading>
        <p className="w-[580px]">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <div className="min-w-full h-full bg-[#191A23] rounded-[45px] flex items-center justify-center !py-17.5">
        <Carrossel />
      </div>
    </section>
  );
}
