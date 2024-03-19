import { Injectable } from '@nestjs/common';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';

@Injectable()
export class RegistrationService {
  create(createRegistrationDto: CreateRegistrationDto) {
    return 'This action adds a new registration';
  }
}
