import Link from "next/link";
import { ZodError, z } from "zod";
import { title } from "../types/api/anime";

const animeCard = z.object({
  id: z.union([z.string(), z.number()]),
  image: z.string(),
  totalEpisodes: z.number().optional(),
  episodeNumber: z.number().optional(),
  title: title,
});

type AnimeCardProps = z.infer<typeof animeCard>;

export default function AnimeCard({ anime }: { anime: AnimeCardProps }) {
  try {
    animeCard.parse(anime);
  } catch (e) {
    if (e instanceof ZodError) {
      console.log(`${e.message} at aniem-card`);
    } else {
      console.log("parsing error at aniem-card");
    }
  }

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
        <p className="mt-1 line-clamp-3">
          {anime.title.english ?? anime.title.romaji}
        </p>
      </div>
    </div>
  );
}
