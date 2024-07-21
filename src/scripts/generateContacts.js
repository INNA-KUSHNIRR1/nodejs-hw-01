import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  const newContacts = Array.from({ length: number }, createFakeContact);
  try {
    const existingDate = await fs.readFile(PATH_DB, 'utf-8');
    const newDate = [...JSON.parse(existingDate), ...newContacts];
    fs.writeFile(PATH_DB, JSON.stringify(newDate, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error in operations', error);
  }
};

generateContacts(3);
