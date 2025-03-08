import React, {HTMLAttributes} from "react";

interface ArticleCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({title, description, ...rest}) => {
  return (
    <div className="mt-3 inline-block" {...rest}>
      <div className="border rounded-lg p-6 shadow hover:shadow-lg transition" {...rest}>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <div className="text-right">
          <span className="text-blue-600 mt-3 inline-block hover:underline">Číst více →</span>
        </div>
      </div>
    </div>
  );
}
