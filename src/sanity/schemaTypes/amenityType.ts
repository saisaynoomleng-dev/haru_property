import { BiDetail } from 'react-icons/bi';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const amenityType = defineType({
  name: 'amenity',
  icon: BiDetail,
  type: 'array',
  of: [{ type: 'string' }],
  options: {
    list: [
      { title: 'Pool', value: 'pool' },
      { title: 'Garden', value: 'garden' },
      { title: 'Gym', value: 'gym' },
      { title: 'AC', value: 'ac' },
      { title: 'Internet', value: 'internet' },
      { title: 'Security Camera', value: 'securityCamera' },
      { title: 'Garage', value: 'garage' },
      { title: 'Dishwasher', value: 'dishwasher' },
      { title: 'Laundry', value: 'laundry' },
      { title: 'Hot Tub', value: 'hotTub' },
      { title: 'Pet Friendly', value: 'petFriendly' },
      { title: 'Smoke Free', value: 'smokeFree' },
      { title: 'Cable TV', value: 'cableTV' },
      { title: 'Kitchen', value: 'kitchen' },
      { title: 'Grill', value: 'grill' },
      { title: 'Sport Field', value: 'sportField' },
      { title: 'Kid Zone', value: 'kidZone' },
    ],
    layout: 'grid',
  },
  validation: (rule) => rule.required().min(1),
});
