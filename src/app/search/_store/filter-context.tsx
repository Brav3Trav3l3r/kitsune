"use client";

import { ReactNode, RefObject, createContext, useRef, useState } from "react";

type Season = "WINTER" | "SPRING" | "SUMMER" | "FALL" | "ALL";
type Format =
  | "TV"
  | "TV_SHORT"
  | "OVA"
  | "ONA"
  | "MOVIE"
  | "SPECIAL"
  | "MUSIC"
  | "ALL";

interface FilterContextType {
  season: Season;
  setSeason: (season: Season) => void;
  sort: string;
  setSort: (sort: string) => void;
  genres: string[];
  setGenres: (genres: string[]) => void;
  format: Format;
  setFormat: (format: Format) => void;
  inputRef: React.RefObject<HTMLInputElement>; // Define RefObject type here
}

export const FilterContext = createContext<FilterContextType>({
  season: "ALL",
  setSeason: (season: Season) => {},
  sort: "POPULARITY_DESC",
  setSort: (sort: string) => {},
  genres: [] as string[],
  setGenres: (genres: string[]) => {},
  format: "ALL",
  setFormat: (format: Format) => {},
  inputRef: {} as RefObject<HTMLInputElement>,
});

export default function FilterProvider({ children }: { children: ReactNode }) {
  const [genres, setGenres] = useState<string[]>([]);
  const [sort, setSort] = useState<string>("POPULARITY_DESC");
  const [season, setSeason] = useState<Season>("ALL");
  const [format, setFormat] = useState<Format>("ALL");
  const inputRef = useRef(null);

  return (
    <div>
      <FilterContext.Provider
        value={{
          inputRef,
          genres,
          setGenres,
          sort,
          setSort,
          season,
          setSeason,
          format,
          setFormat,
        }}
      >
        {children}
      </FilterContext.Provider>
    </div>
  );
}
