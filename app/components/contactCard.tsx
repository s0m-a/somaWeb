import { contactCardProps } from "../utils/interface";
import DownloadButton from "./buttons";
import Circles from "./circles";
import { FiDollarSign } from "react-icons/fi";

export default function ContactCard({
    width,
    widthLg,
    title,
    header,
}: contactCardProps) {
return (
  <div
    className="border border-muted bg-card rounded-lg flex flex-col gap-2 shadow shadow-muted w-full "
    style={{ width: width, maxWidth: widthLg }}
  >
    <div className="flex items-center flex-wrap border border-b border-muted p-2">
      <Circles />
      <p className="ml-8">{title}</p>
    </div>
    <div className="flex items-center justify-center">
      <div className="p-2 md:p-4 flex items-center gap-2">
        <FiDollarSign className="text-accent" size={12} />
        <p className="text-lg font-bold text-primary">{header}</p>
      </div>
    </div>
    <div className="p-2 md:p-4 text-center">
      <p className=" text-lg md:text-2xl font-bold">
        Let&apos;s Build Something Amazing
      </p>
      <p className="text-gray-400  text-sm md:text-md font-bold">
        Always interested in new opportunities and collaborations
      </p>
      <div className="mt-4 flex justify-center  border-b border-muted py-4 md:py-8">
        <DownloadButton
          className="w-[300px] md:w-[600px]"
          direction="col"
          width="100%"
          widthLg="800px"
        />
      </div>
      <p className="text-gray-400 text-sm md:text-md font-italic mt-4">© 2025 Nmesoma Anita. Built with React + TypeScript</p>
    </div>
  </div>
);
}