import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  
  @Entity('admin')
  export class Admin {
    @PrimaryGeneratedColumn({ name: 'id'})
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
  
  }
  