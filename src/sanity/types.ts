/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch';
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: 'sanity.imagePalette';
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions';
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: 'sanity.fileAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: 'geopoint';
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Blog = {
  _id: string;
  _type: 'blog';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  shortDesc?: string;
  agent?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'agent';
  };
  coverImage?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: 'image';
  };
  categroy?: 'article' | 'news' | 'tips';
  desc?: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: 'span';
          _key: string;
        }>;
        style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
        listItem?: 'bullet';
        markDefs?: Array<{
          href?: string;
          _type: 'link';
          _key: string;
        }>;
        level?: number;
        _type: 'block';
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: 'reference';
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
        };
        media?: unknown;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: 'image';
        _key: string;
      }
  >;
};

export type BlockContent = Array<
  | {
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: 'span';
        _key: string;
      }>;
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
      listItem?: 'bullet';
      markDefs?: Array<{
        href?: string;
        _type: 'link';
        _key: string;
      }>;
      level?: number;
      _type: 'block';
      _key: string;
    }
  | {
      asset?: {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: 'image';
      _key: string;
    }
>;

export type Amenity = Array<string>;

export type Property = {
  _id: string;
  _type: 'property';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  type?: 'house' | 'loft' | 'apartment' | 'office';
  listingType?: 'sale' | 'rent';
  city?: string;
  address?: string;
  price?: number;
  bedrooms?: number;
  bathrooms?: number;
  parking?: boolean;
  sqft?: number;
  shortDesc?: string;
  longDesc?: string;
  amenities?: Amenity;
  agent?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'agent';
  };
  mainImage?: Array<{
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: 'image';
    _key: string;
  }>;
};

export type Agent = {
  _id: string;
  _type: 'agent';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  username?: string;
  email?: string;
  phone?: number;
  location?: string;
  position?: string;
  bio?: BlockContent;
  experience?: BlockContent;
  listing?: Array<{
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: 'property';
  }>;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
};

export type SanityImageCrop = {
  _type: 'sanity.imageCrop';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot';
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: 'sanity.imageAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData';
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata';
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Slug = {
  _type: 'slug';
  current?: string;
  source?: string;
};

export type Subscription = {
  _id: string;
  _type: 'subscription';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  email?: string;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Blog
  | BlockContent
  | Amenity
  | Property
  | Agent
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Slug
  | Subscription;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: AGENTS_QUERY
// Query: *[_type == 'agent' && defined(slug.current)]{  name,  slug,  location,  phone,  position,  email,  mainImage{    asset->{url}  } } | order(name)
export type AGENTS_QUERYResult = Array<{
  name: string | null;
  slug: Slug | null;
  location: string | null;
  phone: number | null;
  position: string | null;
  email: string | null;
  mainImage: {
    asset: {
      url: string | null;
    } | null;
  } | null;
}>;
// Variable: AGENT_QUERY
// Query: *[_type == 'agent' && slug.current == $slug][0]{  name,  slug,  location,  phone,  email,  username,  position,  bio,  experience,  listing[]->{    title,    slug,    price,    mainImage[],    type  },  mainImage{    asset->{url}  } }
export type AGENT_QUERYResult = {
  name: string | null;
  slug: Slug | null;
  location: string | null;
  phone: number | null;
  email: string | null;
  username: string | null;
  position: string | null;
  bio: BlockContent | null;
  experience: BlockContent | null;
  listing: Array<{
    title: string | null;
    slug: Slug | null;
    price: number | null;
    mainImage: Array<{
      asset?: {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: 'image';
      _key: string;
    }> | null;
    type: 'apartment' | 'house' | 'loft' | 'office' | null;
  }> | null;
  mainImage: {
    asset: {
      url: string | null;
    } | null;
  } | null;
} | null;
// Variable: PROPERTIES_QUERY
// Query: *[_type == 'property' && defined(slug.current) && (!defined($search) || title match $search || type match $search || listingType match $search || address match $search) && (!defined($type) || type == $type) && (!defined($listingType) || listingType == $listingType) ]{  title,  slug,  type,  sqft,  bathrooms,  bedrooms,  address,  listingType,  price,  parking,  mainImage[0]{    alt,    asset->{url}  } } | order(_createdAt)
export type PROPERTIES_QUERYResult = Array<{
  title: string | null;
  slug: Slug | null;
  type: 'apartment' | 'house' | 'loft' | 'office' | null;
  sqft: number | null;
  bathrooms: number | null;
  bedrooms: number | null;
  address: string | null;
  listingType: 'rent' | 'sale' | null;
  price: number | null;
  parking: boolean | null;
  mainImage: {
    alt: string | null;
    asset: {
      url: string | null;
    } | null;
  } | null;
}>;
// Variable: PROPERTY_QUERY
// Query: *[_type == 'property' && slug.current == $slug][0]{  title,  slug,  type,  sqft,  bathrooms,  bedrooms,  address,  listingType,  shortDesc,  longDesc,  price,  parking,  agent->{    name,    slug  },  city,  mainImage[]{    alt,    asset->{url}  },  amenities }
export type PROPERTY_QUERYResult = {
  title: string | null;
  slug: Slug | null;
  type: 'apartment' | 'house' | 'loft' | 'office' | null;
  sqft: number | null;
  bathrooms: number | null;
  bedrooms: number | null;
  address: string | null;
  listingType: 'rent' | 'sale' | null;
  shortDesc: string | null;
  longDesc: string | null;
  price: number | null;
  parking: boolean | null;
  agent: {
    name: string | null;
    slug: Slug | null;
  } | null;
  city: string | null;
  mainImage: Array<{
    alt: string | null;
    asset: {
      url: string | null;
    } | null;
  }> | null;
  amenities: Amenity | null;
} | null;

// Query TypeMap
import '@sanity/client';
declare module '@sanity/client' {
  interface SanityQueries {
    "*[_type == 'agent'\n && defined(slug.current)]{\n  name,\n  slug,\n  location,\n  phone,\n  position,\n  email,\n  mainImage{\n    asset->{url}\n  }\n } | order(name)": AGENTS_QUERYResult;
    "*[_type == 'agent'\n && slug.current == $slug][0]{\n  name,\n  slug,\n  location,\n  phone,\n  email,\n  username,\n  position,\n  bio,\n  experience,\n  listing[]->{\n    title,\n    slug,\n    price,\n    mainImage[],\n    type\n  },\n  mainImage{\n    asset->{url}\n  }\n }": AGENT_QUERYResult;
    "*[_type == 'property'\n && defined(slug.current)\n && (!defined($search) || title match $search || type match $search || listingType match $search || address match $search)\n && (!defined($type) || type == $type)\n && (!defined($listingType) || listingType == $listingType)\n ]{\n  title,\n  slug,\n  type,\n  sqft,\n  bathrooms,\n  bedrooms,\n  address,\n  listingType,\n  price,\n  parking,\n  mainImage[0]{\n    alt,\n    asset->{url}\n  }\n } | order(_createdAt)": PROPERTIES_QUERYResult;
    "*[_type == 'property'\n && slug.current == $slug][0]{\n  title,\n  slug,\n  type,\n  sqft,\n  bathrooms,\n  bedrooms,\n  address,\n  listingType,\n  shortDesc,\n  longDesc,\n  price,\n  parking,\n  agent->{\n    name,\n    slug\n  },\n  city,\n  mainImage[]{\n    alt,\n    asset->{url}\n  },\n  amenities\n }": PROPERTY_QUERYResult;
  }
}
