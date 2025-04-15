import { useState } from "react";
import { FaqProps } from "../../interfaces";
import { iconsDropdown } from "../../constants/icons";

export default function Faq({ number, title, description }: FaqProps) {
  const [image, setImage] = useState(iconsDropdown.plus);
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState("bg-white");

  const handleImage = () => {
    if (image === iconsDropdown.plus) {
      setImage(iconsDropdown.minus);
    } else {
      setImage(iconsDropdown.plus);
    }
  };

  const handleVisibility = () => {
    setIsOpen(!isOpen);
  };

  const handleColor = () => {
    setBgColor(bgColor === "bg-white" ? "bg-[#B9FF66]" : "bg-white");
  };

  return (
    <div
      className={`flex flex-col gap-[30px] justify-between items-center ${bgColor} shadow-[0_5px_0_0_#191A23] !p-[41px_60px] rounded-[45px] border-1 border-black transition-all duration-500 ease-in-out`}
    >
      <div className="w-full flex gap-6 text-center justify-between">
        <div className="flex w-full gap-6 items-center">
          <h2 className="font-medium text-[60px]">{number}</h2>
          <h3 className="font-medium text-[30px] text-center">{title}</h3>
        </div>
        <button
          onClick={() => {
            handleImage(), handleVisibility(), handleColor();
          }}
        >
          <img
            src={image}
            alt={
              image === iconsDropdown.plus
                ? "Ao clicar você abre o Faq"
                : "Ao clicar você fecha o Faq"
            }
          />
        </button>
      </div>

      {isOpen && (
        <div className="flex gap-7.5 flex-col w-full">
          <hr className="w-full h-[1px]" />
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}
