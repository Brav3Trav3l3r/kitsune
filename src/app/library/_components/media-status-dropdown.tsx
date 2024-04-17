"use client";

import { Button } from "@/app/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { trpc } from "@/app/_trpc/client";
import { Ellipsis, Loader } from "lucide-react";
import { useState } from "react";

type Status = "completed" | "watchlist" | "watching";

export function MediaStatusDropDown({
  status,
  animeId,
}: {
  animeId: string;
  status: Status;
}) {
  const [mediaStatus, setMediaStatus] = useState(status);
  const utils = trpc.useUtils();

  const statusMutaion = trpc.library.updateStatus.useMutation({
    onSuccess: () => {
      utils.library.getAll.invalidate();
    },
  });

  const handleChange = (e: string) => {
    if (e == "watchlist" || e == "watching" || e == "completed") {
      statusMutaion.mutate({
        media_id: animeId,
        media_status: e,
      });
    }
    return;
  };

  return (
    <div className="absolute top-1 right-1 z-10">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            disabled={statusMutaion.isPending}
            variant="outline"
            size="icon"
            className="w-8 h-8"
          >
            {statusMutaion.isPending ? (
              <Loader size={16} className="animate-spin" />
            ) : (
              <Ellipsis size={16} />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Media Status</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={mediaStatus}
            onValueChange={(e) => handleChange(e)}
          >
            <DropdownMenuRadioItem value={"watching"}>
              Watching
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value={"watchlist"}>
              To Watch
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value={"completed"}>
              Watched
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
