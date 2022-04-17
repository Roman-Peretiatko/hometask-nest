import {IsString} from "class-validator";

export class CreateNoteDto {
    @IsString()
    readonly noteName: string

    @IsString()
    readonly category: string

    @IsString()
    readonly content: string
}