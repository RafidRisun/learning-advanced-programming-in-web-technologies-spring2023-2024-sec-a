import { User } from "src/user/entities/user.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productname: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @ManyToOne(() => User, user => user.product)
    user: User;
  }
  