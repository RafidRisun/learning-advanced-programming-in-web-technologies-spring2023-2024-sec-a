import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user.service';
import { CreateUserDto, loginDTO } from '../dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
      ) { }
      async signUp(createUserDto: CreateUserDto): Promise<Object> {
        return await this.userService.addUser(createUserDto);
      }
      async signIn(logindata: loginDTO): Promise<{ access_token: string }> {
        const user = await this.userService.findOneWithDto(logindata);
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
