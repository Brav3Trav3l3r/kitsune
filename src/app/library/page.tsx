import Container from "../_components/container";
import LibraryTabs from "./_components/library-tabs";

export default async function page() {
  return (
    <Container>
      <div className="mt-12">
        <LibraryTabs />
      </div>
    </Container>
  );
}
