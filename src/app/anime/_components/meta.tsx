import { anime } from "@/app/_types/api/anime";
import { z } from "zod";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

type Anime = z.infer<typeof anime>;

export default function Meta({ anime }: { anime: Anime }) {
  dayjs.extend(localizedFormat);

  return (
    <div className="mt-6 flex flex-col gap-4 *:flex *:flex-col *:gap-1 text-sm">
      {anime.nextAiringEpisode && (
        <div>
          <p className="font-medium text-foreground/95">Airing</p>
          <p className=" text-foreground/50">
            Ep: {anime.nextAiringEpisode?.episode}:
            <span className="pl-2">
              {dayjs
                .unix(Number(anime.nextAiringEpisode?.airingTime))
                .format("LL")}
            </span>
          </p>
        </div>
      )}

      <div className="">
        <p className="font-medium text-foreground/95">Status</p>
        <p className=" text-foreground/50">{anime.status}</p>
      </div>

      <div className="">
        <p className="font-medium text-foreground/95">Score</p>
        <p className=" text-foreground/50">{anime.rating}%</p>
      </div>

      <div className="">
        <p className="font-medium text-foreground/95">Studio(s)</p>
        <div className=" max-w-48 text-foreground/50 flex flex-col gap-1">
          {anime.studios.map((studio) => (
            <p key={studio}>{studio}</p>
          ))}
        </div>
      </div>

      <div className="">
        <p className="font-medium text-foreground/95">Genre(s)</p>
        <div className="text-foreground/50 flex flex-col gap-1">
          {anime.genres.map((genre) => (
            <p key={genre}>{genre}</p>
          ))}
        </div>
      </div>

      <div className="">
        <p className="font-medium text-foreground/95">Season</p>
        <p className=" text-foreground/50">{anime.season}</p>
      </div>

      {!anime.synonyms
        ? ""
        : !!anime.synonyms.length && (
            <div className="">
              <p className="font-medium text-foreground/95">Synonym(s)</p>
              <div className="max-w-56 text-foreground/50 flex flex-col gap-1">
                {anime.synonyms.map((synonym) => (
                  <p key={synonym}>{synonym}</p>
                ))}
              </div>
            </div>
          )}
    </div>
  );
}
