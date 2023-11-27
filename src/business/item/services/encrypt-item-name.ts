'use server';

import bcrypt from 'bcrypt';

const SALT = 10;

const encryptItemName = (name: string) => {
  return bcrypt.hashSync(name, SALT);
};

export { encryptItemName };
