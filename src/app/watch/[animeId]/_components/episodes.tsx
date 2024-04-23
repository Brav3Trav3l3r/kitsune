import { episode } from "@/app/_types/api/anime";
import Episode from "./episode";
import { z } from "zod";

type Episodes = z.infer<typeof episode>[];

export default async function Episodes({
  episodes,
  animeId,
}: {
  episodes: Episodes;
  animeId: string;
}) {
  return (
    <div className="grid grid-cols-5 gap-2 p-1">
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
