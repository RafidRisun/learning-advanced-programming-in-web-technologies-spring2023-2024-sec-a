import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('employees')
export class Employee {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'fullname', type: 'varchar', length: 100, nullable: false })
    fullname: string;

    @Column({ name: 'companyname', type: 'varchar', length: 100, nullable: false })
    companyname: string;

    @Column({ name: 'contacts', type: 'varchar', length: 14, nullable: false })
    contacts: string;

    @Column({ name: 'username', type: 'varchar', length: 100, nullable: false })
    username: string;

    @Column({ name: 'password', type: 'varchar', length: 30, nullable: false })
    password: string;
}
