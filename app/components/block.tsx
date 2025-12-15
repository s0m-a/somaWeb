import { BlockProps } from "../utils/interface";

export default function Block({ text, className = "" }: BlockProps) {
  return (
    <div className={`border border-muted rounded-lg w-auto ${className}`}>
      {text}
    </div>
  );
}
