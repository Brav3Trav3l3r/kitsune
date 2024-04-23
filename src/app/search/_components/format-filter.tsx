"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { useContext } from "react";
import { FilterContext } from "../_store/filter-context";

export default function FormatFilter() {
  const filterCtx = useContext(FilterContext);
  const { format, setFormat } = filterCtx;

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

  const handleFormatChange = (selectedFormat: Format) => {
    setFormat(selectedFormat);
  };

  return (
    <div >
      <Select value={format} onValueChange={handleFormatChange}>
        <SelectTrigger className="">
          <SelectValue placeholder="Format" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ALL">All</SelectItem>
          <SelectItem value="TV">Tv</SelectItem>
          <SelectItem value="TV_SHORT">Tv Short</SelectItem>
          <SelectItem value="OVA">OVA</SelectItem>
          <SelectItem value="ONA">ONA</SelectItem>
          <SelectItem value="MOVIE">Movie</SelectItem>
          <SelectItem value="SPECIAL">Special</SelectItem>
          <SelectItem value="MUSIC">Music</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
