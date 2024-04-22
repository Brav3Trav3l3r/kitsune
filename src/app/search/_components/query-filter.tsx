"use client";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { FilterContext } from "../_store/filter-context";

export default function QueryFilter() {
  const filterCtx = useContext(FilterContext);
  const { inputRef } = filterCtx;
  const queryClient = useQueryClient();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <Input ref={inputRef} placeholder="Anime, Movies and other" />
      <Button
        type="submit"
        onClick={() => {
          queryClient.invalidateQueries({ queryKey: ["results"] });
        }}
      >
        Search
      </Button>
    </form>
  );
}
