import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { Employee } from './employee.entity';


@Entity('admin')
export class Admin {
    @PrimaryGeneratedColumn({ name: 'id', type: "int" })
    id: number;

    @Column({ name: 'userName', type: 'varchar', length: 100, unique: true, nullable: false })
    userName: string;

    @OneToMany(() => Employee, employees => employees.admin)
    employees: Employee[];



}
