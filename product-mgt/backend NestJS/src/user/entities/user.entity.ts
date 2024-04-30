import {
    Column,
    Entity,
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
  
  }
  