import { Product } from "src/product/entities/product.entity";
import { User } from "src/user/entities/user.entity";
import { Admin } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
    type: 'postgres',
    database: 'Product-mgt',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    entities: [ User, Admin, Product ],
    synchronize: true,
  };
  
  export default config;