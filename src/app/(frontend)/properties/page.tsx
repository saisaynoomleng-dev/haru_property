import Bounded from '@/components/Bounded';
import PageTag from '@/components/PageTag';
import Paragraph from '@/components/Paragraph';
import PropertyCard from '@/components/PropertyCard';
import PropertyFilter from '@/components/PropertyFilter';
import Title from '@/components/Title';
import { PropertiesProps } from '@/lib/types';
import { sanityFetch } from '@/sanity/lib/live';
import { PROPERTIES_QUERY } from '@/sanity/lib/queries';
import clsx from 'clsx';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

const PropertyPage = async ({ searchParams }: PropertiesProps) => {
  const { query, type, listingType, page } = await searchParams;

  const params = {
    search: query || null,
    type: type || null,
    listingType: listingType || null,
  };

  const { data: allProperties } = await sanityFetch({
    query: PROPERTIES_QUERY,
    params,
  });

  const currentPage = parseInt(page || '1', 10);
  const propertyPerPage = 6;
  const totalProperties = allProperties.length;
  const totalPages = Math.ceil(totalProperties / propertyPerPage);

  const startIndex = (currentPage - 1) * propertyPerPage;
  const endIndex = startIndex + propertyPerPage;
  const properties = allProperties.slice(startIndex, endIndex);

  return (
    <Bounded>
      <div className="flex flex-col text-center items-center justify-center gap-5 md:gap-8">
        <PageTag title="All Properties" icon={<FaHome />} />
        <Title size="sm" as="h2" className="md:max-w-[50%]">
          Check on all properties we have available
        </Title>
        <Paragraph className="text-brand-neutral-500 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque
          quam nihil vel eius, ex tempore eum officiis ea pariatur.
        </Paragraph>
      </div>

      <PropertyFilter
        query={query || ''}
        type={type || ''}
        listingType={listingType || ''}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-8">
        <p className="col-span-full font-medium text-fs-500">
          {query ? `Search Results for '${query}'` : 'All Properties'}
        </p>
        {properties.map((property) => (
          <PropertyCard key={property.slug?.current} {...property} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex gap-2 items-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <Link
                scroll={false}
                key={pageNumber}
                href={{
                  pathname: '/properties',
                  query: {
                    ...(query && { query }),
                    ...(type && { type }),
                    ...(listingType && { listingType }),
                    page: pageNumber,
                  },
                }}
                className={clsx(
                  'px-2 py-1 border rounded',
                  currentPage === pageNumber
                    ? 'dark:bg-brand-neutral-200 dark:text-brand-neutral-700 bg-brand-neutral-700 text-brand-neutral-200'
                    : 'bg-brand-neutral-400 text-brand-neutral-500 dark:bg-brand-neutral-600 dark:text-brand-neutral-500',
                )}
              >
                {pageNumber}
              </Link>
            ),
          )}
        </div>
      )}
    </Bounded>
  );
};

export default PropertyPage;
