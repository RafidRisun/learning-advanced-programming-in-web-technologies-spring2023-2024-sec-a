import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { Employee } from './employee.entity';

@Entity('job')
export class Job {
    @PrimaryGeneratedColumn({ name: 'id', type: "int" })
    id: number;

    @Column({ name: 'companyName', type: 'varchar', length: 100, unique: true, nullable: false })
    companyName: string;

    @Column({ name: 'jobTitle', type: 'varchar', length: 100, unique: true, nullable: false })
    jobTitle: string;

    @Column({ name: 'jobLocation', type: 'varchar', length: 100, unique: true, nullable: false })
    jobLocation: string;

    @Column()
    salary: number;
    
    @ManyToOne(() => Employee, employee => employee.jobs)
    employee: Employee;
}
