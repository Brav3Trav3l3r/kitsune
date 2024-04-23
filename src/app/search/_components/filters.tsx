import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import SeasonFilter from "./season-filter";
import GenresFilter from "./genres-filter";
import SortFilter from "./sort-filter";
import FormatFilter from "./format-filter";

type Checked = DropdownMenuCheckboxItemProps["checked"];
export default function Filters() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <div className="flex gap-3 *:flex-1">
        <FormatFilter />
        <SeasonFilter />
        <SortFilter />
      </div>
      <GenresFilter />
    </div>
  );
}
