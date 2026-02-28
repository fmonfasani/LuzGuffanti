"use client";

import MuxPlayer from "@mux/mux-player-react";
import { useState } from "react";

type MuxPortfolioItemProps = {
    playbackId: string;
    alt: string;
    poster?: string;
};

export function MuxPortfolioItem({ playbackId, alt, poster }: MuxPortfolioItemProps) {
    const [isHovered, setIsHovered] = useState(false);

    const thumbnailBase = `https://image.mux.com/${playbackId}/thumbnail.jpg`;
    const defaultPoster = poster || `${thumbnailBase}?time=0`;

    return (
        <div
            className="relative group aspect-[9/16] rounded-xl overflow-hidden bg-white dark:bg-neutral-900 border border-gray-100 dark:border-gray-800 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <MuxPlayer
                streamType="on-demand"
                playbackId={playbackId}
                poster={defaultPoster}
                autoPlay={isHovered ? "muted" : false}
                loop
                muted
                className="w-full h-full object-cover"
                style={{ aspectRatio: "9/16" }}
                metadata={{
                    video_title: alt,
                }}
            />

            {/* Overlay for Title on Hover */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-end">
                <span className="text-white font-medium text-sm">{alt}</span>
            </div>
        </div>
    );
}
