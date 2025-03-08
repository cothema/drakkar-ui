import React, {FC, ReactNode, useState} from 'react';

interface FaqItemProps {
  children: ReactNode;
  counter?: string;
  title: string;
}

export const FaqItem: FC<FaqItemProps> = ({children, counter, title}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8"/>

      <div className="w-full px-4 md:px-6">
        <div className="flex justify-between items-center w-full cursor-pointer" onClick={toggleContent}>
          <div>
            <p
              className="flex justify-center items-center dark:text-white text-2xl font-bold leading-6 md:leading-4 text-primary text-left">
              <span
                className="lg:mr-6 mr-4 text-center font-anton dark:text-white text-title lg:text-2xl md:text-xl leading-6 md:leading-5 lg:leading-4"
                style={{minWidth: "2em"}}
              >
                {counter}
              </span>
              {title}
            </p>
          </div>
          <button
            aria-label="toggler"
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          >
            <img
              className={`transform ${isOpen ? 'rotate-180' : ''} dark:hidden`}
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
              alt="toggler"
            />
            <img
              className={`transform ${isOpen ? 'rotate-180' : ''} dark:block hidden`}
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
              alt="toggler"
            />
          </button>
        </div>
        <div className={`mt-6 w-full text-left ${isOpen ? 'block' : 'hidden'} text-xl`}>
          <div className="leading-6 text-primary dark:text-gray-300 font-normal">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
