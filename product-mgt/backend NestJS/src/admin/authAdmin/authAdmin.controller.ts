import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthAdminService } from './authAdmin.service';
import { CreateAdminDto, loginDTO } from '../dto/create-admin.dto';
import * as bcrypt from 'bcrypt';
@Controller('admin/auth')
export class AuthAdminController {
  constructor(private authService: AuthAdminService) { }

  @Post('register')
  @UsePipes(new ValidationPipe())
  async addUser(@Body() myobj: CreateAdminDto,): Promise<Object> {
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