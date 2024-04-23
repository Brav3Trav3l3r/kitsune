"use client";

import React from "react";
import { Bookmark, Check, Eye } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../_components/ui/tabs";
import StatusTab from "./status-tab";
import { trpc } from "@/app/_trpc/client";
import AnimeCardSkeleton from "@/app/_components/ui/skeleton/anime-card-skeleton";

export default function LibraryTabs() {
  const { data, error, isLoading, isError, isPending } =
    trpc.library.getAll.useQuery();

  const loader = (
    <div className="">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6  mt-4 gap-4 gap-y-6">
        <AnimeCardSkeleton />
        <AnimeCardSkeleton />
        <AnimeCardSkeleton />
        <AnimeCardSkeleton />
      </div>
    </div>
  );

  return (
    <Tabs defaultValue="watching" className="">
      <TabsList className="border-b-2 w-full">
        <TabsTrigger value="watching">
          <div className="flex gap-1.5 items-center">
            <Eye size={20} />
            <p>Watching</p>
          </div>
        </TabsTrigger>
        <TabsTrigger value="toWatch">
          <div className="flex gap-1.5 items-center">
            <Bookmark size={20} />
            <p>To Watch</p>
          </div>
        </TabsTrigger>
        <TabsTrigger value="watched">
          <div className="flex gap-1.5 items-center">
            <Check size={20} />
            <p>Watched</p>
          </div>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="watching" className="">
        {isLoading && loader}

        {data && (
          <StatusTab
            status="watching"
            media={data.filter((el) => el.media_status == "watching")}
          />
        )}
      </TabsContent>
      <TabsContent value="toWatch">
        {isLoading && loader}

        {data && (
          <StatusTab
            status="watchlist"
            media={data.filter((el) => el.media_status == "watchlist")}
          />
        )}
      </TabsContent>
      <TabsContent value="watched">
        {isLoading && loader}

        {data && (
          <StatusTab
            status="completed"
            media={data.filter((el) => el.media_status == "completed")}
          />
        )}
      </TabsContent>
    </Tabs>
  );
}
