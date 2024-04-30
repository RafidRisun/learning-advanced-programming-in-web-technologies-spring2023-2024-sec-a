import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [UserModule, AdminModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
