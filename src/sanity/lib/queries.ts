import { defineQuery } from 'next-sanity';

export const AGENTS_QUERY = defineQuery(`*[_type == 'agent'
 && defined(slug.current)]{
  name,
  slug,
  location,
  phone,
  position,
  email,
  mainImage{
    asset->{url}
  }
 } | order(name)`);

export const AGENT_QUERY = defineQuery(`*[_type == 'agent'
 && slug.current == $slug][0]{
  name,
  slug,
  location,
  phone,
  email,
  username,
  position,
  bio,
  experience,
  listing[]->{
    title,
    slug,
    price,
    mainImage[],
    type
  },
  mainImage{
    asset->{url}
  }
 }`);

export const PROPERTIES_QUERY = defineQuery(`*[_type == 'property'
 && defined(slug.current)
 && (!defined($search) || title match $search || type match $search || listingType match $search || address match $search)
 && (!defined($type) || type == $type)
 && (!defined($listingType) || listingType == $listingType)
 ]{
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
  mainImage[0]{
    alt,
    asset->{url}
  }
 } | order(_createdAt)`);

export const PROPERTY_QUERY = defineQuery(`*[_type == 'property'
 && slug.current == $slug][0]{
  title,
  slug,
  type,
  sqft,
  bathrooms,
  bedrooms,
  address,
  listingType,
  shortDesc,
  longDesc,
  price,
  parking,
  agent->{
    name,
    slug
  },
  city,
  mainImage[]{
    alt,
    asset->{url}
  },
  amenities
 }`);
