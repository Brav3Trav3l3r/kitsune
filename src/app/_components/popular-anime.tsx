import { ZodError, z } from "zod";
import AnimeCard from "./anime-card";

const popularAnime = z.object({
  id: z.string(),
  malId: z.number(),
  title: z.object({
    romaji: z.string().nullable().optional(),
    english: z.string().nullable().optional(),
    native: z.string().nullable().optional(),
  }),
  image: z.string(),
  type: z.string(),
  totalEpisodes: z.number(),
});

const response = z.object({
  currentPage: z.union([z.string(), z.number()]),
  results: z.array(popularAnime),
});

type AnimeResponse = z.infer<typeof response>;

const getPopular = async (): Promise<AnimeResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CONSUMET_URL}/meta/anilist/popular?page=1&perPage=15`
  );

  if (!res.ok) {
    throw new Error("Could not fetch recent episodes");
  }

  return res.json();
};

export default async function PopularAnime() {
  const trendings = await getPopular();

  try {
    response.parse(trendings);
  } catch (e) {
    if (e instanceof ZodError) {
      console.log(`${e.message} at popular`);
    } else {
      console.log("parsing error at popular");
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
