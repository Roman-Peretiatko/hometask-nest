import { Model } from "sequelize-typescript";
interface NoteCreationAttributes {
    noteName: string;
    category: string;
    content?: string;
}
export declare class Note extends Model<Note, NoteCreationAttributes> {
    id: number;
    noteName: string;
    creationDate: string;
    category: string;
    content: string;
    dates: string;
}
export {};
