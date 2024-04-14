import AnimeCard from "@/app/_components/anime-card";
import { relation } from "@/app/types/api/anime";
import { z } from "zod";

type Relations = z.infer<typeof relation>[];

export default function Relations({ relations }: { relations: Relations }) {
  return (
    <div className="mt-8">
      <p className="text-lg font-medium">Relations</p>

      <div className="grid grid-cols-5 mt-4 gap-4 gap-y-6">
        {relations.map((anime) => (
          <div className="" key={anime.id}>
            <AnimeCard anime={anime} />
          </div>
        ))}
      </div>
    </div>
  );
}
