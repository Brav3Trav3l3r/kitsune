import { z } from "zod";

export const anime = z.object({
  id: z.string(),
  image: z.string(),
  episodeNumber: z.number().optional(),
  totalEpisodes: z.number().optional(),
  title: z.object({
    english: z.string().nullable(),
    romaji: z.string().nullable(),
  }),
});

export const animeResponse = z.object({
  results: z.array(anime),
});
