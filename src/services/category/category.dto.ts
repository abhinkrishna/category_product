import { IsDefined, IsNotEmpty, IsNumberString, IsString } from "class-validator";


export class CreateCategoryDTO {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public name: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public description: string;

}

export class UpdateCategoryDTO {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public name: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public description: string;

}

export class ReadManyCategoryDTO {
    
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