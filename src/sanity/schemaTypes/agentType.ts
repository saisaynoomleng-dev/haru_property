import { FaUserCheck } from 'react-icons/fa';
import { defineArrayMember, defineField, defineType, Preview } from 'sanity';

export const agentType = defineType({
  name: 'agent',
  icon: FaUserCheck,
  title: 'Agent',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      description: 'City or State',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'blockContent',
    }),
    defineField({
      name: 'listing',
      title: 'Listings',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'property' } }],
    }),
    defineField({
      name: 'mainImage',
      title: 'MainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      name: 'name',
      location: 'location',
      image: 'image',
    },
    prepare({ name, location, image }) {
      return {
        title: name || 'unspecified',
        subtitle: location,
        media: image || FaUserCheck,
      };
    },
  },
});
