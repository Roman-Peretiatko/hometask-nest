import { CreateNoteDto } from "./dto/create-note.dto";
import { UpdateNoteDto } from "./dto/update-note.dto";
import { NotesService } from "./notes.service";
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    getAll(): Promise<import("./notes.model").Note[]>;
    getStats(): Promise<{}>;
    getOne(id: number): Promise<import("./notes.model").Note>;
    create(createNoteDto: CreateNoteDto): Promise<import("./notes.model").Note>;
    remove(id: number): Promise<void>;
    update(updateNoteDto: UpdateNoteDto, id: number): Promise<import("./notes.model").Note>;
}
