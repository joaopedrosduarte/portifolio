import { IconProps } from "@phosphor-icons/react";
import { ReactElement } from "react";
import cn from "../util/cn";

interface ButtonProps {
  component?: ReactElement<IconProps>;
  content: string;
  className?: string
  spanClassName?: string;

}

export default function HeroButton({ component, content, className = "", spanClassName="text-darkmode-maintext" }: ButtonProps) {
  console.log(className)
  return (
    <a href="src/static/cv.pdf" target="_blank" className={cn(className ,"cursor-pointer duration-200 px-4 py-3 transition-all justify-center items-center rounded-lg flex gap-2")}>
      <p className={cn(spanClassName, "font-medium mb4:text-base text-sm")}>
        {content}
      </p>
      {
        component ?? component 
      }
    </a>
  );
}
