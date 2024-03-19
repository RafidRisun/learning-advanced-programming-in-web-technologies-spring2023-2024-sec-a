import { Login } from "src/login/entities/login.entity";
import { Logout } from "src/logout/entities/logout.entity";
import { Registration } from "src/registration/entities/registration.entity";
import { User } from "src/user/entities/user.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
    type: "postgres",
    database: "task",
    host:  "localhost",
    port: 5432,
    username: 'postgres',
    password: 'admin',
    entities: [Login, Logout, Registration, User],
    synchronize: true,
};

export default config;