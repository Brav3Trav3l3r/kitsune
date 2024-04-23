import { z } from "zod";

export const title = z.object({
  romaji: z.string().nullable().optional(),
  english: z.string().nullable().optional(),
  native: z.string().nullable().optional(),
});

export const character = z.object({
  id: z.number(),
  role: z.string(),
  name: z.object({
    full: z.string().nullable().optional(),
    native: z.string().nullable().optional(),
    userPreferred: z.string().nullable().optional(),
  }),
  image: z.string(),
});

export const relation = z.object({
  id: z.union([z.number(), z.string()]),
  malId: z.number().nullable(),
  relationType: z.string(),
  title: title,
  status: z.string(),
  episodes: z.number().nullable(),
  image: z.string(),
  cover: z.string(),
  rating: z.number().nullable(),
  type: z.string().nullable(),
});

export const episode = z.object({
  id: z.string(),
  title: z.string().nullable().optional(),
  image: z.string().nullable().optional(),
  number: z.number(),
});

export const anime = z.object({
  id: z.union([z.number(), z.string()]),
  image: z.string(),
  totalEpisodes: z.number().nullable(),
  title: title,
  cover: z.string(),
  type: z.string().nullable(),
  releaseDate: z.number().optional(),
  startDate: z
    .object({
      year: z.number().nullable(),
      month: z.number().nullable(),
      day: z.number().nullable(),
    })
    .optional(),
  endDate: z
    .object({
      year: z.number().nullable(),
      month: z.number().nullable(),
      day: z.number().nullable(),
    })
    .optional(),
  description: z.string(),
  rating: z.number().nullable(),
  nextAiringEpisode: z
    .object({
      airingTime: z.number().nullable(),
      timeUntilAiring: z.number().nullable(),
      episode: z.number().nullable(),
    })
    .optional(),
  duration: z.number().nullable().optional(),
  studios: z.array(z.string()),
  genres: z.array(z.string()),
  status: z.string().nullable().optional(),
  season: z.string().nullable(),
  synonyms: z.array(z.string()).optional(),
  characters: z.array(character),
  relations: z.array(relation),
  episodes: z.array(episode),
});

export const animeResponse = z.object({
  results: z.array(anime),
});
