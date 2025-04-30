import { FaUserPlus } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const subscriptionType = defineType({
  name: 'subscription',
  icon: FaUserPlus,
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      email: 'email',
    },
    prepare({ email }) {
      return {
        title: `Email: ${email}`,
      };
    },
  },
});
