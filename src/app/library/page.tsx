import { Suspense } from "react";
import Container from "../_components/container";
import LibraryTabs from "./_components/library-tabs";

export default async function page() {
  return (
    <Container>
      <p></p>
      <div className="mt-8">
        <LibraryTabs />
      </div>
    </Container>
  );
}
