import { AGENTS_QUERYResult } from '@/sanity/types';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Title from './Title';
import Paragraph from './Paragraph';
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';

const AgentCard = (props: NonNullable<AGENTS_QUERYResult>[number]) => {
  const { slug, mainImage, name, position, location, phone, email } = props;
  return (
    <Link
      href={`/agents/${slug?.current}`}
      className="py-5 px-2 flex flex-col items-center justify-center text-center gap-3 relative group bg-brand-neutral-100 rounded-sm dark:bg-brand-neutral-600 dark:text-brand-light-400"
    >
      <div className="overflow-hidden max-w-[200px] rounded-full">
        {mainImage?.asset?.url && (
          <Image
            src={urlFor(mainImage.asset.url)
              .width(550)
              .height(550)
              .auto('format')
              .format('webp')
              .url()}
            width={150}
            height={150}
            alt={`${name}'s Profile picture'`}
            priority
            className="object-cover  mx-auto group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        )}
      </div>
      <Title size="sm" as="h3">
        {name}
      </Title>
      <Paragraph>{position}</Paragraph>
      <div className="flex justify-center gap-2 flex-col text-fs-300">
        <div className="flex gap-2 items-center">
          <FaEnvelope />
          <Paragraph>{email}</Paragraph>
        </div>

        <div className="flex gap-2 items-center">
          <FaPhoneAlt />
          <Paragraph>{phone}</Paragraph>
        </div>

        <div className="flex gap-2 items-center">
          <FaLocationArrow />
          <Paragraph>{location}</Paragraph>
        </div>
      </div>
    </Link>
  );
};

export default AgentCard;
