"use client";

import { z } from "zod";
import { anime, title } from "../_types/api/anime";
import AnimeCard from "./anime-card";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Skeleton } from "./ui/skeleton";

const trendingAnime = z.object({
  id: z.string(),
  malId: z.number().nullable(),
  title: title,
  image: z.string(),
  type: z.string(),
  totalEpisodes: z.number(),
});

const response = z.object({
  currentPage: z.union([z.string(), z.number()]),
  hasNextPage: z.boolean(),
  results: z.array(trendingAnime),
});

type Response = z.infer<typeof response>;

export default function AnimeResults({ url }: { url: string }) {
  const getResults = async ({
    pageParam,
  }: {
    pageParam: number;
  }): Promise<Response> => {
    console.log(pageParam);
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CONSUMET_URL}/meta/anilist/${url}`,
      {
        params: {
          page: pageParam,
          perPage: 15,
        },
      }
    );

    return data;
  };

  const {
    data,
    error,
    status,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [url],
    queryFn: getResults,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (!lastPage.hasNextPage) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });

  if (status == "error") {
    return <span>Error...</span>;
  }

  if (status === "success") {
    return (
      <div className="">
        <div className="grid grid-cols-5 gap-4 mt-6 gap-y-8">
          {data.pages.map((page) =>
            page.results.map((anime) => (
              <div className="" key={anime.id}>
                <AnimeCard anime={anime} />
              </div>
            ))
          )}
        </div>

        <div className="flex justify-center mt-8">
          <Button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load More"
              : "Nothing more to load"}
          </Button>
        </div>
      </div>
    );
  }
}
