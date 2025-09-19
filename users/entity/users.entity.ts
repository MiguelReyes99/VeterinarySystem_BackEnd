import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class USERS {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ type: String, nullable: false, length: 100 })
    firstName!: string;

    @Column({ type: String, nullable: false, length: 100 })
    lastName!: string;

    @Column({ type: String, nullable: false, length: 100 })
    position!: string;

    @Column({ type: String, nullable: false, length: 100 })
    username!: string;

    @Column({ type: String, nullable: false, length: 100 })
    password!: string;

    @Column({ type: Number, nullable: false })
    status!: number
}