import { FaHome } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';
import { BiDetail } from 'react-icons/bi';
import { MdPermMedia } from 'react-icons/md';

export const propertyType = defineType({
  name: 'property',
  title: 'Property',
  icon: FaHome,
  type: 'document',
  groups: [
    { title: 'Details', name: 'details', icon: BiDetail },
    { title: 'Media', name: 'media', icon: MdPermMedia },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      hidden: ({ document }) => !document?.title,
      group: 'details',
      validation: (rule) =>
        rule.required().info(`Required to generate a page on the website`),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'House', value: 'house' },
          { title: 'Loft', value: 'loft' },
          { title: 'Apartment', value: 'apartment' },
          { title: 'Office', value: 'office' },
        ],
        layout: 'radio',
      },
      validation: (rule) =>
        rule.required().info(`Required to generate a page on the website`),
      group: 'details',
    }),
    defineField({
      name: 'listingType',
      title: 'Listing Type',
      type: 'string',
      options: {
        list: [
          { title: 'Sale', value: 'sale' },
          { title: 'Rent', value: 'rent' },
        ],
        layout: 'radio',
      },
      validation: (rule) =>
        rule.required().info(`Required to generate a page on the website`),
      group: 'details',
    }),
    defineField({
      name: 'city',
      title: 'City',
      description:
        'Providing city for the property make your property easier to find in search.',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'details',
    }),
    defineField({
      name: 'address',
      title: 'Full Address',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'details',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      description: 'provide per month for rent',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'details',
    }),
    defineField({
      name: 'bedrooms',
      title: 'Number of bedrooms',
      type: 'number',
      initialValue: 1,
      validation: (rule) => rule.required(),
      group: 'details',
    }),
    defineField({
      name: 'bathrooms',
      title: 'Number of Bathrooms',
      type: 'number',
      initialValue: 1,
      validation: (rule) => rule.required(),
      group: 'details',
    }),
    defineField({
      name: 'parking',
      title: 'Parking Availability',
      type: 'boolean',
      initialValue: false,
      group: 'details',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sqft',
      title: 'Square Feet',
      type: 'number',
      validation: (rule) => rule.required(),
      group: 'details',
    }),
    defineField({
      name: 'shortDesc',
      title: 'Short Description',
      type: 'text',
      validation: (rule) => rule.required(),
      group: 'details',
    }),
    defineField({
      name: 'longDesc',
      title: 'Long Description',
      type: 'text',
      validation: (rule) => rule.required(),
      group: 'details',
    }),
    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'amenity',
      group: 'details',
    }),
    defineField({
      name: 'agent',
      title: 'Agent',
      type: 'reference',
      to: [{ type: 'agent' }],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Images',
      type: 'array',
      of: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
      validation: (rule) => rule.required(),
      group: 'media',
    }),
  ],
  preview: {
    select: {
      name: 'title',
      image: 'mainImage.0.image',
      location: 'location',
      listingType: 'listingType',
    },
    prepare({ name, image, location, listingType }) {
      const listingFormatted = listingType ? `For ${listingType}` : 'Unlisted';
      const nameFormatted = name ? name.toUpperCase() : name;

      return {
        title: nameFormatted,
        subtitle: `City: ${location}, ${listingFormatted}`,
        media: image || FaHome,
      };
    },
  },
});
