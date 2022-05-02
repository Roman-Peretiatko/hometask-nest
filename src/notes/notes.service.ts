import { Injectable } from '@nestjs/common';
import {Note} from "./notes.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateNoteDto} from "./dto/create-note.dto";
import {UpdateNoteDto} from "./dto/update-note.dto";



@Injectable()
export class NotesService {

    constructor(@InjectModel(Note) private noteRepository: typeof Note) {
    }

    async getAll() {
        return this.noteRepository.findAll({
            attributes: ['id', 'noteName', 'creationDate', 'category', 'content', 'dates']
        })
    }

    async getById(id: number) {
        return this.noteRepository.findOne({
            where: {
                id,
            }
        })
    }

    async getStats() {
        let notes = await this.noteRepository.findAll()

        let notesCategories = notes.map(note => {
            return note.category
        })
        const categoriesList = Array.from(new Set(notesCategories))

        const stats = {}

        categoriesList.forEach(category => {
            const categoryAmount = notes.filter(note => {
                if (note.category === category) return note
            }).length
            stats[`${category}`] = categoryAmount
        })

        return stats

    }

    async create(noteDto) {
        noteDto.creationDate = new Date().toLocaleDateString().replace(/-/g, '/')

        if (noteDto.content.match(/(\d{1,2}\/\d{1,2}\/\d{4})/g) === null) {
            noteDto.dates = ''
        } else {
            noteDto.dates = noteDto.content.match(/(\d{1,2}\/\d{1,2}\/\d{4})/g).join(', ')
        }

        console.log(noteDto)

        return await this.noteRepository.create(noteDto)
    }

    async remove(id: number) {
        const note = await this.noteRepository.findOne({
            where: {
                id,
            }
        })

        await note.destroy()
    }

    async update(id: number, note: UpdateNoteDto) {
        const noteToUpdate = await this.noteRepository.findOne({
            where: {
                id,
            }
        })
        noteToUpdate.noteName = note.noteName
        noteToUpdate.category = note.category
        noteToUpdate.content = note.content

        await noteToUpdate.save()

        return noteToUpdate
    }
}
