"use client";

import { Button } from "@/app/_components/ui/button";
import { PRIMARY_COLOR } from "@/app/_lib/contants";
import { trpc } from "@/app/_trpc/client";
import { anime as animeInfo } from "@/app/_types/api/anime";
import getBaseUrl from "@/app/_utils/get-base-url";
import { Bookmark, BookmarkCheck, Loader, Share2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const { data, error, isError, isLoading } = trpc.library.get.useQuery({
    media_id: `${anime.id}`,
  });

  const addMutation = trpc.library.add.useMutation({
    onSuccess: () => {
      toast.success("Added to the library");
      utils.library.get.invalidate({
        media_id: `${anime.id}`,
      });
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });

  const removeMutaion = trpc.library.remove.useMutation({
    onSettled: () => {
      toast.success("Removed from the library");
      utils.library.get.invalidate({
        media_id: `${anime.id}`,
      });
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });

  const addToLibrary = () => {
    if (userId) {
      if (data && !!data.length) {
        removeMutaion.mutate({ media_id: `${anime.id}` });
      } else {
        addMutation.mutate({
          media_id: `${anime.id}`,
          image: anime.image,
          title_english: anime.title.english,
          title_native: anime.title.native,
          title_romaji: anime.title.romaji,
          type: anime.type,
        });
      }
    }
  };

  const pathname = usePathname();
  const copyUrl = () => {
    navigator.clipboard.writeText(`${getBaseUrl(true)}${pathname}`);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="flex mt-4 gap-4">
      {!!anime.episodes.length ? (
        <Link href={`/watch/${anime.id}?ep=${anime.episodes[0].id}`}>
          <Button>Watch now</Button>
        </Link>
      ) : (
        <Button variant={"destructive"}>No Episodes Available</Button>
      )}

      <Button
        disabled={addMutation.isPending || !userId || isLoading}
        onClick={addToLibrary}
        variant="outline"
        size="icon"
      >
        {isLoading || addMutation.isPending || removeMutaion.isPending ? (
          <Loader className="h-4 w-4 animate-spin" />
        ) : data && !!data.length ? (
          <Bookmark
            fill={PRIMARY_COLOR}
            color={PRIMARY_COLOR}
            className="h-4 w-4"
          />
        ) : (
          <Bookmark className="h-4 w-4" />
        )}
      </Button>
      
      <Button onClick={copyUrl} variant="outline" size="icon">
        <Share2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
