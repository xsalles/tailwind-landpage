import { iconsCompany } from "../../constants/icons";
import { CardTeamProps } from "../../interfaces";

export default function CardTeam({
  photo,
  description,
  name,
  position,
}: CardTeamProps) {
  return (
    <div className="flex flex-col !p-[40px_35px] w-full h-[331px] rounded-[45px] border-1 shadow-[0_5px_0_0_#191A23] gap-7">
      <div className="flex w-full justify-between place-items-end">
        <img
          className="w-[102px] h-[102px]"
          src={photo}
          alt={`Foto do nosso parceiro de time ${name}`}
        />
        <div className="flex flex-col h-auto w-auto !ml-5">
          <h4 className="text-[20px] font-medium w">{name}</h4>
          <p className="text-[18px]">{position}</p>
        </div>
        <a
          href="https://www.linkedin.com/in/pedro-sales-00090a274/"
          className="!mb-15"
        >
          <img
            src={iconsCompany.linkedin}
            alt="Foto que ao clicar você é redirecionado para o Linkedin do nosso cliente"
          />
        </a>
      </div>
      <hr className="w-full h-[1px]" />
      <p>{description}</p>
    </div>
  );
}
