import { z } from "zod";
import { anime } from "../types/api/anime";
import Link from "next/link";

const animeCard = z.object({
  id: z.union([z.string(), z.number()]),
  image: z.string(),
  totalEpisodes: z.number().optional(),
  episodeNumber: z.number().optional(),
  title: z.object({
    romaji: z.string(),
    english: z.string(),
    native: z.string().optional(),
    userPreferred: z.string().optional(),
  }),
});

type AnimeCardProps = z.infer<typeof animeCard>;

export default function AnimeCard({ anime }: { anime: AnimeCardProps }) {
  return (
    <div className="group">
      <Link href={`/anime/${anime.id}`}>
        <div className="aspect-[2/3] overflow-hidden rounded cursor-pointer">
          <img
            src={anime.image}
            alt=""
            className="object-cover h-full w-full group-hover:scale-105 transition-transform"
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
