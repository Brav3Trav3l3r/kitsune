import React from "react";
import MostWatchedList from "./most-watched-list";

export default function MostWatched() {
  return (
    <div>
      <p className="border-primary border-l-4 py-1 px-4 font-medium flex gap-4 items-center">
        Most Watched on Zen Anime
      </p>

      <MostWatchedList />
    </div>
  );
}
