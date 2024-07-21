import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const totalContacts = await fs.readFile(PATH_DB, 'utf-8');
    const totalContactsParse = JSON.parse(totalContacts);
    totalContactsParse.length = 0;
    fs.writeFile(PATH_DB, JSON.stringify(totalContactsParse));
  } catch (error) {
    console.log(error);
  }
};

removeAllContacts();
