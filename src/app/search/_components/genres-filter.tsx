"use client";

import { Button } from "@/app/_components/ui/button";
import { useContext, useState } from "react";
import { FilterContext } from "../_store/filter-context";

const allGenres = [
  "Action",
  "Adventure",
  "Cars",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mahou Shoujo",
  "Mecha",
  "Music",
  "Mystery",
  "Psychological",
  "Romance",
  "Sci-Fi",
  "Slice of Life",
  "Sports",
  "Supernatural",
  "Thriller",
];

export default function GenresFilter() {
  const filterCtx = useContext(FilterContext);
  const { genres, setGenres } = filterCtx;

  return (
    <div>
      <div className="flex gap-2 flex-wrap">
        {allGenres.map((genre) => (
          <Button
            className="border border-secondary"
            variant={genres.includes(genre) ? "secondary" : "outline"}
            key={genre}
            onClick={() =>
              setGenres(
                genres.includes(genre)
                  ? genres.filter((g) => g !== genre)
                  : [...genres, genre]
              )
            }
          >
            {genre}
          </Button>
        ))}
      </div>
    </div>
  );
}
