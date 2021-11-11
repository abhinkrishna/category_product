import { IsDefined, IsNotEmpty, IsNumber, IsNumberString, IsString } from "class-validator";


export class CreateSubCategoryDTO {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public name: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public description: string;

    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    public category_data: number;

}

export class UpdateSubCategoryDTO {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public name: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public description: string;

    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    public category_data: number;

}

export class ReadManySubCategoryDTO {
    
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