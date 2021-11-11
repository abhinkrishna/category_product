import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Category from "../category/category.entity";
import Product from "../product/product.entity";

@Entity('subcategory')
class SubCategory {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: 'varchar',
        unique: true,
    })
    public name: string;

    @Column({
        type: 'varchar',
        nullable: true,
    })
    public description: string;

    @Column({
        type: 'integer'
    })
    @ManyToOne(() => Category, category => category.id, { eager: false })
    public category_data: number;

    @Column({
        type: 'integer',
        nullable: true,
    })
    @OneToMany(() => Product, product => product.subcategory_data, { eager: false, nullable: true })
    public product: Product[];

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

export default SubCategory;