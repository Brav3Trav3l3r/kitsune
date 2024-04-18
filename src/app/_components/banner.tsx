import parse from "html-react-parser";
import anime from "../_data/animeData.json";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Bookmark, Share2 } from "lucide-react";

export default function Banner() {
  return (
    <div className="h-72 relative py-4 px-6 flex gap-6 rounded-lg overflow-hidden">
      <div className="h-full aspect-[3/4] border overflow-hidden rounded-sm z-10 shadow-xl">
        <img src={anime.image} alt="" className="object-cover" />
      </div>

      <div className="absolute inset-0 z-0">
        <img src={anime.image} alt="" className="object-cover w-full h-full" />
        <div className="bg-background/80 absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
        <div className="absolute right-0 w-96 bg-gradient-to-l from-background to-transparent inset-y-0"></div>
      </div>

      <div className="flex flex-col justify-end gap-3 z-10">
        <p className="text-xl font-bold">{anime.title.english}</p>
        <div className="flex gap-2 flex-wrap shrink-0">
          {anime.genres.map((el) => (
            <div className="" key={el}>
              <Badge variant={"secondary"}>{el}</Badge>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <Button>Watch</Button>
          <Button variant="outline" size="icon">
            <Bookmark className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        {/* <p className="max-w-prose line-clamp-6 text-foreground/75 text-sm">
          {parse(anime.description)}
        </p> */}
      </div>
    </div>
  );
}
