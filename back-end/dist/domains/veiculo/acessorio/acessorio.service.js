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
exports.AcessorioService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const acessorio_entity_1 = require("./entities/acessorio.entity");
const mongoose_2 = require("mongoose");
let AcessorioService = class AcessorioService {
    constructor(acessorioModel) {
        this.acessorioModel = acessorioModel;
    }
    async create(createAcessorioDto) {
        return await this.acessorioModel.create(createAcessorioDto);
    }
    async findAll() {
        return await this.acessorioModel.find().exec();
    }
    async findOne(id) {
        return await this.acessorioModel.findOne({ _id: id });
    }
    async update(id, updateAcessorioDto) {
        return await this.acessorioModel.findOneAndUpdate({ _id: id }, updateAcessorioDto, { new: true });
    }
    async remove(id) {
        return await this.acessorioModel.findOneAndDelete({ _id: id });
    }
};
exports.AcessorioService = AcessorioService;
exports.AcessorioService = AcessorioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(acessorio_entity_1.Acessorio.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AcessorioService);
//# sourceMappingURL=acessorio.service.js.map