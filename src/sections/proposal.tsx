import Button from "../components/Button";
import { illustrationsProposal } from "../constants/illustrations";

export default function ProposalSection() {
  return (
    <section className="flex gap-[186px] bg-[#F3F3F3] w-[100%] h-[347px] rounded-[45px] justify-between items-center !p-[0_60px]">
      <div className="flex flex-col !gap-26px w-[500px] h-[227px] justify-between">
        <h3 className="font-medium text-[30px]">Let’s make things happen</h3>
        <p>
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <Button bgColor="bg-[#191A23]" fontColor="text-white" width="w-[288px]">Get your free proposal</Button>
      </div>
      <img className="w-[494px] h-[394px] relative" src={illustrationsProposal.proposal} alt="Ilustração de proposta" />
    </section>
  );
}
