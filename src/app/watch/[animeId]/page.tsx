import Container from "@/app/_components/container";
import Media from "./_components/media";
import { anime } from "@/app/_types/api/anime";
import { z } from "zod";
import Episodes from "./_components/episodes";
import EpInfo from "./_components/ep-info";

type Anime = z.infer<typeof anime>;

const fetchInfo = async (animeId: string): Promise<Anime> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CONSUMET_URL}/meta/anilist/info/${animeId}`
  );

  if (!res.ok) {
    throw new Error("Could not fetch info");
  }

  return res.json();
};

export default async function Page({
  params,
}: {
  params: { animeId: string };
}) {
  const animeInfo = await fetchInfo(params.animeId);

  return (
    <Container>
      <div className="flex gap-6 mt-8">
        <div className="flex-1">
          <Media />
          <EpInfo animeInfo={animeInfo} />
        </div>
        <div className="basis-1/4 p-2 bg-accent rounded h-[500px] overflow-y-auto">
          <Episodes episodes={animeInfo.episodes} animeId={params.animeId} />
        </div>
      </div>
    </Container>
  );
}
