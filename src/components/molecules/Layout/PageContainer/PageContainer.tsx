import React, {HTMLAttributes, ReactNode} from "react";

interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {
  heading: string | ReactNode;
  description?: string | ReactNode;
  children: ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({heading, description, children, ...rest}) => {
  return (
    <div className="container mx-auto px-4" {...rest}>
      <div className="py-6 mt-8 pt-md-5 pb-md-4 mx-auto text-center">
        <h2 className="display-4">
          {heading}
        </h2>

        {description && <p className="mt-4 text-lg text-gray-600">{description}</p>}
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
