"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { FilterContext } from "../_store/filter-context";
import { useContext } from "react";

export default function SortFilter() {
  const filterCtx = useContext(FilterContext);
  const { sort, setSort } = filterCtx;

  return (
    <Select value={sort} onValueChange={setSort}>
      <SelectTrigger className="">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="POPULARITY_DESC">Popularity</SelectItem>
        <SelectItem value="TRENDING_DESC">Trending</SelectItem>
        <SelectItem value="START_DATE_DESC">Recent</SelectItem>
        <SelectItem value="SCORE_DESC">Score</SelectItem>
      </SelectContent>
    </Select>
  );
}
