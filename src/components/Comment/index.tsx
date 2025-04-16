import { CommentProps } from "../../interfaces";

export default function Comment({ comment, client, position }: CommentProps) {
  return (
    <div className="flex flex-col gap-5 items-center justify-center w-[606px]">
      <div className="w-[606px] h-[237.95px] border-1 border-[#B9FF66] bg-transparent rounded-[45px] flex !p-12">
        <p className="text-white text-[18px]">{comment}</p>
      </div>

      <div className="flex-col flex h-auto">
        <h4 className="font-medium text-[20px] text-[#B9FF66]">{client}</h4>
        <p className="font-medium text-[20px] text-white">{position}</p>
      </div>
    </div>
  );
}
