import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from 'src/entities/job.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepo: Repository<Job>,
  ) {}

  async create(createJobDto: CreateJobDto): Promise<Job> {
    const job = this.jobRepo.create({ ...createJobDto });
    return await this.jobRepo.save(job);
  }

  async findAll(): Promise<Job[]> {
    return await this.jobRepo.find();
  }

  async findOne(id: number): Promise<Job | undefined> {
    return await this.jobRepo.findOne({where:{id: id}});
  }

  async update(id: number, updateJobDto: UpdateJobDto): Promise<Job> {
    const job = await this.jobRepo.findOne({where:{id: id}});
    if (!job) {
      throw new NotFoundException('Job not found');
    }

    this.jobRepo.merge(job, updateJobDto);
    return await this.jobRepo.save(job);
  }

  async remove(id: number): Promise<void> {
    const job = await this.jobRepo.findOne({where:{id: id}});
    if (!job) {
      throw new NotFoundException('Job not found');
    }

    await this.jobRepo.remove(job);
  }
}
