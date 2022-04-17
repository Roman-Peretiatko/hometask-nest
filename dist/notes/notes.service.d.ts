import { Model } from 'mongoose';
import { CreateNoteDto } from "./dto/create-note.dto";
import { Note, NoteDocument } from "./schemas/note.schema";
import { UpdateNoteDto } from "./dto/update-note.dto";
export declare class NotesService {
    private noteModel;
    constructor(noteModel: Model<NoteDocument>);
    getAll(): Promise<Note[]>;
    getById(id: string): Promise<Note>;
    getStats(): Promise<{}>;
    create(noteDto: CreateNoteDto): Promise<Note>;
    remove(id: string): Promise<Note>;
    update(id: string, noteDto: UpdateNoteDto): Promise<Note>;
}
