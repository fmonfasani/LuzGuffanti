"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import MuxPlayer from "@mux/mux-player-react";

type PortfolioItemProps = {
  videoSrc?: string;
  playbackId?: string;
  alt: string;
};

export function PortfolioItem({ videoSrc, playbackId, alt }: PortfolioItemProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const cloudName =
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "ddc5jpwq7";

  const getCloudinaryUrl = (publicId: string) => {
    if (!publicId) return "";
    if (publicId.startsWith("http")) {
      // Si ya es una URL de Cloudinary, nos aseguramos de que tenga f_auto,q_auto
      if (
        publicId.includes("cloudinary.com") &&
        !publicId.includes("/f_auto,q_auto/")
      ) {
        return publicId.replace("/upload/", "/upload/f_auto,q_auto/");
      }
      return publicId;
    }
    return `https://res.cloudinary.com/${cloudName}/video/upload/f_auto,q_auto/${publicId}`;
  };

  const getCloudinaryPoster = (urlOrId: string) => {
    if (!urlOrId) return "";
    let baseUrl = "";
    if (urlOrId.startsWith("http")) {
      baseUrl = urlOrId;
    } else {
      baseUrl = `https://res.cloudinary.com/${cloudName}/video/upload/${urlOrId}`;
    }

    // Transformamos en imagen (JPG) y buscamos el frame de inicio
    return baseUrl
      .replace("/video/upload/", "/video/upload/so_auto,f_jpg,q_auto/")
      .replace(/\.[^/.]+$/, ".jpg"); // Cambia la extensión a .jpg
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

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current
          .play()
          .catch((err) => console.error("Error playing:", err));
        // Al interactuar manualmente, podemos habilitar sonido
        setIsMuted(false);
        setShowControls(true);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      // Si activamos sonido, mostramos controles nativos para que el usuario maneje el volumen
      if (!newMutedState) setShowControls(true);
    }
  };

  useEffect(() => {
    if (videoRef.current && isCloudinary) {
      if (isHovered) {
        videoRef.current.play().catch(() => { });
        setIsPlaying(true);
      } else if (!showControls) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isHovered, isCloudinary, showControls]);

  // Sincronización forzada con el elemento DOM
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.controls = showControls;
    }
  }, [isMuted, showControls]);

  // Mux Player rendering logic
  if (playbackId) {
    console.log(`[PortfolioItem] Using MUX for: ${alt}`, { playbackId });
    return (
      <div
        className="relative group aspect-[9/16] rounded-xl overflow-hidden bg-white dark:bg-neutral-900 border border-gray-100 dark:border-gray-800 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <MuxPlayer
          streamType="on-demand"
          playbackId={playbackId}
          poster={`https://image.mux.com/${playbackId}/thumbnail.jpg`}
          autoPlay={isHovered ? "muted" : false}
          loop
          muted
          className="w-full h-full object-cover"
          style={{ aspectRatio: "9/16" }}
        />
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-end">
          <span className="text-white font-medium text-sm">{alt}</span>
        </div>
      </div>
    );
  }

  if (videoSrc) {
    console.log(`[PortfolioItem] Using CLOUDINARY/EXTERNAL for: ${alt}`, { videoSrc });
  }

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
            autoPlay
            muted={isMuted}
            playsInline
            controls={showControls}
            controlsList="nodownload"
            poster={getCloudinaryPoster(videoSrc)}
          />

          {/* Botón Flotante de Sonido */}
          <button
            onClick={toggleMute}
            className="absolute top-4 right-4 z-30 bg-black/50 backdrop-blur-md p-3 rounded-full border border-white/20 text-white hover:bg-primary transition-all shadow-lg"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gray-50 dark:bg-neutral-800">
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 mb-4 flex items-center justify-center"></div>
          <span className="text-gray-500 font-medium text-sm">{alt}</span>
          <span className="text-[10px] text-gray-400 mt-1 uppercase tracking-tighter">
            Disponible próximamente
          </span>
        </div>
      )}
    </div>
  );
}

