"use client";

import Link from "next/link";
import { trpc } from "../_trpc/client";
import { Check, CheckCheck, Eye, Users } from "lucide-react";

export default function MostWatchedList() {
  const query = trpc.library.mostWathed.useQuery();

  if (query.isLoading) {
    return <p>Loading...</p>;
  }

  if (query.isError) {
    return <p>{query.error.message}</p>;
  }

  console.log(query.data);

  return (
    <div className="flex flex-col gap-4 mt-6">
      {query.data?.map((anime) => (
        <div key={anime.media_id} className="flex gap-4">
          <Link href={`/anime/${anime.media_id}`}>
            <div className="aspect-[2/3] h-24 relative overflow-hidden rounded cursor-pointer">
              <img
                src={anime.image}
                alt=""
                className="object-cover h-full w-full group-hover:scale-105 transition-transform"
              />
            </div>
          </Link>

          <div className="text-sm w-full">
            <p className=" line-clamp-3 text-foreground font-medium">
              {anime.title_english ?? anime.title_romaji ?? ""}
            </p>
            <div className="mt-2 font-medium flex items-center gap-6 text-foreground/75">
              <p className="">{anime.type}</p>
              <div className="flex gap-2 items-center">
                <Users size={16} />
                <p className="">{anime.count}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
