"use client";

import AnimeCard from "@/app/_components/anime-card";
import { title } from "@/app/_types/api/anime";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { ZodError, z } from "zod";
import { FilterContext } from "../_store/filter-context";

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
  const { genres, inputRef, season, sort } = filterCtx;

  const fetchResults = async (): Promise<AdvSearchRes> => {
    let url = `${process.env.NEXT_PUBLIC_CONSUMET_URL}/meta/anilist/advanced-search?perPage=15`;

    const serachParams = {
      query:
        inputRef.current && inputRef.current?.value.length
          ? inputRef.current.value
          : undefined,
      season: season && season !== "ALL" ? season : undefined,
      genres: genres.length > 0 ? JSON.stringify(genres) : undefined,
      sort: sort ? JSON.stringify([sort]) : undefined,
    };

    console.log(serachParams);
    const { data } = await axios.get(url, {
      params: serachParams,
    });
    return data;
  };

  const { isPending, isError, error, data } = useQuery({
    queryKey: ["results"],
    queryFn: fetchResults,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  try {
    advSearch.parse(data);
  } catch (e) {
    if (e instanceof ZodError) {
      console.log(`${e.message} at results`);
    } else {
      console.log("parsing error at results");
    }
  }

  return (
    <div className="">
      <div className="grid grid-cols-5 gap-x-4 gap-y-6 mt-6">
        {data.results.map((anime) => (
          <div className="" key={anime.id}>
            <AnimeCard anime={anime} />
          </div>
        ))}
      </div>
    </div>
  );
}
