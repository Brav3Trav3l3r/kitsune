import { ZodError, z } from "zod";
import AnimeCard from "./anime-card";
import { title } from "../_types/api/anime";

const trendingAnime = z.object({
  id: z.string(),
  malId: z.number().nullable(),
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
  console.log(process.env.NEXT_PUBLIC_CONSUMET_URL)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CONSUMET_URL}/meta/anilist/trending?page=1&perPage=15`
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
  } catch (e) {
    if (e instanceof ZodError) {
      console.log(`${e.message} at trending`);
    } else {
      console.log("parsing error at trending");
    }
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
