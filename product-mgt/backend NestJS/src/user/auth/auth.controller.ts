import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('user')
export class UserController {
  constructor(private readonly authService: AuthService) {}

  
}
