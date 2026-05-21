require('dotenv').config();

module.exports = {
  PORT: process.env.PORT ? Number(process.env.PORT) : 3000,
};
