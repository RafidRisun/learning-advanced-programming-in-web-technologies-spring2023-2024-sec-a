import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { EmployeeModule } from './employee/employee.module';
import { JobModule } from './job/job.module';

@Module({
  imports: [AdminModule, EmployeeModule, JobModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
