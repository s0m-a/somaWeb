
export interface TypingTextProps {
  texts: string[];
  speed: number;
  deleteSpeed: number;
  pauseDuration: number;
  className?: string;
}

export interface ButtonProps {
    text: string;
    icon: React.ReactNode;
    link: string;
}

export interface CardProps {
  titleOne: string;
  titleTwo: string;
  subtitle: string;
  description: string;
  width: string;
  widthLg: string;
}
export interface SecondCardProp{
  icon: React.ReactNode;
  header: string;
  body: string;
}
export interface ProjectCardProps {
    titleOne: string;
    titleTwo: string;
    titleThree: string;
    subtitle: string;
    link: string;
    image: string;
    items: string[];
    description: string;
    width: string;
    widthLg: string;
}

export interface BlockProps {
    text: string;
    className?: string;
}
export interface SkillCardProps {
    title: string;
    skills: string[];
    header: string;
    width: string;
    widthLg: string;
}

export interface contactCardProps {
    title: string;
    header: string;
    width: string;
    widthLg: string;
}

