import Container from "@/app/_components/container";
import { Skeleton } from "@/app/_components/ui/skeleton";

export default function page() {
  return (
    <div className="">
      <div className="relative z-10 mt-64">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-8">
            <div className="">
              <div className="h-56 lg:h-96 shrink-0 aspect-[2/3] rounded-lg overflow-hidden drop-shadow-2xl">
                <Skeleton className="w-full h-full object-contain" />
              </div>

              <div className="mt-6 hidden lg:flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            </div>

            <div className="lg:mt-8 flex flex-col gap-2 flex-1">
              <div className="">
                <Skeleton className="h-10 w-[80%]" />
                <Skeleton className="h-10 w-1/2 mt-3" />
              </div>

              <div className="flex gap-4 mt-4">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-10" />
                <Skeleton className="h-10 w-10" />
              </div>

              <div className="mt-4">
                <Skeleton className="h-4 w-[60%]" />
                <Skeleton className="h-4 w-[60%] mt-3" />
                <Skeleton className="h-4 w-1/2 mt-3" />
              </div>

              <div className="mt-8">
                <Skeleton className="h-28" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
