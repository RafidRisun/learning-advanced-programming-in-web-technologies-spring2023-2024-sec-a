import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, loginDTO } from '../dto/create-user.dto';
import * as bcrypt from 'bcrypt';
@Controller('user/auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('register')
  @UsePipes(new ValidationPipe())
  async addUser(@Body() myobj: CreateUserDto,): Promise<Object> {
    const salt = await bcrypt.genSalt();
    const hashedpassword = await bcrypt.hash(myobj.password, salt);
    myobj.password = hashedpassword;
    return this.authService.signUp(myobj);
  }
  @Post('login')
  signIn(@Body() logindata: loginDTO) {
    return this.authService.signIn(logindata);
  }
}