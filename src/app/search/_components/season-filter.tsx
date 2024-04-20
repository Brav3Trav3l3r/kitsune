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

export default function SeasonFilter() {
  const filterCtx = useContext(FilterContext);
  const { season, setSeason } = filterCtx;

  type Season = "WINTER" | "SPRING" | "SUMMER" | "FALL" | "ALL";

  const handleSeasonChange = (selectedSeason: Season) => {
    setSeason(selectedSeason);
  };

  return (
    <div className="">
      <Select value={season} onValueChange={handleSeasonChange}>
        <SelectTrigger className="">
          <SelectValue placeholder="Season" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ALL">All</SelectItem>
          <SelectItem value="WINTER">Winter</SelectItem>
          <SelectItem value="SPRING">Spring</SelectItem>
          <SelectItem value="SUMMER">Summer</SelectItem>
          <SelectItem value="FALL">Fall</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
