import { Note } from "./notes.model";
import { UpdateNoteDto } from "./dto/update-note.dto";
export declare class NotesService {
    private noteRepository;
    constructor(noteRepository: typeof Note);
    getAll(): Promise<Note[]>;
    getById(id: number): Promise<Note>;
    getStats(): Promise<{}>;
    create(noteDto: any): Promise<Note>;
    remove(id: number): Promise<void>;
    update(id: number, note: UpdateNoteDto): Promise<Note>;
}
