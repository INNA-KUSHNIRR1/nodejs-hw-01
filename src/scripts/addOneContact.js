import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const oneContact = createFakeContact();
  try {
    const existingDate = await fs.readFile(PATH_DB, 'utf-8');
    const existingDateParse = JSON.parse(existingDate);
    existingDateParse.push(oneContact);
    fs.writeFile(PATH_DB, JSON.stringify(existingDateParse, null, 2), 'utf-8');
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
