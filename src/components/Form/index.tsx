import Button from "../Button";

export default function Form() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-5">
        <div className="flex gap-3.5">
          <input
            type="radio"
            name="contactOption"
            id="sayHi"
            value="Say Hi"
            className="accent-[#B9FF66]"
          />
          <label htmlFor="sayHi">Say Hi</label>
        </div>

        <div className="flex gap-3.5">
          <input
            type="radio"
            name="contactOption"
            id="getQuote"
            value="Get a quote"
            className="accent-[#B9FF66]"
          />
          <label htmlFor="getQuote">Get a quote</label>
        </div>
      </div>

      <form action="" className="flex flex-col gap-5 mt-10 w-[556px]">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            required
            placeholder="Name"
            className="w-full !h-[59px] border-1 border-black rounded !p-[18px_30px] "
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            required
            placeholder="Email"
            className="w-full h-[59px] border-1 border-black rounded !px-7.5 !py-4.5"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            required
            placeholder="Your message here"
            className="w-full h-[59px] border-1 border-black rounded !px-7.5 !py-4.5 min-h-[190px]"
          ></textarea>
        </div>

        <Button
          bgColor="bg-[#191A23]"
          fontColor="text-white"
          width="w-full !mt-5"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}
