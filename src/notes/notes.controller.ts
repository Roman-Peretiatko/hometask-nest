import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import {CreateNoteDto} from "./dto/create-note.dto";
import {UpdateNoteDto} from "./dto/update-note.dto";
import {NotesService} from "./notes.service";
import {Note} from "./schemas/note.schema";

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) {

    }

    @Get()
    getAll(): Promise<Note[]> {
        return this.notesService.getAll()
    }

    @Get('/stats')
    getStat() {
        return this.notesService.getStats()
    }

    @Get(':id')
    getOne(@Param('id') id: string): Promise<Note> {
        return this.notesService.getById(id)
    }



    @Post()
    create(@Body() createNoteDto: CreateNoteDto): Promise<Note> {
        return this.notesService.create(createNoteDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<Note> {
        return this.notesService.remove(id)
    }

    @Patch(':id')
    update(@Body() updateNoteDto: UpdateNoteDto, @Param('id') id: string): Promise<Note> {
        return this.notesService.update(id, updateNoteDto)
    }
}
