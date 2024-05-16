import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from 'src/entities/employee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepo: Repository<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const employee = this.employeeRepo.create({ ...createEmployeeDto });
    return await this.employeeRepo.save(employee);
  }

  async findAll(): Promise<Employee[]> {
    return await this.employeeRepo.find();
  }

  async findOne(id: number): Promise<Employee> {
    return await this.employeeRepo.findOne({where: {id: id}});
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    const employee = await this.employeeRepo.findOne({where: {id: id}});
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }
    this.employeeRepo.merge(employee, updateEmployeeDto);
    return await this.employeeRepo.save(employee);
  }

  async remove(id: number): Promise<void> {
    const employee = await this.employeeRepo.findOne({where: {id: id}});
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    await this.employeeRepo.remove(employee);
  }
}
