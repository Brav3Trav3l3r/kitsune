import Link from "next/link";
import { ZodError, z } from "zod";
import { title } from "../_types/api/anime";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { Clock, Ellipsis } from "lucide-react";
import { Button } from "./ui/button";
import { MediaStatusDropDown } from "../library/_components/media-status-dropdown";

dayjs.extend(localizedFormat);

const animeCard = z.object({
  id: z.union([z.string(), z.number()]),
  image: z.string(),
  totalEpisodes: z.number().optional(),
  episodeNumber: z.number().optional(),
  title: title,
  type: z.string().nullable().optional(),
  media_status: z.enum(["completed", "watchlist", "watching"]).optional(),
  added_at: z.string().optional(),
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
    <div className="group relative">
      {anime.media_status && (
        <MediaStatusDropDown
          animeId={`${anime.id}`}
          status={anime.media_status}
        />
      )}
      <Link href={`/anime/${anime.id}`}>
        <div className="aspect-[2/3] relative overflow-hidden rounded cursor-pointer">
          <img
            src={anime.image}
            alt=""
            className="object-cover h-full w-full group-hover:scale-105 transition-transform"
          />
        </div>
      </Link>

      <div className="flex items-center justify-between mt-2">
        {anime.added_at && (
          <p className=" text-sm text-foreground/50 flex items-center gap-2">
            <Clock strokeWidth={3} size={14} />{" "}
            {dayjs(anime.added_at).format("ll")}
          </p>
        )}
      </div>

      <div className="mt-2 ">
        <div className="flex text-sm text-foreground/50 justify-between">
          {(anime.totalEpisodes || anime.episodeNumber) && (
            <p className="">
              Ep. {anime.totalEpisodes ?? anime.episodeNumber ?? "?"}
            </p>
          )}
          {anime.type && <p>{anime.type}</p>}
        </div>
        <p className="mt-1 text-sm line-clamp-3 text-foreground font-medium">
          {anime.title.english ?? anime.title.romaji}
        </p>
      </div>
    </div>
  );
}
