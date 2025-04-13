import { iconsCompany } from "../constants/icons";

export default function CompanySection() {
  return (
    <section className="flex h-auto w-full justify-between gap-[94px] flex-wrap">
      <img src={iconsCompany.amazon} alt="Logo da parceira Amazon" />
      <img src={iconsCompany.dribble} alt="Logo da parceira Dribble" />
      <img src={iconsCompany.hubspot} alt="Logo da parceira Hubspot" />
      <img src={iconsCompany.netflix} alt="Logo da parceira Netflix" />
      <img src={iconsCompany.notion} alt="Logo da parceira Notion" />
      <img src={iconsCompany.zoom} alt="Logo da parceira Zoom" />
    </section>
  );
}
