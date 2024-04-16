import { ZodError, z } from "zod";
import AnimeCard from "./anime-card";
import { title } from "../_types/api/anime";

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

type RecentAnimeResponse = z.infer<typeof response>;

const getRecent = async (): Promise<RecentAnimeResponse> => {
  const res = await fetch(
    `${process.env.CONSUMET_URL}/meta/anilist/recent-episodes?page=1&perPage=15`
  );

  if (!res.ok) {
    throw new Error("Could not fetch recent episodes");
  }

  return res.json();
};

export default async function RecentAnime() {
  const recenteAnime = await getRecent();

  try {
    response.parse(recenteAnime);
  } catch (e) {
    if (e instanceof ZodError) {
      console.log(`${e.message} at anime`);
    } else {
      console.log("parsing error at anime");
    }
  }

  return (
    <div className="grid grid-cols-5 gap-4 mt-6 gap-y-8">
      {recenteAnime.results.map((anime) => (
        <div className="" key={anime.id}>
          <AnimeCard anime={anime} />
        </div>
      ))}
    </div>
  );
}
