import { SecondCardProp } from "../utils/interface"


export default function SecondCard({
    icon,
    header,
    body
}: SecondCardProp){
    return (
      <div className="flex flex-col items-center w-full md:w-[350px] h-[200px] border border-muted rounded-lg bg-card justify-center shadow-lg my-6">
        <div className="w-[50px] h-[50px] bg-accent-foreground border border-primary border-size-1 flex  items-center justify-center rounded-lg text-primary  mb-6">
          {icon}
        </div>
        <div className="text-center ">
          <p className="text-md font-bold mb-4">{header}</p>
          <p className="text-sm text-gray-400 px-4">{body}</p>
        </div>
      </div>
    );
    
}