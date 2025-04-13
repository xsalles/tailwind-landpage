import { HeadingProps } from "../../interfaces";

export default function Heading({
    children,
    fontColor,
    bgColor,
    fontSize
}: HeadingProps) {
  return (
    <h2 className={`${fontColor} ${bgColor} inline-block !px-2 rounded-[7px] ${fontSize} font-medium`}>
      {children}
    </h2>
  )
}
