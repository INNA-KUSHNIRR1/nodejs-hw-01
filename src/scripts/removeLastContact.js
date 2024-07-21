import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const totalContacts = await fs.readFile(PATH_DB, 'utf-8');
    const totalContactsParse = JSON.parse(totalContacts);

    if (totalContactsParse.length > 0) {
      totalContactsParse.pop();
      fs.writeFile(PATH_DB, JSON.stringify(totalContactsParse, null, 2));
    }
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
