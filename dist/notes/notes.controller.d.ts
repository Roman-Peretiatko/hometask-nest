import { CreateNoteDto } from "./dto/create-note.dto";
import { UpdateNoteDto } from "./dto/update-note.dto";
import { NotesService } from "./notes.service";
import { Note } from "./schemas/note.schema";
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    getAll(): Promise<Note[]>;
    getStat(): Promise<{}>;
    getOne(id: string): Promise<Note>;
    create(createNoteDto: CreateNoteDto): Promise<Note>;
    remove(id: string): Promise<Note>;
    update(updateNoteDto: UpdateNoteDto, id: string): Promise<Note>;
}
