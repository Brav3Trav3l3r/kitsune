import Container from "../_components/container";
import { Skeleton } from "../_components/ui/skeleton";
import AnimeCardSkeleton from "../_components/ui/skeleton/anime-card-skeleton";

export default function loading() {
  return (
    <div className="mt-6">
      <Container>
        <div className="flex gap-8">
          <div className="basis-1/4 rounded">
            {/* <Filters /> */}
            <div className="flex flex-col gap-6">
              <Skeleton className="h-10" />
              <Skeleton className="h-10" />
              <Skeleton className="h-10" />
            </div>

            <Skeleton className="mt-6 h-72" />
          </div>
          <div className="flex-1 ">
            <div className="flex gap-4">
              <Skeleton className="h-10 flex-1" />
              <Skeleton className="h-10 w-[100px]" />
            </div>

            <div className="grid grid-cols-5 gap-4 mt-6 gap-y-8">
              {[...Array(10)].map((e, i) => (
                <AnimeCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
