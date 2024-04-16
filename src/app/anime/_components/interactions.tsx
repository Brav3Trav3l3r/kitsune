"use client";

import { Button } from "@/app/_components/ui/button";
import { trpc } from "@/app/_trpc/client";
import { anime as animeInfo } from "@/app/_types/api/anime";
import { auth, useSession } from "@clerk/nextjs";
import { Bookmark, BookmarkCheck, LoaderCircle, Share2 } from "lucide-react";
import toast from "react-hot-toast";
import { z } from "zod";

type Anime = z.infer<typeof animeInfo>;

export default function Interactions({
  anime,
  userId,
}: {
  anime: Anime;
  userId: string | null;
}) {
  const utils = trpc.useUtils();
  
  const query = trpc.library.get.useQuery({
    media_id: `${anime.id}`,
  });

  const mutation = trpc.library.add.useMutation({
    onSuccess: () => {
      toast.success("Successfully added");
      utils.library.get.invalidate({
        media_id: `${anime.id}`,
      });
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });

  const addToLibrary = () => {
    mutation.mutate({
      media_id: `${anime.id}`,
      image: anime.image,
      title_english: anime.title.english ?? "unknown",
      title_native: anime.title.native ?? "unknown",
      type: anime.type ?? "unknown",
      status: "watchlist",
    });
  };

  return (
    <div className="flex mt-4 gap-4">
      <Button>Watch now</Button>
      <Button
        disabled={mutation.isPending || !userId}
        onClick={addToLibrary}
        variant="outline"
        size="icon"
      >
        {!!query.data?.length ? (
          <BookmarkCheck className="h-4 w-4" />
        ) : (
          <Bookmark className="h-4 w-4" />
        )}
      </Button>
      <Button variant="outline" size="icon">
        <Share2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
