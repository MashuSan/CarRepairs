import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Service {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string; //TODO: Date

    @Column()
    kmStatus: number;

    @Column()
    description: string;

    @Column()
    materials: string;

    @Column()
    technicsName: string;

}
