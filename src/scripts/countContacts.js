import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const totalContacts = await fs.readFile(PATH_DB, 'utf-8');
    const totalContactsParse = JSON.parse(totalContacts);
    const count = totalContactsParse.length;
    return count;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
