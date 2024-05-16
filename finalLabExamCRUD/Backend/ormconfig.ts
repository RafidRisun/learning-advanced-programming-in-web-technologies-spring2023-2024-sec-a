import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';


const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'job',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  entities: [],
  synchronize: true,
};

export default config;
