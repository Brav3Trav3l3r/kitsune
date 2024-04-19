import { anime, episode } from "@/app/_types/api/anime";
import Link from "next/link";
import { z } from "zod";
import Episode from "./episode";

type Episodes = z.infer<typeof episode>[];

const fetchEpisodes = async (animeId: string): Promise<Episodes> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CONSUMET_URL}/meta/anilist/episodes/${animeId}`
  );

  if (!res.ok) {
    throw new Error("Could not fetch episodes");
  }

  return res.json();
};

export default async function Episodes({ animeId }: { animeId: string }) {
  const episodes = await fetchEpisodes(animeId);

  return (
    <div className="grid grid-cols-5 gap-2 p-1 ">
      {episodes.map((episode, index) => (
        <Episode
          animeId={animeId}
          index={index}
          epId={episode.id}
          key={episode.id}
        />
      ))}
    </div>
  );
}
