import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthAdminService } from './authAdmin.service';

@Controller('admin')
export class AuthAdminController {
  constructor(private readonly authService: AuthAdminService) {}

  
}
