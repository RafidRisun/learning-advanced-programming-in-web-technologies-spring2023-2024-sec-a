import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {

  constructor(
    @InjectRepository(Employee) private readonly empRepo: Repository<Employee>
  ){}

  create(createEmployeeDto: CreateEmployeeDto) {
    const employee = this.empRepo.create({ ...createEmployeeDto });
    return this.empRepo.save(employee);
  }
  

  findAll() {
    return this.empRepo.find({});
  }

  findOne(id: number) {
    return this.empRepo.findOne({ where: {id: id}});
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const emp = await this.empRepo.findOne({ where: { id: id } });
    if (!emp) {
      return undefined;
    }
    const updatedEmployee = Object.assign(emp, updateEmployeeDto);
    return this.empRepo.save(updatedEmployee);
  }

  async remove(id: number) {
    const emp = await this.empRepo.findOne({ where: {id: id}});
    if (!emp) {
      return undefined; 
    }
    await this.empRepo.remove(emp);
    return emp;
  }
}
