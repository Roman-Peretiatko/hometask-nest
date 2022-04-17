import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import {CreateNoteDto} from "./dto/create-note.dto";

import {Note, NoteDocument} from "./schemas/note.schema";
import {UpdateNoteDto} from "./dto/update-note.dto";

@Injectable()
export class NotesService {
    constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {}


    async getAll(): Promise<Note[]> {
        return this.noteModel.find().exec()
    }

    async getById(id: string): Promise<Note> {
        return this.noteModel.findById(id)
    }

    async getStats() {
        let notes = await this.noteModel.find()
        notes = Array.from(notes)

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

    async create(noteDto: CreateNoteDto): Promise<Note> {
        const newProduct = new this.noteModel(noteDto)
        return newProduct.save()
    }

    async remove(id: string): Promise<Note> {
        return this.noteModel.findByIdAndRemove(id)
    }

    async update(id: string, noteDto: UpdateNoteDto): Promise<Note> {
        return this.noteModel.findByIdAndUpdate(id, noteDto, {new: true})
    }
}
