"use client";

import { anime, episode } from "@/app/_types/api/anime";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { z } from "zod";

type Anime = z.infer<typeof anime>;

export default function EpInfo({ animeInfo }: { animeInfo: Anime }) {
  const searchParams = useSearchParams();
  const epId = searchParams.get("ep");
  const episode = animeInfo.episodes.find((ep) => ep.id === epId);

  return (
    <div className="mt-6">
      <p className="font-semibold">
        {episode?.title ?? `Ep. ${episode?.number}`}
      </p>
      <div className="flex gap-4 mt-2">
        <Link href={`/anime/${animeInfo.id}`}>
          <div className="aspect-[2/3] h-28 rounded overflow-hidden">
            <img
              src={animeInfo.image}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        <div className="flex flex-col gap-1 ">
          <p className="">
            {animeInfo.title.english ?? animeInfo.title.romaji}
          </p>
          <p className="text-foreground/50 text-sm">
            {animeInfo.type} - {animeInfo.totalEpisodes} Episodes (
            {animeInfo.status})
          </p>

          <p className="text-foreground/50 text-sm">
            {animeInfo.season} {animeInfo.releaseDate}
          </p>
        </div>
      </div>
    </div>
  );
}
