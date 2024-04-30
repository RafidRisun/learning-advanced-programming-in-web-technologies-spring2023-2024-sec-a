import { Employee } from "src/employees/entities/employee.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
    type: 'postgres',
    database: 'Employee-mgt',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    entities: [ Employee ],
    synchronize: true,
  };
  
  export default config;