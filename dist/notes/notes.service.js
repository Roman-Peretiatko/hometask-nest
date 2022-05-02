"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const notes_model_1 = require("./notes.model");
const sequelize_1 = require("@nestjs/sequelize");
let NotesService = class NotesService {
    constructor(noteRepository) {
        this.noteRepository = noteRepository;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.noteRepository.findAll({
                attributes: ['id', 'noteName', 'creationDate', 'category', 'content', 'dates']
            });
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.noteRepository.findOne({
                where: {
                    id,
                }
            });
        });
    }
    getStats() {
        return __awaiter(this, void 0, void 0, function* () {
            let notes = yield this.noteRepository.findAll();
            let notesCategories = notes.map(note => {
                return note.category;
            });
            const categoriesList = Array.from(new Set(notesCategories));
            const stats = {};
            categoriesList.forEach(category => {
                const categoryAmount = notes.filter(note => {
                    if (note.category === category)
                        return note;
                }).length;
                stats[`${category}`] = categoryAmount;
            });
            return stats;
        });
    }
    create(noteDto) {
        return __awaiter(this, void 0, void 0, function* () {
            noteDto.creationDate = new Date().toLocaleDateString().replace(/-/g, '/');
            if (noteDto.content.match(/(\d{1,2}\/\d{1,2}\/\d{4})/g) === null) {
                noteDto.dates = '';
            }
            else {
                noteDto.dates = noteDto.content.match(/(\d{1,2}\/\d{1,2}\/\d{4})/g).join(', ');
            }
            console.log(noteDto);
            return yield this.noteRepository.create(noteDto);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const note = yield this.noteRepository.findOne({
                where: {
                    id,
                }
            });
            yield note.destroy();
        });
    }
    update(id, note) {
        return __awaiter(this, void 0, void 0, function* () {
            const noteToUpdate = yield this.noteRepository.findOne({
                where: {
                    id,
                }
            });
            noteToUpdate.noteName = note.noteName;
            noteToUpdate.category = note.category;
            noteToUpdate.content = note.content;
            yield noteToUpdate.save();
            return noteToUpdate;
        });
    }
};
NotesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(notes_model_1.Note)),
    __metadata("design:paramtypes", [Object])
], NotesService);
exports.NotesService = NotesService;
//# sourceMappingURL=notes.service.js.map