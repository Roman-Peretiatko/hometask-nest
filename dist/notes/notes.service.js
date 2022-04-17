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
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const note_schema_1 = require("./schemas/note.schema");
let NotesService = class NotesService {
    constructor(noteModel) {
        this.noteModel = noteModel;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.noteModel.find().exec();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.noteModel.findById(id);
        });
    }
    getStats() {
        return __awaiter(this, void 0, void 0, function* () {
            let notes = yield this.noteModel.find();
            notes = Array.from(notes);
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
            const newProduct = new this.noteModel(noteDto);
            return newProduct.save();
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.noteModel.findByIdAndRemove(id);
        });
    }
    update(id, noteDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.noteModel.findByIdAndUpdate(id, noteDto, { new: true });
        });
    }
};
NotesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(note_schema_1.Note.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], NotesService);
exports.NotesService = NotesService;
//# sourceMappingURL=notes.service.js.map