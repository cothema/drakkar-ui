import React from "react";
import {ChipButton} from "../../../atoms/ChipButton/ChipButton";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";

type ContactMailChipButtonProps = {
  title?: string;
  phone: string;
};

export const ContactPhoneChipButton: React.FC<ContactMailChipButtonProps> = ({title, phone}) => {
  return (
    <ChipButton
      title={title}
      faIcon={faPhone}
    >
      {phone}
    </ChipButton>
  );
};
