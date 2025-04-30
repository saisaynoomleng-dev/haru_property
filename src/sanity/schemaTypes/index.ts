import { type SchemaTypeDefinition } from 'sanity';
import { subscriptionType } from './subscriptionType';
import { propertyType } from './propertyType';
import { amenityType } from './amenityType';
import { blockContentType } from './blockContentType';
import { agentType } from './agentType';
import { blogType } from './blogType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    subscriptionType,
    propertyType,
    amenityType,
    blockContentType,
    agentType,
    blogType,
  ],
};
