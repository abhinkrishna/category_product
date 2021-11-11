import { IsDefined, IsNotEmpty, IsNumber, IsNumberString, IsString } from "class-validator";


export class CreateProductDTO {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public title: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public description: string;

    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    public subcategory_data: number;

    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    public price: number;

}

export class UpdateProductDTO {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public title: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public description: string;

    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    public subcategory_data: number;

    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    public price: number;

}

export class ReadManyProductsDTO {
    
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public order_by: string;
    
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public order: string;
    
    @IsDefined()
    @IsNotEmpty()
    @IsNumberString()
    public page: number;
    
    @IsDefined()
    @IsNotEmpty()
    @IsNumberString()
    public size: number;

}