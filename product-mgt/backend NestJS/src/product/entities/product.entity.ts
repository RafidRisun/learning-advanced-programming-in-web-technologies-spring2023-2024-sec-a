import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productname: string;

    @Column()
    description: string;

    @Column()
    price: number;
  }
  