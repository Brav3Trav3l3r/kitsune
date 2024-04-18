import React from "react";
import { Skeleton } from "./_components/ui/skeleton";
import Container from "./_components/container";

export default function Loading() {
  return (
    <div className="mt-20">
      <Container>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </Container>
    </div>
  );
}
