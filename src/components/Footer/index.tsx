import { iconsFooter, logos } from "../../constants/icons";
import Button from "../Button";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-12.5 bg-[#191A23] rounded-[45px_45px_0_0] !p-15 h-full">
      <div className="flex justify-between items-center">
        <img src={logos.logoWhite} alt="Logo da Positivus branca" />
        <nav className="flex gap-10 text-white underline text-[18px]">
          <a href="">About Us</a>
          <a href="">Services</a>
          <a href="">Use Cases</a>
          <a href="">Pricing</a>
          <a href="">Blog</a>
        </nav>
        <div className="flex gap-5">
          <img src={iconsFooter.linkedinWhite} alt="Logo do Linkedin" />
          <img src={iconsFooter.facebook} alt="Logo do facebook" />
          <img src={iconsFooter.twitter} alt="Logo do twitter" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-5">
          <h4 className="bg-[#B9FF66] !p-[0_7px] rounded-[7px] w-fit font-medium text-[18px]">Contact us:</h4>
          <div className="text-white flex flex-col gap-5 text-[18px]">
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
          </div>
        </div>
        <div className="flex bg-[#292A32] !p-[58px_40px] w-[634px] justify-between rounded-[14px]">
          <input className=" border-1 border-white rounded-[7px] !p-[22px_35px] w-[285px] text-white placeholder:text-white" type="text" placeholder="Email" />
          <Button bgColor="bg-[#B9FF66]" fontColor="text-black" width="w-[249px]">
            Subscribe to news
          </Button>
        </div>
      </div>
      <hr className=" border-white" />
      <div className="flex text-white text[18px] gap-5">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <p className="underline">Privacy Policy</p>
      </div>
    </footer>
  );
}
