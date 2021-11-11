import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import SubCategory from "../subcatogory/subcategory.entity";

@Entity('category')
class Category {
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
        type: 'integer',
        nullable: true,
    })
    @OneToMany(() => SubCategory, subCategory => subCategory.category_data, { eager: false, nullable: true })
    public subCategory: SubCategory[];

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

export default Category;