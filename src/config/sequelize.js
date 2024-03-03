import 'dotenv/config';

const {
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
} = process.env;

const defaultConfig = {
  dialect: 'postgres',
  timezone: '+03:00',
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOST,
  port: Number(DB_PORT),
  define: {
    paranoid: true,
  },
};

export const development = {
  ...defaultConfig,
};

export const test = {
  dialect: 'sqlite',
  storage: ':memory:',
  logging: false,
};

export const production = {
  ...defaultConfig,
  logging: false,
};
