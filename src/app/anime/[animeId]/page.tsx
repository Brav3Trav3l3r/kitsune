import Container from "@/app/_components/container";
import { Separator } from "@/app/_components/ui/separator";
import { anime as animeInfo } from "@/app/_types/api/anime";
import { auth } from "@clerk/nextjs";
import parse from "html-react-parser";
import { ZodError, z } from "zod";
import Characters from "../_components/characters";
import Interactions from "../_components/interactions";
import Meta from "../_components/meta";
import Relations from "../_components/relations";

type Anime = z.infer<typeof animeInfo>;

const getAnime = async (animeId: string): Promise<Anime> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CONSUMET_URL}/meta/anilist/info/${animeId}`
  );

  if (!res.ok) {
    console.log(res);
    throw new Error("Could not fetch anime data");
  }

  return res.json();
};

export default async function Anime({
  params,
}: {
  params: { animeId: string };
}) {
  const anime = await getAnime(params.animeId);
  const { userId } = auth();

  try {
    animeInfo.parse(anime);
  } catch (e) {
    if (e instanceof ZodError) {
      console.log(`${e.message} at anime for ${params.animeId}`);
    } else {
      console.log(`parsing error ${params.animeId}`);
    }
  }

  return (
    <div>
      <div className="h-96 relative z-0">
        <img
          src={anime.cover}
          alt=""
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent h-48"></div>
      </div>
      <div className="-mt-32 relative z-10">
        <Container>
          <div className="flex gap-10">
            <div className="">
              <div className="h-96 shrink-0 aspect-[2/3] rounded-lg overflow-hidden drop-shadow-2xl">
                <img
                  src={anime.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <Meta anime={anime} />
            </div>

            <div className="mt-8 flex flex-col gap-2">
              <p className="text-3xl font-semibold">
                {anime.title?.english ?? anime.title?.romaji}
              </p>
              <div className="flex gap-4">
                <p>
                  {anime.type} ({anime.startDate?.year} -{" "}
                  {anime.status === "Completed"
                    ? anime.endDate?.year
                    : anime.status}
                  )
                </p>
                <Separator orientation="vertical" className="bg-foreground" />
                <p>{anime.totalEpisodes} Episodes</p>
              </div>

              <Interactions anime={anime} userId={userId} />

              <p className="mt-4 max-w-prose text-foreground/75">
                {anime.description && parse(anime.description)}
              </p>

              {anime.relations && <Relations relations={anime.relations} />}
              {anime.characters && <Characters characters={anime.characters} />}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
