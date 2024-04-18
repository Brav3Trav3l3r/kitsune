import React from "react";

export default function Announcement() {
  return (
    <div>
      <p className="border-primary border-l-4 py-1 px-4 font-medium flex gap-4 items-center">
        Announcement
      </p>

      <div className="bg-card">
        <p className="py-2 px-4 mt-3 text-card-foreground/50">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          quisquam repellat amet vero, eligendi modi laboriosam rem, corrupti
          veniam ab impedit cupiditate libero iste ducimus architecto qui porro
          dolore! Blanditiis!
        </p>
      </div>
    </div>
  );
}
