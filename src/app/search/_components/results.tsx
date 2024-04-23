"use client";

import AnimeCard from "@/app/_components/anime-card";
import { title } from "@/app/_types/api/anime";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { ZodError, z } from "zod";
import { FilterContext } from "../_store/filter-context";
import { Button } from "@/app/_components/ui/button";
import AnimeCardSkeleton from "@/app/_components/ui/skeleton/anime-card-skeleton";

const advSearch = z.object({
  currentPage: z.number(),
  hasNextPage: z.boolean(),
  totalPages: z.number(),
  totalResults: z.number(),
  results: z.array(
    z.object({
      id: z.union([z.string(), z.number()]),
      image: z.string(),
      totalEpisodes: z.number().nullable().optional(),
      title: title,
      type: z.string().nullable().optional(),
    })
  ),
});

type AdvSearchRes = z.infer<typeof advSearch>;

export default function Results() {
  const filterCtx = useContext(FilterContext);
  const { genres, inputRef, season, sort, format } = filterCtx;

  const fetchResults = async ({
    pageParam,
  }: {
    pageParam: number;
  }): Promise<AdvSearchRes> => {
    let url = `${process.env.NEXT_PUBLIC_CONSUMET_URL}/meta/anilist/advanced-search?perPage=15`;

    const serachParams = {
      query:
        inputRef.current && inputRef.current?.value.length
          ? inputRef.current.value
          : undefined,
      season: season && season !== "ALL" ? season : undefined,
      format: format && format !== "ALL" ? format : undefined,
      genres: genres.length > 0 ? JSON.stringify(genres) : undefined,
      sort: sort ? JSON.stringify([sort]) : undefined,
      page: pageParam,
    };

    const { data } = await axios.get(url, {
      params: serachParams,
    });
    return data;
  };

  const {
    data,
    error,
    status,
    isPending,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["results", sort, genres, season, format],
    queryFn: fetchResults,
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

  if (isPending) {
    return (
      <div className="grid grid-cols-5 gap-4 mt-6 gap-y-8">
        {[...Array(15)].map((e, i) => (
          <AnimeCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (status == "success") {
    return (
      <div className="">
        <div className="grid grid-cols-5 gap-x-4 gap-y-6 mt-6">
          {data.pages.map((page) =>
            page.results.map((anime) => (
              <div className="" key={anime.id}>
                <AnimeCard anime={anime} />
              </div>
            ))
          )}
        </div>

        {isFetchingNextPage && (
          <div className="grid grid-cols-5 gap-4 mt-6 gap-y-8">
            {[...Array(10)].map((e, i) => (
              <AnimeCardSkeleton key={i} />
            ))}
          </div>
        )}

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
