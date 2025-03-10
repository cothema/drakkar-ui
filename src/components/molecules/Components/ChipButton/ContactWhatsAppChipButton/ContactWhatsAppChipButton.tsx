import React from "react";
import {ChipButton} from "../../../../atoms/ChipButton/ChipButton";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons/faWhatsapp";

type ContactWhatsAppChipButtonProps = {
  title?: string;
};

export const ContactWhatsAppChipButton: React.FC<ContactWhatsAppChipButtonProps> = ({title}) => {
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
