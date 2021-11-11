import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import SubCategory from "../subcatogory/subcategory.entity";

@Entity('products')
class Product {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: 'varchar',
        unique: true,
    })
    public title: string;

    @Column({
        type: 'varchar',
    })
    public description: string;

    @Column({
        type: 'decimal'
    })
    public price: number;

    @Column({
        type: 'integer'
    })
    @ManyToOne(() => SubCategory, subcategory => subcategory.id, { eager: true })
    public subcategory_data: number;

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => `timezone('utc', now())`
    })
    public created_at: Date;

    @UpdateDateColumn({
        type: 'timestamptz',
        default: () => `timezone('utc', now())`
    }) 
    public updated_at: Date;
}

export default Product;