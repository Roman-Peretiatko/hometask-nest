/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type NoteDocument = Note & Document;
export declare class Note {
    noteName: string;
    category: string;
    content: string;
}
export declare const NoteSchema: import("mongoose").Schema<Document<Note, any, any>, import("mongoose").Model<Document<Note, any, any>, any, any, any>, {}, {}>;
