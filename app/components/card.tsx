import { CardProps } from "../utils/interface";
import { FiDollarSign } from "react-icons/fi";
import Circles from "./circles";
export default function Card({
  titleOne,
  titleTwo,
  subtitle,
  description,
  width = "100%",
  widthLg = "400px",
}: CardProps) {
  return (
    <div
      className="border border-muted bg-card rounded-lg"
      style={{ width: width, maxWidth: widthLg }}
    >
      <div className="flex items-center flex-wrap border border-muted p-2 rounded-t-lg ">
        <div className="flex items-center">
          <Circles />

          <div className="flex justify-center p-1">
            <p className="text-md font-bold text-gray-400">
              ~/{titleOne}/{titleTwo}
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4 px-4">
          <FiDollarSign className="text-accent" size={12} />
          <p className="text-primary text-md font-bold">{subtitle}</p>
        </div>
        <p className="px-4 text-gray-400 mb-4">{description}</p>
      </div>
    </div>
  );
}