import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Registration')
export class Registration {
    @PrimaryGeneratedColumn()
    regId: number;

    @Column({unique: true, nullable: false})
    fullname: string;

    @Column({unique: true, nullable: false})
    username: string;

    @Column({nullable: false})
    password: string;

    @Column({nullable: false})
    confirmpassword: string;
    

    @Column({unique: true, nullable: false})
    email: string;

    @Column({ nullable: false})
    address: string;

    @Column({ nullable: false})
    phone: string;

    @Column({ nullable: false})
    city: string;

    @Column({ nullable: false})
    country: string;

    
}

