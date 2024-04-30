import { CreateEmployeeDto } from './create-employee.dto';
declare const UpdateEmployeeDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateEmployeeDto>>;
export declare class UpdateEmployeeDto extends UpdateEmployeeDto_base {
    fullname: string;
    companyname: string;
    contacts: string;
    username: string;
    password: string;
}
export {};
