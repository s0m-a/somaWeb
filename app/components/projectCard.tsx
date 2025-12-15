import Image from "next/image";
import { ProjectCardProps } from "../utils/interface";
import { FiDollarSign } from "react-icons/fi";
import Block from "./block";
import Circles from "./circles";
export default function ProjectCard({
    titleOne,
    titleTwo,
    titleThree,
    subtitle,
    image,
    description,
    link,
    items,
    width = "100%",
    widthLg = "400px",
}: ProjectCardProps){
    return (
      <div
        className="border border-muted rounded-lg"
        style={{ width: width, maxWidth: widthLg }}
      >
        <div className="flex items-center flex-wrap border border-muted p-2 rounded-t-lg ">
          <div className="flex items-center">
            <Circles />

            <div className="flex justify-center p-1 ml-20">
              <p className="text-md font-bold text-gray-400">
                ~/{titleOne}/{titleTwo}
              </p>
            </div>
          </div>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-b-lg"
        >
          <Image
            src={image}
            alt=""
            width={500}
            height={300}
            className="transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </a>

        <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <FiDollarSign className="text-accent" size={12} />
            <p className="text-primary text-md font-bold">{subtitle}</p>
          </div>
          <p>{description}</p>
          <div className="flex items-center gap-2 my-4">
            <FiDollarSign className="text-accent" size={12} />
            <p className="text-primary text-md font-bold">{titleThree}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <Block key={item} text={item} className="text-sm p-2" />
            ))}
          </div>
        </div>
      </div>
    );
}