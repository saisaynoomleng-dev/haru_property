import Form from 'next/form';
import { Input } from './ui/input';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import SearchResetButton from './SearchResetButton';
import {
  Select,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from './ui/select';
import { SelectGroup } from '@radix-ui/react-select';
import FilterResetButton from './FilterResetButton';

const PropertyFilter = ({
  query,
  type,
  listingType,
}: {
  query: string;
  type: string;
  listingType: string;
}) => {
  return (
    <div className="bg-brand-neutral shadow-sm grid md:grid-cosl-2 gap-3 py-5 px-2 rounded-sm dark:shadow-brand-neutral-200/5">
      <Form
        action=""
        scroll={false}
        className="col-span-full md:col-span-1 md:col-start-1 grid grid-cols-[1fr_auto] gap-2"
      >
        <div className="relative">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <Input
            name="query"
            id="search"
            defaultValue={query}
            type="text"
            placeholder="Search Properties..."
            className=""
          />
          {query && <SearchResetButton />}
        </div>
        <button
          type="submit"
          className="bg-brand-neutral-700 text-brand-neutral-200 dark:bg-brand-neutral-200 dark:text-brand-neutral-700 cursor-pointer  px-4 rounded-sm text-fs-300 font-medium"
        >
          <FaMagnifyingGlass />
        </button>
      </Form>

      <Form
        action=""
        scroll={false}
        className="md:col-start-2 col-span-full md:col-span-1 flex gap-2"
      >
        <Select name="type">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Property" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Property Type</SelectLabel>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="loft">Loft</SelectItem>
              <SelectItem value="office">Office</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select name="listingType">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Listing Type</SelectLabel>
              <SelectItem value="rent">Rent</SelectItem>
              <SelectItem value="sale">Sale</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-brand-neutral-700 text-brand-neutral-200 dark:bg-brand-neutral-200 dark:text-brand-neutral-700 cursor-pointer  px-4 rounded-sm text-fs-300 font-medium h-full"
          >
            Apply
          </button>

          {(type || listingType) && <FilterResetButton />}
        </div>
      </Form>
    </div>
  );
};

export default PropertyFilter;
