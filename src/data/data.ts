import { iconsLinks } from "../constants/icons";
import { illustrationsPeople, illustrationsServices } from "../constants/illustrations";

export const services = [
  {
    id: 1,
    title: "Search engine optimization",
    illustration: illustrationsServices.magnifier,
    arrowIcon: iconsLinks.blackGreen,
    bgColor: "bg-[#F3F3F3]",
    fontColor: "text-black", 
  },
  {
    id: 2,
    title: "Pay-per-click advertising",
    illustration: illustrationsServices.click,
    arrowIcon: iconsLinks.blackGreen,
    bgColor: "bg-[#B9FF66]",
    fontColor: "text-black", 
  },
  {
    id: 3,
    title: "Social Media Marketing",
    illustration: illustrationsServices.emoji,
    arrowIcon: iconsLinks.whiteBlack,
    bgColor: "bg-[#191A23]",
    fontColor: "text-white",
  },
  {
    id: 4,
    title: "Email Marketing",
    illustration: illustrationsServices.email,
    arrowIcon: iconsLinks.blackGreen,
    bgColor: "bg-[#F3F3F3]",
    fontColor: "text-black", 
  },
  {
    id: 5,
    title: "Content Creation",
    illustration: illustrationsServices.content,
    arrowIcon: iconsLinks.blackGreen,
    bgColor: "bg-[#B9FF66]",
    fontColor: "text-black", 
  },
  {
    id: 6,
    title: "Analytics and Tracking",
    illustration: illustrationsServices.analytics,
    arrowIcon: iconsLinks.whiteBlack,
    bgColor: "bg-[#191A23]",
    fontColor: "text-white", 
  },
];

export const caseStudies = [
  {
    id: 1,
    description:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    id: 2,
    description:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    id: 3,
    description:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

export const faqData = [
  {
    number: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    description:
      "We analyze market trends and your competitors to build a customized marketing strategy that aligns with your goals and target audience.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Our team puts the strategy into action, managing all aspects of execution, from content creation to campaign launch.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    description:
      "We track performance, analyze metrics, and make data-driven adjustments to maximize the success of your marketing efforts.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    description:
      "You receive regular reports and updates, keeping you informed about progress, performance, and next steps.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    description:
      "We continuously refine strategies based on data, feedback, and market shifts to ensure long-term growth and effectiveness.",
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    position: "CEO and Founder",
    description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
    photo: illustrationsPeople.john
  },
  {
    id: 2,
    name: "Jane Doe",
    position: "Director of Operations",
    description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills.",
    photo: illustrationsPeople.jane
  },
  {
    id: 3,
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.",
    photo: illustrationsPeople.michael
  },
  {
    id: 4,
    name: "Emily Johnson",
    position: "PPC Manager",
    description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.",
    photo: illustrationsPeople.emily
  },
  {
    id: 5,
    name: "Brian Williams",
    position: "Social Media Specialist",
    description: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement.",
    photo: illustrationsPeople.brian
  },
  {
    id: 6,
    name: "Sarah Kim",
    position: "Content Creator",
    description: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries.",
    photo: illustrationsPeople.sarah
  }
];
