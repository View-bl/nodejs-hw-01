import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const contacts = await readContacts();
  return contacts;
};

const run = async () => {
  const contacts = await getAllContacts();
  console.log(contacts);
};

run();
