"use client";

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

type PortfolioItemProps = {
  videoSrc?: string;
  alt: string;
};

export function PortfolioItem({ videoSrc, alt }: PortfolioItemProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isDriveLink = videoSrc?.includes("drive.google.com");
  const isYoutube =
    videoSrc?.includes("youtube.com") || videoSrc?.includes("youtu.be");
  // Asumimos que es Cloudinary si no es URL externa conocida (simple heurística para empezar)
  // O podemos explícitamente chequear si no empieza con http/https, asumiendo que es un PublicID
  const isCloudinary = videoSrc && !videoSrc.startsWith("http");

  const getYoutubeEmbedUrl = (url: string) => {
    let videoId = "";

    if (url.includes("/shorts/")) {
      const parts = url.split("/shorts/");
      videoId = parts[1].split("?")[0];
    } else if (url.includes("v=")) {
      videoId = url.split("v=")[1].split("&")[0];
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    }

    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&loop=1&playlist=${videoId}&playsinline=1&vq=hd1080`;
  };

  const handleClick = () => {
    if (isDriveLink && videoSrc) {
      window.open(videoSrc, "_blank", "noopener,noreferrer");
      return;
    }

    if (isYoutube || isCloudinary) {
      return;
    }

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (isYoutube && videoSrc) {
    return (
      <div className="relative group aspect-[9/16] rounded-lg overflow-hidden bg-card-light dark:bg-card-dark">
        <iframe
          src={getYoutubeEmbedUrl(videoSrc)}
          className="w-full h-full object-cover"
          title={alt}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  if (isCloudinary && videoSrc) {
    return (
      <div className="relative group aspect-[9/16] rounded-lg overflow-hidden bg-card-light dark:bg-card-dark">
        <CldVideoPlayer
          width="1080"
          height="1920"
          src={videoSrc}
          autoplay="on-scroll"
          loop
          muted
          controls={false}
          className="w-full h-full object-cover"
          transformation={{
            quality: "auto",
            fetchFormat: "auto", // Optimización automática a mp4/webm/av1
          }}
        />
      </div>
    );
  }

  return (
    <div
      className="relative group aspect-[9/16] rounded-lg overflow-hidden bg-card-light dark:bg-card-dark cursor-pointer"
      onClick={handleClick}
    >
      {videoSrc && !isDriveLink && !isCloudinary ? (
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full object-cover"
          loop
          playsInline
        />
      ) : (
        <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex flex-col items-center justify-center p-4 text-center">
          <span className="text-gray-500 font-medium mb-2">{alt}</span>
          <span className="text-xs text-gray-400">
            {isDriveLink ? "Ver en Google Drive" : "Video no disponible"}
          </span>
        </div>
      )}

      {/* Overlay for manual video tag support (fallback) */}
      {!isCloudinary && !isDriveLink && videoSrc && (
        <div
          className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
        >
          <div className="bg-primary rounded-full p-3">
            {isPlaying ? (
              <Pause className="text-white w-6 h-6" />
            ) : (
              <Play className="text-white w-6 h-6" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
