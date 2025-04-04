import React, {HTMLAttributes} from "react";

interface YouTubeVideoProps extends HTMLAttributes<HTMLIFrameElement> {
  videoId: string;
}

export const YouTubeVideo: React.FC<YouTubeVideoProps> = ({videoId, ...rest}) => {
  return (
    <iframe
      height="500"
      src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&cc_load_policy=0`}
      title="YouTube video player"
      style={{width: "100%"}}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      {...rest}
    ></iframe>
  );
}
