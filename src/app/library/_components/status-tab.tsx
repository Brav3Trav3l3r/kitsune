import AnimeCard from "@/app/_components/anime-card";
import { title } from "process";
import React from "react";
import { ZodError, z } from "zod";

const mediaSchema = z.array(
  z.object({
    user_id: z.string(),
    media_id: z.string(),
    type: z.string().nullable().optional(),
    image: z.string(),
    title_engish: z.string().nullable().optional(),
    title_native: z.string().nullable().optional(),
    title_romaji: z.string().nullable().optional(),
    media_status: z.enum(["completed", "watchlist", "watching"]),
    added_at: z.string(),
  })
);

type Status = "completed" | "watchlist" | "watching";

type toWatch = z.infer<typeof mediaSchema>;

export default function StatusTab({
  media,
  status,
}: {
  status: Status;
  media: toWatch;
}) {
  try {
    mediaSchema.parse(media);
  } catch (e) {
    if (e instanceof ZodError) {
      console.log(`${e.message} at to-watch`);
    } else {
      console.log("parsing error at to-watch");
    }
  }

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6  mt-4 gap-4 gap-y-6">
      {media.map((content) => (
        <AnimeCard
          anime={{
            ...content,
            id: content.media_id,
            title: {
              romaji: content.title_romaji,
              english: content.title_engish,
            },
          }}
          key={content.media_id}
        />
      ))}
    </div>
  );
}
