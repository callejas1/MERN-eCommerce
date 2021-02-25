import bcrypt from 'bcryptjs'; // hash pw

const users = [
  {
    name: 'Yoselyn C',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Enny Adepitan',
    email: 'ennyadepitan@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jorja Smith',
    email: 'jorjasmith@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
