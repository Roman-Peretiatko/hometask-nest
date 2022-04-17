import {IsString, Max, Min} from "class-validator";

export class UpdateNoteDto {

    @IsString()
    @Min(1)
    @Max(20)
    readonly noteName: string

    @IsString()
    @Min(1)
    readonly category: string

    @IsString()
    @Max(60)
    readonly content: string
}