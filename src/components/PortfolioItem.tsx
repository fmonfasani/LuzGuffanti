"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

type PortfolioItemProps = {
  videoSrc?: string;
  alt: string;
};

export function PortfolioItem({ videoSrc, alt }: PortfolioItemProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const cloudName =
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "ddc5jpwq7";

  // Construir la URL de Cloudinary con optimizaciones
  const getCloudinaryUrl = (publicId: string) => {
    // Si ya es una URL completa de Cloudinary, la usamos
    if (publicId.startsWith("http")) return publicId;

    // Si es solo un ID, construimos la URL optimizada
    // f_auto: formato automático (mp4, webm, etc)
    // q_auto: calidad automática
    return `https://res.cloudinary.com/${cloudName}/video/upload/f_auto,q_auto/${publicId}`;
  };

  const isExternal = videoSrc?.startsWith("http");
  const isYoutube =
    videoSrc?.includes("youtube.com") || videoSrc?.includes("youtu.be");
  const isCloudinary = videoSrc && !isYoutube && !isExternal;

  const getYoutubeEmbedUrl = (url: string) => {
    let videoId = "";
    if (url.includes("/shorts/")) {
      videoId = url.split("/shorts/")[1].split("?")[0];
    } else if (url.includes("v=")) {
      videoId = url.split("v=")[1].split("&")[0];
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    }
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&loop=1&playlist=${videoId}&playsinline=1&autoplay=1&mute=1`;
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Autoplay on scroll/hover logic for native video
  useEffect(() => {
    if (videoRef.current && isCloudinary) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isHovered, isCloudinary]);

  if (isYoutube && videoSrc) {
    return (
      <div className="relative group aspect-[9/16] rounded-xl overflow-hidden bg-card-light dark:bg-card-dark shadow-lg">
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

  return (
    <div
      className="relative group aspect-[9/16] rounded-xl overflow-hidden bg-white dark:bg-neutral-900 border border-gray-100 dark:border-gray-800 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={togglePlay}
    >
      {videoSrc ? (
        <>
          <video
            ref={videoRef}
            src={getCloudinaryUrl(videoSrc)}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            poster={`https://res.cloudinary.com/${cloudName}/video/upload/so_auto,f_jpg,q_auto/${videoSrc}`}
          />

          {/* Overlay Controls */}
          <div
            className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
          >
            <div className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/30 transform transition-transform group-hover:scale-110">
              {isPlaying ? (
                <Pause className="text-white w-6 h-6 fill-white" />
              ) : (
                <Play className="text-white w-6 h-6 fill-white ml-0.5" />
              )}
            </div>
          </div>

          {/* Label Tag */}
          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-[10px] text-white/70 uppercase tracking-widest font-bold bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
              {alt}
            </span>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gray-50 dark:bg-neutral-800">
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 mb-4 flex items-center justify-center">
            <Play className="w-5 h-5 text-gray-400 opacity-50" />
          </div>
          <span className="text-gray-500 font-medium text-sm">{alt}</span>
          <span className="text-[10px] text-gray-400 mt-1 uppercase tracking-tighter">
            Disponible próximamente
          </span>
        </div>
      )}
    </div>
  );
}
