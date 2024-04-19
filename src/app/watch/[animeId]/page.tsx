import Container from "@/app/_components/container";
import Media from "./_components/media";
import { anime as animeInfo } from "@/app/_types/api/anime";
import { z } from "zod";
import Episodes from "./_components/episodes";

type Anime = z.infer<typeof animeInfo>;

export default async function Page({
  params,
}: {
  params: { animeId: string };
}) {
  return (
    <Container>
      <div className="flex gap-6 mt-8">
        <div className="flex-1">
          <div className="aspect-video">
            <Media />
          </div>
        </div>
        <div className="basis-1/4 p-2 bg-popover">
          <Episodes animeId={params.animeId} />
        </div>
      </div>
    </Container>
  );
}
