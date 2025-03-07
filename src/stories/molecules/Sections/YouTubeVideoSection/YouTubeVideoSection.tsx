import React, {HTMLAttributes} from "react";
import {YouTubeVideo} from "../../../atoms/YouTubeVideo/YouTubeVideo";

interface YouTubeVideoSectionProps extends HTMLAttributes<HTMLDivElement> {
  videoId: string;
}

export const YouTubeVideoSection: React.FC<YouTubeVideoSectionProps> = ({videoId, ...rest}) => {
  return (
    <div className="mx-auto mt-10 text-center bg-gray-100 py-8" {...rest}>
      <div className="max-w-5xl mx-auto relative flex flex-wrap justify-center items-center">
        <YouTubeVideo videoId={videoId}/>
      </div>
    </div>
  );
}
