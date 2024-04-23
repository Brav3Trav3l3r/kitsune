import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { anime } from "@/app/_types/api/anime";
import { z } from "zod";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { Button } from "@/app/_components/ui/button";
import { Info } from "lucide-react";

type Anime = z.infer<typeof anime>;
export default function MetaDialog({ anime }: { anime: Anime }) {
  dayjs.extend(localizedFormat);

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={"secondary"}
            size={"icon"}
            className="text-secondary-foreground"
          >
            <Info size={20} />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[90%] rounded">
          <div className="max-h-[80vh] no-scrollbar overflow-y-auto flex flex-col gap-4 *:flex *:flex-col *:gap-1 text-sm">
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

            {anime.status && (
              <div className="">
                <p className="font-medium text-foreground/95">Status</p>
                <p className=" text-foreground/50">{anime.status}</p>
              </div>
            )}

            {anime.rating && (
              <div className="">
                <p className="font-medium text-foreground/95">Score</p>
                <p className=" text-foreground/50">{anime.rating}%</p>
              </div>
            )}

            {!!anime.studios.length && (
              <div className="">
                <p className="font-medium text-foreground/95">Studio(s)</p>
                <div className=" max-w-48 text-foreground/50 flex flex-col gap-1">
                  {anime.studios.map((studio) => (
                    <p key={studio}>{studio}</p>
                  ))}
                </div>
              </div>
            )}

            <div className="">
              <p className="font-medium text-foreground/95">Genre(s)</p>
              <div className="text-foreground/50 flex flex-col gap-1">
                {anime.genres.map((genre) => (
                  <p key={genre}>{genre}</p>
                ))}
              </div>
            </div>

            {anime.season && (
              <div>
                <p className="font-medium text-foreground/95">Season</p>
                <p className=" text-foreground/50">{anime.season}</p>
              </div>
            )}

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
        </DialogContent>
      </Dialog>
    </div>
  );
}
