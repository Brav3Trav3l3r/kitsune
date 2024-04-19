import React from "react";

export default function Announcement() {
  return (
    <div>
      <p className="border-primary border-l-4 py-1 px-4 font-medium flex gap-4 items-center">
        Announcement
      </p>

      <div className="bg-card py-2 px-4 mt-3 text-card-foreground/50">
        <p className="">
          "Welcome to Zen Anime!
          <span className="text-card-foreground">🌟</span>
        </p>
        <br />
        <p>
          This site is under construction. Feel free to join and contribute.
        </p>
        <br />
        <p>
          Enjoy your stay <span className="text-card-foreground">🔥</span>
        </p>
      </div>
    </div>
  );
}
