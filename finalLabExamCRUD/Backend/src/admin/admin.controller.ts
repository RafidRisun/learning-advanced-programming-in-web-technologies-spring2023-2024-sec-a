import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { EmployeeService } from 'src/employee/employee.service';
import { CreateEmployeeDto } from 'src/employee/dto/create-employee.dto';
import { UpdateEmployeeDto } from 'src/employee/dto/update-employee.dto';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly employeeService: EmployeeService
  ) {}

  @Post(':id/create/admin')
  async createadmin(@Body() createAdminDto: CreateAdminDto, @Param('id') id: number) {
    const adminId = id;
    createAdminDto.id = adminId;
    return this.adminService.create(createAdminDto);
  }

  @Post(':id/create/employee')
  async createEmp(@Body() createEmployeeDto: CreateEmployeeDto, @Param('id') id: number) {
    const employeeId = id;
    createEmployeeDto.id = employeeId;
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @Get(':id/employee')
  findEmployee(@Param('id') id: string) {
    return this.employeeService.findOne(+id);
  }

  @Patch(':id/update/employee')
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.update(+id, updateEmployeeDto);
  }

  @Delete(':id/delete/employee')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }
}
