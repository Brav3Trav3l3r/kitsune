import { z } from "zod";
import { animeResponse } from "../types/api/anime";
import AnimeCard from "./anime-card";

type AnimeResponse = z.infer<typeof animeResponse>;

const getTrending = async (): Promise<AnimeResponse> => {
  const res = await fetch(
    `${process.env.CONSUMET_URL}/meta/anilist/trending?page=1&perPage=15`
  );

  if (!res.ok) {
    throw new Error("Could not fetch recent episodes");
  }

  return res.json();
};

export default async function TrendingAnime() {
  const trendings = await getTrending();

  try {
    animeResponse.parse(trendings);
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="grid grid-cols-5 gap-4 mt-6 gap-y-8">
      {trendings.results.map((anime) => (
        <div className="" key={anime.id}>
          <AnimeCard anime={anime} />
        </div>
      ))}
    </div>
  );
}
