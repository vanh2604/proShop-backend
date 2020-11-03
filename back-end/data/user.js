import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'admin user',
    email: 'admin@example.com',
    password: bcrypt.hashSync('vietanh123'),
    isAdmin: true,
  },
  {
    name: 'vit',
    email: 'vit@example.com',
    password: bcrypt.hashSync('vietanh123'),
  },
  {
    name: 'lon',
    email: 'lon@example.com',
    password: bcrypt.hashSync('vietanh123'),
  },
];

export default users;
