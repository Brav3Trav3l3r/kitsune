"use client";

import Link from "next/link";
import { trpc } from "../_trpc/client";
import { Check, CheckCheck, Eye, Users } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

export default function MostWatchedList() {
  const query = trpc.library.mostWatched.useQuery();

  if (query.isLoading) {
    return (
      <div className="mt-4 flex flex-col gap-2">
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
      </div>
    )
  }

  if (query.isError) {
    return <p>{query.error.message}</p>;
  }

  return (
    <div className="flex flex-col gap-2 mt-4">
      {query.data?.map((anime) => (
        <div
          key={anime.media_id}
          className="flex gap-3 bg-card text-card-foreground p-2 rounded"
        >
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
            <p className=" line-clamp-3 font-medium">
              {anime.title_english ?? anime.title_romaji ?? ""}
            </p>
            <div className="mt-2 text-xs font-medium flex items-center gap-6 text-card-foreground/50">
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
