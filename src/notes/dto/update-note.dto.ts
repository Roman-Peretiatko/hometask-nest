import {IsString, Max, Min} from "class-validator";

export class UpdateNoteDto {

    @IsString()
    readonly noteName: string

    @IsString()
    readonly category: string

    @IsString()
    readonly content: string
}