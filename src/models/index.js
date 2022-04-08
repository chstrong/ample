// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, Todo } = initSchema(schema);

export {
  Category,
  Todo
};