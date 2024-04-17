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

export default function LibraryTabs() {
  const { data, error, isLoading, isError } = trpc.library.getAll.useQuery();

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
        {data && (
          <StatusTab
            status="watching"
            media={data.filter((el) => el.media_status == "watching")}
          />
        )}
      </TabsContent>
      <TabsContent value="toWatch">
        {data && (
          <StatusTab
            status="watchlist"
            media={data.filter((el) => el.media_status == "watchlist")}
          />
        )}
      </TabsContent>
      <TabsContent value="watched">
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
