import { Injectable } from '@nestjs/common';
import { CreateAdminDto, loginDTO } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private readonly adminRepo: Repository<Admin>
  ){}

  create(createadminDto: CreateAdminDto) {
    const admin = this.adminRepo.create({ ...createadminDto });
    return this.adminRepo.save(admin);
  }
  

  findAll() {
    return this.adminRepo.find({});
  }

  findOne(id: number) {
    return this.adminRepo.findOne({ where: {id: id}});
  }

  async findOneWithDto(logindata: loginDTO): Promise<any> {
    return await this.adminRepo.findOneBy({ email: logindata.email });
  }

  async update(id: number, updateadminDto: UpdateAdminDto) {
    const admin = await this.adminRepo.findOne({ where: { id: id } });
    if (!admin) {
      return undefined;
    }
    const updatedadmin = Object.assign(admin, updateadminDto);
    return this.adminRepo.save(updatedadmin);
  }

  async remove(id: number) {
    const admin = await this.adminRepo.findOne({ where: {id: id}});
    if (!admin) {
      return undefined; 
    }
    await this.adminRepo.remove(admin);
    return admin;
  }

  async addadmin(myobj: CreateAdminDto): Promise<Object> {
    return await this.adminRepo.save(myobj);
  }
}
