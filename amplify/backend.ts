import { defineBackend } from '@aws-amplify/backend';
// import { Auth } from '@aws-amplify/auth';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';
/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
defineBackend({
  auth,
  data,
  storage
});
// const backend = defineBackend({
//   auth: Auth.configure({
//     loginWith: ['email'], // または 'username'
//   }),
// });
