import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Service {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    kmStatus: string;

    @Column()
    description: string;

    @Column()
    materials: string;

    @Column()
    techniccName: string;

}
