import { IsNumber, IsOptional, IsString } from "class-validator";


export class CreateMovieDto{

    @IsString()
    public readonly title:string;

    @IsNumber()
    public readonly year:number;

    @IsOptional()
    @IsString({each:true})
    public readonly genres:string[];
}