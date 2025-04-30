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
