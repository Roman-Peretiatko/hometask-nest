import {IsOptional, IsString} from "class-validator";

export class CreateNoteDto {
    @IsString()
    readonly noteName: string

    @IsString()
    @IsOptional()
    creationDate: string

    @IsString()
    readonly category: string

    @IsString()
    readonly content: string

    @IsString()
    @IsOptional()
    dates: string | RegExpMatchArray
}