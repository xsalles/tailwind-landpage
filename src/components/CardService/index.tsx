import { CardServiceProps, HeadingProps } from "../../interfaces";
import Heading from "../Heading";

export default function CardService({
  bgColor,
  fontColor,
  children,
  imageLink,
  fontColorCard,
  illustration,
  bgColorCard,
  fontSize
}: HeadingProps & CardServiceProps) {
  return (
    <div className={`flex ${bgColorCard} rounded-[45px] border-1 shadow-[0_5px_0_0_#191A23] !p-12.5 justify-between`}>
      <div className="flex flex-col justify-between ">
        <Heading bgColor={bgColor} children={children} fontColor={fontColor} fontSize={fontSize} />
        <div className="flex w-[164px] gap-[15px] justify-between text-center items-center">
          <img src={imageLink} alt="Aprenda mais sobre o assunto" />
          <p className={fontColorCard}>Learn more</p>
        </div>
      </div>
      <img className="w-[210px] h-[170px]" src={illustration} alt="Ilustração do que nós oferecemos" />
    </div>
  );
}
