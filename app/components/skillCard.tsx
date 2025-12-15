import { SkillCardProps } from "../utils/interface";
import Block from "./block";
import Circles from "./circles";

export default function SkillCard({
  title,
  skills,
  header,
  width = "100%",
  widthLg = "400px",
}: SkillCardProps) {
  return (
    <div
      className="border border-muted bg-card rounded-lg flex flex-col gap-2 shadow shadow-muted w-full"
      style={{ width: width, maxWidth: widthLg }}
    >
      <div className="flex items-center flex-wrap border border-b border-muted p-2">
        <Circles />
        <p className="ml-8">{title}</p>
      </div>
      <div className="p-4">
        <p className="text-xl font-bold text-primary mb-4">{header}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Block
              key={skill}
              text={skill}
              className="text-sm p-2 md:text-md md:p-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
}