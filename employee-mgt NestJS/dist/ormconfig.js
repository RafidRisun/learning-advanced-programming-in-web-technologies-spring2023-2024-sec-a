"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_entity_1 = require("./src/employees/entities/employee.entity");
const config = {
    type: 'postgres',
    database: 'Employee-mgt',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    entities: [employee_entity_1.Employee],
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map