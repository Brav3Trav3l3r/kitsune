"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Episode({
  animeId,
  epId,
  index,
}: {
  animeId: string;
  epId: string;
  index: number;
}) {
  const searchParams = useSearchParams();
  const ep = searchParams.get("ep");

  return (
    <Link href={`/watch/${animeId}?ep=${epId}`}>
      <div
        className={`${
          ep == epId
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground"
        } flex justify-center p-1 `}
      >
        {index + 1}
      </div>
    </Link>
  );
}
