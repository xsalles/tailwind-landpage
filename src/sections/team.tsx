import Heading from "../components/Heading";
import CardTeam from "../components/CardTeam";
import { teamMembers } from "../data/data";

export default function TeamSection() {
  return (
    <section>
      <div className="flex h-auto gap-10">
        <Heading
          fontSize="text-[40px]"
          bgColor="bg-[#B9FF66]"
          fontColor="text-black"
        >
          Team
        </Heading>
        <p className="w-[580px]">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 !mt-20">
        {teamMembers.map((members) => (
          <CardTeam
            key={members.id}
            description={members.description}
            name={members.name}
            position={members.position}
            photo={members.photo}
          />
        ))}
      </div>
    </section>
  );
}
