import { Module } from '@nestjs/common';
import { AuthAdminController } from './authAdmin.controller';
import { AuthAdminService } from './authAdmin.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AdminModule } from '../admin.module';


@Module({
  imports: [
    AdminModule, 
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [ AuthAdminController ],
  providers: [ AuthAdminService ],
})
export class AuthAdminModule {}
