"use client";

import React, { useEffect, useState } from "react";
import Player from "./player";
import { useSearchParams } from "next/navigation";

const getStreamingSources = async (epId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CONSUMET_URL}/meta/anilist/watch/${epId}`
  );
  const data = await res.json();
  return data.sources;
};

interface ApiSource {
  url: string;
  isM3U8: boolean;
  quality: string;
}

interface Source {
  src: string;
  type: "application/x-mpegurl" | "video/mp4";
}

const formatSources = (arr: ApiSource[]): Source[] => {
  return arr.map((source) => {
    return {
      src: source.url,
      type: source.isM3U8 ? "application/x-mpegurl" : "video/mp4",
    };
  });
};

export default function Media() {
  const searchParams = useSearchParams();
  const [sources, setSources] = useState(null);

  const epId = searchParams.get("ep");

  if (!epId) {
    throw new Error("Must select an episode.");
  }

  useEffect(() => {
    getStreamingSources(epId).then((data) => {
      setSources(data);
    });
  }, [epId]);

  return <div>{sources && <Player sources={formatSources(sources)} />}</div>;
}
