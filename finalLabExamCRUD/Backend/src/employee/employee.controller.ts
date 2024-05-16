import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeService } from 'src/employee/employee.service';
import { CreateEmployeeDto } from 'src/employee/dto/create-employee.dto';
import { JobService } from 'src/job/job.service';
import { CreateJobDto } from 'src/job/dto/create-job.dto';
import { UpdateJobDto } from 'src/job/dto/update-job.dto';

@Controller('employee')
export class AdminController {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly jobService: JobService
  ) {}

  @Post(':id/create/job')
  async createJob(@Body() createJobDto: CreateJobDto, @Param('id') id: number) {
    const jobId = id;
    createJobDto.id = jobId;
    return this.jobService.create(createJobDto);
  }

  @Get()
  findAll() {
    return this.jobService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(+id);
  }

  @Get(':id/job')
  findJob(@Param('id') id: string) {
    return this.jobService.findOne(+id);
  }

  @Patch(':id/update/job')
  update(@Param('id') id: string, @Body() updateJobDto: UpdateJobDto) {
    return this.jobService.update(+id, updateJobDto);
  }

  @Delete(':id/delete/job')
  remove(@Param('id') id: string) {
    return this.jobService.remove(+id);
  }
}
