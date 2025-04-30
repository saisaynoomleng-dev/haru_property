import { BiDetail } from 'react-icons/bi';
import { defineField, defineType } from 'sanity';

export const blogType = defineType({
  name: 'blog',
  title: 'blog',
  icon: BiDetail,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Blog Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      hidden: ({ document }) => !document?.title,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortDesc',
      title: 'Short Description',
      type: 'text',
    }),
    defineField({
      name: 'agent',
      type: 'reference',
      to: [{ type: 'agent' }],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Photo',
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categroy',
      title: 'Blog Category',
      type: 'string',
      options: {
        list: [
          { title: 'Article', value: 'article' },
          { title: 'News', value: 'news' },
          { title: 'Tips', value: 'tips' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'blockContent',
    }),
  ],
});
