import { z } from "zod";
import { anime } from "../types/api/anime";
import Link from "next/link";

type Anime = z.infer<typeof anime>;

export default function AnimeCard({ anime }: { anime: Anime }) {
  return (
    <div className="group">
      <Link href={`/anime/${anime.id}`}>
        <div className="aspect-[3/4] overflow-hidden rounded cursor-pointer">
          <img
            src={anime.image}
            alt=""
            className="object-cover group-hover:scale-105 transition-transform"
          />
        </div>
      </Link>

      <div className="mt-2 text-sm">
        <p className="text-foreground/50">
          Episode {anime.totalEpisodes ?? anime.episodeNumber}
        </p>
        <p className="mt-1 line-clamp-2">
          {anime.title.english ?? anime.title.romaji}
        </p>
      </div>
    </div>
  );
}
