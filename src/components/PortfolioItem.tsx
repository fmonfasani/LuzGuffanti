"use client";

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

type PortfolioItemProps = {
  videoSrc?: string;
  alt: string;
};

export function PortfolioItem({ videoSrc, alt }: PortfolioItemProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className="relative group aspect-[9/16] rounded-lg overflow-hidden bg-card-light dark:bg-card-dark cursor-pointer"
      onClick={handleClick}
    >
      {videoSrc ? (
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full object-cover"
          loop
          playsInline
        />
      ) : (
        <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <span className="text-gray-500">Video</span>
        </div>
      )}

      {/* Overlay with play/pause icon */}
      <div className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
        <div className="bg-primary rounded-full p-3">
          {isPlaying ? (
            <Pause className="text-white w-6 h-6" />
          ) : (
            <Play className="text-white w-6 h-6" />
          )}
        </div>
      </div>
    </div>
  );
}