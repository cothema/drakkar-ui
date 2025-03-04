import React from "react";
import {ChipButton} from "../../../atoms/ChipButton/ChipButton";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons/faWhatsapp";

type ContactMailChipButtonProps = {
  title?: string;
};

export const ContactWhatsAppChipButton: React.FC<ContactMailChipButtonProps> = ({title}) => {
  return (
    <ChipButton
      title={title}
      faIcon={faWhatsapp}
      style={{backgroundColor: "#25D366", color: "#ffffff"}}
    >
      WhatsApp
    </ChipButton>
  );
};
