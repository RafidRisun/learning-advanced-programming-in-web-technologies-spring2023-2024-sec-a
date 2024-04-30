import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
export declare class EmployeesService {
    private readonly empRepo;
    constructor(empRepo: Repository<Employee>);
    create(createEmployeeDto: CreateEmployeeDto): Promise<Employee>;
    findAll(): Promise<Employee[]>;
    findOne(id: number): Promise<Employee>;
    update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee & UpdateEmployeeDto>;
    remove(id: number): Promise<Employee>;
}
