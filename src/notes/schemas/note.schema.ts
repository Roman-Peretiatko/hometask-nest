import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from 'mongoose';

export type NoteDocument = Note & Document

@Schema()
export class Note {
    @Prop()
    noteName: string

    @Prop()
    category: string

    @Prop()
    content: string
}

export const NoteSchema = SchemaFactory.createForClass(Note)