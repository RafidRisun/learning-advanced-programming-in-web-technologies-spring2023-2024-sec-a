import { Injectable } from '@nestjs/common';
import { CreateUserDto, loginDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>
  ){}

  create(createUserDto: CreateUserDto) {
    const user = this.userRepo.create({ ...createUserDto });
    return this.userRepo.save(user);
  }
  

  findAll() {
    return this.userRepo.find({});
  }

  findOne(id: number) {
    return this.userRepo.findOne({ where: {id: id}});
  }

  async findOneWithDto(logindata: loginDTO): Promise<any> {
    return await this.userRepo.findOneBy({ email: logindata.email });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepo.findOne({ where: { id: id } });
    if (!user) {
      return undefined;
    }
    const updatedUser = Object.assign(user, updateUserDto);
    return this.userRepo.save(updatedUser);
  }

  async remove(id: number) {
    const user = await this.userRepo.findOne({ where: {id: id}});
    if (!user) {
      return undefined; 
    }
    await this.userRepo.remove(user);
    return user;
  }

  async addUser(myobj: CreateUserDto): Promise<Object> {
    return await this.userRepo.save(myobj);
  }
}
