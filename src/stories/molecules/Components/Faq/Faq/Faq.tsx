import React from "react";

interface FaqProps {
  children: React.ReactNode;
}

export const Faq: React.FC<FaqProps> = ({children}) => {
  return (
    <div className="lg:w-8/12 w-full mx-auto shadow-lg bg-gray-50 dark:bg-primary">
      {children}
      <hr className="w-full lg:mt-10 my-8"/>
    </div>
  );
};
