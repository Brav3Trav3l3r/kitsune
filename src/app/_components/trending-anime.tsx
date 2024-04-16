import { z } from "zod";
import AnimeCard from "./anime-card";
import { title } from "../_types/api/anime";

const trendingAnime = z.object({
  id: z.string(),
  malId: z.number(),
  title: title,
  image: z.string(),
  type: z.string(),
  totalEpisodes: z.number(),
});

const response = z.object({
  currentPage: z.union([z.string(), z.number()]),
  results: z.array(trendingAnime),
});

type AnimeResponse = z.infer<typeof response>;

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
    response.parse(trendings);
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
