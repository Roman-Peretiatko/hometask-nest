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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesController = void 0;
var common_1 = require("@nestjs/common");
var create_note_dto_1 = require("./dto/create-note.dto");
var update_note_dto_1 = require("./dto/update-note.dto");
var notes_service_1 = require("./notes.service");
var NotesController = (function () {
    function NotesController(notesService) {
        this.notesService = notesService;
    }
    NotesController.prototype.getAll = function () {
        return this.notesService.getAll();
    };
    NotesController.prototype.getStat = function () {
        return this.notesService.getStats();
    };
    NotesController.prototype.getOne = function (id) {
        return this.notesService.getById(id);
    };
    NotesController.prototype.create = function (createNoteDto) {
        return this.notesService.create(createNoteDto);
    };
    NotesController.prototype.remove = function (id) {
        return this.notesService.remove(id);
    };
    NotesController.prototype.update = function (updateNoteDto, id) {
        return this.notesService.update(id, updateNoteDto);
    };
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], NotesController.prototype, "getAll", null);
    __decorate([
        (0, common_1.Get)('/stats'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NotesController.prototype, "getStat", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], NotesController.prototype, "getOne", null);
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_note_dto_1.CreateNoteDto]),
        __metadata("design:returntype", Promise)
    ], NotesController.prototype, "create", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], NotesController.prototype, "remove", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Body)()),
        __param(1, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [update_note_dto_1.UpdateNoteDto, String]),
        __metadata("design:returntype", Promise)
    ], NotesController.prototype, "update", null);
    NotesController = __decorate([
        (0, common_1.Controller)('notes'),
        __metadata("design:paramtypes", [notes_service_1.NotesService])
    ], NotesController);
    return NotesController;
}());
exports.NotesController = NotesController;
//# sourceMappingURL=notes.controller.js.map