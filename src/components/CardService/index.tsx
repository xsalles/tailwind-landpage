import Heading from "../Heading";
import { CardServiceProps, HeadingProps } from "../../interfaces";

export default function CardService(
  { bgColor, fontColor, children }: HeadingProps,
  { imageLink, fontColorCard, illustration }: CardServiceProps
) {
  return (
    <div className="flex justify-between w-[600px] h-[310px] p-12.5">
      <div className="flex flex-col justify-between">
        <Heading bgColor={bgColor} children={children} fontColor={fontColor} />
        <div className="flex w-auto justify-between">
          <img src={imageLink} alt="Aprenda mais sobre o assunto" />
          <p className={fontColorCard}>Learn more</p>
        </div>
      </div>
      <img src={illustration} alt="Ilustração do que nós oferecemos" />
    </div>
  );
}
