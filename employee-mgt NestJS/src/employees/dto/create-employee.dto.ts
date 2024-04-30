import { IsNotEmpty } from 'class-validator';
export class CreateEmployeeDto {
    id: number;

    fullname: string;

    companyname: string;

    contacts: string;

    username: string;

    password: string;
}
