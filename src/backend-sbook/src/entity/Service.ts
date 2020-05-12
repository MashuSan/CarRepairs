import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Service {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    spz: string;

    @Column()
    date: string;

    @Column()
    kmStatus: string;

    @Column()
    description: string;

    @Column("json")
    materials: { material: string, price: number }[];

    @Column()
    technicsName: string;

}
