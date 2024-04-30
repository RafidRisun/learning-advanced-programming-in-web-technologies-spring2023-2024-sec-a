import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return await this.productRepo.find();
  }

  async getProductById(id: number): Promise<Product> {
    const product = await this.productRepo.findOne({ where: {id: id}});
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  async createProduct(productData: Product): Promise<Product> {
    const product = this.productRepo.create(productData);
    return await this.productRepo.save(product);
  }

  async updateProduct(id: number, updatedProductData: Product): Promise<Product> {
    const existingProduct = await this.getProductById(id);
    const updatedProduct = { ...existingProduct, ...updatedProductData };
    return await this.productRepo.save(updatedProduct);
  }

  async deleteProduct(id: number): Promise<void> {
    const result = await this.productRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
  }
}
