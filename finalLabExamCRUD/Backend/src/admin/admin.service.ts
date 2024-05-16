import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/entities/admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private readonly adminRepo: Repository<Admin>
  ){}
  
  async create(createAdminDto: CreateAdminDto): Promise<Admin>{
    const admin = this.adminRepo.create({...createAdminDto});
    return await this.adminRepo.save(admin);
  }
  

  async findAll() {
    return await this.adminRepo.find({});
  }

  async findOne(id: number) {
    const admin = await this.adminRepo.findOne({ where: { id: id } });
    if(admin){
      return true;
    }
  }
}
