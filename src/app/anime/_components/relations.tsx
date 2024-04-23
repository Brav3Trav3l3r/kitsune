import AnimeCard from "@/app/_components/anime-card";
import { title } from "@/app/_types/api/anime";
import { z } from "zod";

const relationObject = z.array(
  z.object({
    id: z.union([z.string(), z.number()]),
    malId: z.number().nullable(),
    relationType: z.string(),
    title: title,
    status: z.string(),
    episodes: z.number().nullable().optional(),
    image: z.string(),
    cover: z.string(),
    rating: z.number().nullable(),
    type: z.string().nullable(),
  })
);

type Relations = z.infer<typeof relationObject>;

export default function Relations({ relations }: { relations: Relations }) {
  try {
    relationObject.parse(relations);
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="mt-8">
      <p className="text-lg font-medium">Relations</p>

      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 mt-4 gap-4 gap-y-6">
        {relations.map((anime) => (
          <div className="" key={anime.id}>
            <AnimeCard anime={anime} />
          </div>
        ))}
      </div>
    </div>
  );
}
