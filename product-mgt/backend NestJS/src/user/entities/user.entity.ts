import { Product } from 'src/product/entities/product.entity';
import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  
  @Entity('users')
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    fullName: string;
  
    @Column()
    userName: string;
  
    @Column()
    email: string;
  
    @Column()
    password: string;
  
    @Column()
    confirmPassword: string;

    @OneToMany(() => Product, product => product.user)
    product: Product;

  
  }
  