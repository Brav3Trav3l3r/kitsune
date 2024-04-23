import Container from "../_components/container";
import { Skeleton } from "../_components/ui/skeleton";

export default function Loading() {
  return (
    <div>
      <Container>
        <div className="flex gap-6 mt-8">
          <div className="flex-1">
            <div className="aspect-video">
              <Skeleton className="h-full w-full" />
            </div>

            <div className="mt-6">
              <Skeleton className="w-[80%] h-8" />
              <Skeleton className="w-[60%] h-48 mt-4" />
            </div>
          </div>
          <div className="basis-1/4 p-2 bg-accent h-[500px] overflow-y-auto">
            <Skeleton className="h-full w-full" />
          </div>
        </div>
      </Container>
    </div>
  );
}
