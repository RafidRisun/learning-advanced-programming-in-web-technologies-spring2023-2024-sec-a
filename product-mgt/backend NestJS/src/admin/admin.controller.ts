import { Controller, Get, Post, Put, Delete, Body, Param, Patch } from '@nestjs/common';
import { Product } from 'src/product/entities/product.entity';
import { ProductService } from 'src/product/product.service';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { Admin } from './entities/admin.entity';

@Controller('admin/products')
export class AdminController {
  constructor(
    private readonly productService: ProductService,
    private readonly adminService: AdminService
  ) {}

  @Post()
  async create(@Body() createAdminDto: CreateAdminDto): Promise<Admin> {
    return await this.adminService.create(createAdminDto);
  }

  @Get('products/')
  async getAllProducts(): Promise<Product[]> {
    return await this.productService.getAllProducts();
  }

  @Get('product/:id')
  async getProductById(@Param('id') id: number): Promise<Product> {
    return await this.productService.getProductById(id);
  }

  @Post('product/')
  async createProduct(@Body() product: Product): Promise<Product> {
    return await this.productService.createProduct(product);
  }

  @Patch(':id')
  async updateProduct(@Param('id') id: number, @Body() updatedProduct: Product): Promise<Product> {
    return await this.productService.updateProduct(id, updatedProduct);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number): Promise<void> {
    return await this.productService.deleteProduct(id);
  }
}
