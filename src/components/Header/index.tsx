import { logos } from "../../constants/icons";
import Button from "../Button";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <img src={logos.logoBlack} alt="Logo da Positivus preta" />
      <nav className="flex gap-10 items-center">
        <a href="">About us</a>
        <a href="">Services</a>
        <a href="">Use Cases</a>
        <a href="">Pricing</a>
        <a href="">Blog</a>
        <Button bgColor="bg-transparent" fontColor="text-grey" width="w-[248px]">
            Request a quote
        </Button>
      </nav>
    </header>
  );
}
