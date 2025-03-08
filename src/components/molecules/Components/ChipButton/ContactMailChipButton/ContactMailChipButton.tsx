import React from "react";
import {faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons/faEnvelopeOpen";
import {ChipButton} from "../../../../atoms/ChipButton/ChipButton";

type ContactMailChipButtonProps = {
  title?: string;
  email: string;
};

export const ContactMailChipButton: React.FC<ContactMailChipButtonProps> = ({title, email}) => {
  return (
    <ChipButton
      title={title}
      faIcon={faEnvelopeOpen}
    >
      {email}
    </ChipButton>
  );
};
