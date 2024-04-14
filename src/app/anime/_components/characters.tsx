import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/ui/avatar";
import { character } from "@/app/types/api/anime";
import { z } from "zod";

type Characters = z.infer<typeof character>[];

export default function Characters({ characters }: { characters: Characters }) {
  return (
    <div className="mt-8">
      <p className="text-lg font-medium">Characters</p>

      <div className="mt-4 grid grid-cols-4 gap-6 ">
        {characters.map((character) => (
          <div className="flex gap-3 items-center" key={character.id}>
            <Avatar className="h-20 w-20">
              <AvatarImage src={character.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="">
              <p className="text-sm text-foreground">
                {character.name.full ?? character.name.native}
              </p>
              <p className="text-xs text-foreground/50 mt-2">
                {character.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
