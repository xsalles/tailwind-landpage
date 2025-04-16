import Form from "../components/Form";
import Heading from "../components/Heading";
import { illustrationsContact } from "../constants/illustrations";

export default function ContactUsSection() {
  return (
    <section>
      <div className="flex h-auto gap-10 items-center">
        <Heading
          fontSize="text-[40px]"
          bgColor="bg-[#B9FF66]"
          fontColor="text-black"
        >
          Contact Us
        </Heading>
        <p className="w-[580px]">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className="flex !p-[60px_0_80px_100px] bg-[#F3F3F3] justify-between !mt-20">
        <Form />
        <div className="relative w-[600px] h-[600px]">
          <img
            src={illustrationsContact.contact}
            alt="Contact Illustration"
            className="absolute top-0 left-70 object-contain w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
