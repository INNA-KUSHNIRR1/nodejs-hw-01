import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const allContacts = await fs.readFile(PATH_DB, 'utf-8');
    const allContactsParse = JSON.parse(allContacts);
    return allContactsParse;
  } catch (error) {
    console.log(error);
  }
};

console.log(await getAllContacts());
