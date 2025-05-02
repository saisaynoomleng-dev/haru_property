import { urlFor } from '@/sanity/lib/image';
import { PROPERTIES_QUERYResult } from '@/sanity/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  IoBedOutline,
  IoCarSportOutline,
  IoKey,
  IoPricetag,
} from 'react-icons/io5';
import Paragraph from './Paragraph';
import { CiMapPin } from 'react-icons/ci';
import { GiResize } from 'react-icons/gi';
import { TbBath } from 'react-icons/tb';
import { Button } from './ui/button';

const PropertyCard = (props: NonNullable<PROPERTIES_QUERYResult>[number]) => {
  const {
    title,
    slug,
    type,
    sqft,
    bathrooms,
    bedrooms,
    address,
    listingType,
    price,
    parking,
    mainImage,
  } = props;

  return (
    <Link
      href={`/properties/${slug?.current}`}
      className="p-2 flex flex-col gap-2 rounded-lg shadow-sm shadow-brand-neutral-700/20 dark:shadow-brand-neutral-100/10"
    >
      <div className="relative overflow-hidden group rounded-lg">
        {mainImage?.asset?.url && (
          <Image
            src={urlFor(mainImage.asset.url)
              .width(500)
              .height(500)
              .format('webp')
              .auto('format')
              .url()}
            width={500}
            height={500}
            style={{ width: 'auto', height: 'auto' }}
            alt={mainImage.alt || ''}
            priority
            className="rounded-lg min-w-full aspect-video mx-auto object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        )}

        <div className="absolute left-5 top-3">
          <p className="bg-brand-neutral-700 text-brand-neutral-100 p-2 capitalize rounded-lg font-semibold text-fs-300 flex gap-2">
            For {listingType}
            <span>{listingType === 'rent' ? <IoKey /> : <IoPricetag />}</span>
          </p>
        </div>

        <div className="absolute right-5 top-3">
          <p className="bg-brand-neutral-700 text-brand-neutral-100 p-2 capitalize rounded-lg font-semibold text-fs-300">
            {type}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <Paragraph className="font-semibold text-brand-neutral-500 dark:text-brand-neutral-400">
          {title}
        </Paragraph>

        <Paragraph className="text-fs-300 !min-w-full">
          <CiMapPin className="inline size-5" /> {address}
        </Paragraph>
      </div>

      <div className="custom-divider" />

      <div className="flex gap-2 items-center justify-around text-brand-neutral-500 font-medium text-fs-300">
        <p className="flex gap-1 items-center">
          <span>
            <GiResize className="size-5" />
          </span>
          {sqft}sqft
        </p>

        <p className="flex gap-1 items-center">
          <span>
            <TbBath className="size-5" />
          </span>
          {bathrooms}
        </p>

        <p className="flex gap-1 items-center">
          <span>
            <IoBedOutline className="size-5" />
          </span>
          {bedrooms}
        </p>

        <p className="flex gap-1 items-center">
          <span>
            <IoCarSportOutline className="size-5" />
          </span>
          {parking ? 'Parking Lot Available' : 'No Parking Lot'}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-fs-300">
          $&nbsp;{price?.toLocaleString()}
          {listingType === 'rent' && '/ month'}
        </p>
        <Button variant="link">Contact Agent</Button>
      </div>
    </Link>
  );
};

export default PropertyCard;
