import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from '../admin.service';
import { CreateAdminDto, loginDTO } from '../dto/create-admin.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthAdminService {
    constructor(
        private adminService: AdminService,
        private jwtService: JwtService
      ) { }
      async signUp(createUserDto: CreateAdminDto): Promise<Object> {
        return await this.adminService.addadmin(createUserDto);
      }
      async signIn(logindata: loginDTO): Promise<{ access_token: string }> {
        const user = await this.adminService.findOneWithDto(logindata);
        if (!user) {
          throw new UnauthorizedException();
        }
        const isMatch = await bcrypt.compare(logindata.password, user.password);
        if (!isMatch) {
          throw new UnauthorizedException();
        }
        const payload = logindata;
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
      }
}
