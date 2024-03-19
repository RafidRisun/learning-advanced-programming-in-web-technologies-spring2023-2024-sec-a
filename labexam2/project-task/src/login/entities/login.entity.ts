import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('login')
export class Login {
    @PrimaryGeneratedColumn()
    logInId: number;


    @Column({unique: true, nullable: false})
    username: string;

    @Column({nullable: false})
    password: string;

}
