'use server';

import bcrypt from 'bcrypt';

const SALT = 10;

const encryptItem = (name: string) => {
  return bcrypt.hashSync(name, SALT);
};

export { encryptItem };
