"use client";
import { GoDownload } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  direction?: "row" | "col";
  width?: string;
  widthLg?: string;
};

export default function DownloadButton({ className = "", direction = "row", width = "100%", widthLg = "400px" }: ButtonProps) {
  return (
    <button
      onClick={() => {
        const link = document.createElement("a");
        link.href =
          "https://drive.google.com/uc?export=download&id=1e_qHyqb6OqUwXpQRqmZJq-gAMqWpQW_-";
        link.download = "Nmesoma_Aniat.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}
      className={`flex ${direction === "row" ? "flex-row" : "flex-col"} gap-4 items-center  `}
    >
      <div
        className={`flex items-center gap-2 bg-primary text-primary-foreground p-2 rounded-lg  justify-center cursor-pointer shadow-lg ${className}`}
        style={{ boxShadow: " 0 0 20px hsl(190 100% 60% / 0.5)" }}
      >
        <GoDownload />
        Download Resume
      </div>
      <div className="flex items-center gap-6">
        <a href="https://github.com/s0m-a">
          <FiGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/nmesoma-anita">
          <FaLinkedinIn size={20} />
        </a>
        <a href="mailto:ogbennaanita@gmail.com">
          <MdOutlineMailOutline size={20} />
        </a>
      </div>
    </button>
  );
}
