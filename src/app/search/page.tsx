import Container from "../_components/container";

import Filters from "./_components/filters";
import QueryFilter from "./_components/query-filter";
import Results from "./_components/results";
import FilterProvider from "./_store/filter-context";

export default function Page() {
  return (
    <div className="mt-6">
      <FilterProvider>
        <Container>
          <div className="flex flex-col lg:flex-row lg:gap-8">
            <div className="basis-1/4">
              <Filters />
            </div>
            <div className="flex-1 mt-6 lg:mt-0">
              <QueryFilter />
              <Results />
            </div>
          </div>
        </Container>
      </FilterProvider>
    </div>
  );
}
