import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
    fullname: string;

    companyname: string;

    contacts: string;

    username: string;

    password: string;
}
