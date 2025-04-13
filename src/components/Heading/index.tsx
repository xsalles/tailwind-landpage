import { HeadingProps } from "../../interfaces";

export default function Heading({
    children,
    fontColor,
    bgColor,
}: HeadingProps) {
  return (
    <h2 className={`${fontColor} ${bgColor} inline-block px-[7px] rounded-[7px] text-[40px] font-medium `}>
      {children}
    </h2>
  )
}
