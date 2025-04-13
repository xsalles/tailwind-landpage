import "../../../tailwind.css";
import { ButtonProps } from "../../interfaces";

export default function Button({
  children,
  width,
  bgColor,
  fontColor,
}: ButtonProps) {
  return (
    <button
      className={`${width} ${bgColor} ${fontColor} h-[68px] rounded-[14px] text-[20px] font-normal text-center cursor-pointer`}
    >
      {children}
    </button>
  );
}
