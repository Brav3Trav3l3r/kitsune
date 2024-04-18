import { RefreshCcw } from "lucide-react";
import { animeResponse, title } from "../_types/api/anime";
import AnimeCard from "./anime-card";
import { ZodError, z } from "zod";

const recentAnime = z.object({
  id: z.string(),
  title: title,
  image: z.string(),
  episodeId: z.string(),
  episodeNumber: z.number(),
  type: z.string(),
});

const response = z.object({
  currentPage: z.union([z.string(), z.number()]),
  totalResults: z.number(),
  results: z.array(recentAnime),
});

type AnimeResponse = z.infer<typeof response>;

const getRecentUpdated = async (): Promise<AnimeResponse> => {
  const res = await fetch(
    `${process.env.CONSUMET_URL}/meta/anilist/recent-episodes?page=1&perPage=5`
  );

  if (!res.ok) {
    throw new Error("Could not fetch recent episodes");
  }

  return res.json();
};

export default async function Continue() {
  const recentUpdated = await getRecentUpdated();

  try {
    response.parse(recentUpdated);
  } catch (e) {
    if (e instanceof ZodError) {
      console.log(`${e.message} continue`);
    } else {
      console.log("parsing error at continue");
    }
  }

  return (
    <div className="mt-8">
      <div className="border-primary border-l-4 py-1 px-4 font-medium flex gap-4 items-center">
        <p>Continue watching</p>
        <div className="text-primary/75">
          <RefreshCcw size={20} />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 mt-6">
        {recentUpdated.results.map((anime) => (
          <div className="" key={anime.id}>
            <AnimeCard anime={anime} />
          </div>
        ))}
      </div>
    </div>
  );
}
