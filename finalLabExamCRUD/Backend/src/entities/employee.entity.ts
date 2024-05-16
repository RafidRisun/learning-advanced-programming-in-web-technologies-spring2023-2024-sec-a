import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { Admin } from './admin.entity';
import { Job } from './job.entity';


@Entity('employee')
export class Employee {
    @PrimaryGeneratedColumn({ name: 'id', type: "int" })
    id: number;

    @Column({ name: 'employerName', type: 'varchar', length: 100, unique: true, nullable: false })
    employerName: string;

    @Column({ name: 'companyName', type: 'varchar', length: 100, unique: true, nullable: false })
    companyName: string;

    
    @Column({ name: 'contact', type: 'varchar', length: 100, unique: true, nullable: false })
    contact: string;

    @Column({ name: 'userName', type: 'varchar', length: 100, unique: true, nullable: false })
    userName: string;

    @Column({ name: 'password', nullable: false })
    password: string;
    
    @ManyToOne(() => Admin, admin => admin.employees)
    admin: Admin;

    @OneToMany(() => Job, jobs => jobs.employee)
    jobs: Job[];

}
