import { Skeleton } from "../skeleton";

export default function AnimeCardSkeleton() {
  return (
    <div className="aspect-[2/3] relative">
      <Skeleton className="h-full w-fill" />
      <div className="mt-2 flex flex-col gap-2">
        <Skeleton className="h-4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}
