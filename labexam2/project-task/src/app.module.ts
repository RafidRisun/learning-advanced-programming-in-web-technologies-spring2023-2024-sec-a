import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { LogoutModule } from './logout/logout.module';
import { RegistrationModule } from './registration/registration.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [LoginModule, LogoutModule, RegistrationModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
