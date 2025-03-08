import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

type ChipButtonProps = {
  title?: string;
  children: React.ReactNode;
  faIcon?: IconDefinition;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ChipButton: React.FC<ChipButtonProps> = (
  {
    title,
    children,
    faIcon,
    ...rest
  }
) => {
  return (
    <button
      title={title}
      className="mx-2 px-4 py-2 rounded-full bg-gray-200 text-black"
      {...rest}
    >
      {faIcon && <FontAwesomeIcon icon={faIcon} className="me-2"/>}
      {children}
    </button>
  );
};
