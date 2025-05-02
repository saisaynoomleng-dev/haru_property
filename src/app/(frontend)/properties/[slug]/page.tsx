import Bounded from '@/components/Bounded';
import Paragraph from '@/components/Paragraph';
import Title from '@/components/Title';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { PROPERTY_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import { FaLocationPin } from 'react-icons/fa6';

const PropertyDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: property } = await sanityFetch({
    query: PROPERTY_QUERY,
    params: await params,
  });

  if (!property?.mainImage) return null;

  return (
    <Bounded>
      {/* <div className="grid ">
        {property.mainImage.length > 0 &&
          property.mainImage.map((image) => (
            <Image
              key={image.asset?.url}
              src={urlFor(image.asset.url)
                .width(500)
                .height(500)
                .format('webp')
                .auto('format')
                .url()}
              width={500}
              height={500}
              alt={image.alt || ''}
              priority
              className="rounded-sm"
            />
          ))}
      </div> */}

      <div className="grid md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-5">
          <Paragraph className="flex items-center gap-2 text-fs-300 !min-w-full">
            <FaLocationPin />
            {property.address}
          </Paragraph>
          <Title as="h2" size="md">
            {property.title}
          </Title>
          <Paragraph className="min-w-full">{property.longDesc}</Paragraph>
        </div>
      </div>
    </Bounded>
  );
};

export default PropertyDetailPage;
