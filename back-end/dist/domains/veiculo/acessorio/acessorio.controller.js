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
exports.AcessorioController = void 0;
const common_1 = require("@nestjs/common");
const acessorio_service_1 = require("./acessorio.service");
const create_acessorio_dto_1 = require("./dto/create-acessorio.dto");
const update_acessorio_dto_1 = require("./dto/update-acessorio.dto");
let AcessorioController = class AcessorioController {
    constructor(acessorioService) {
        this.acessorioService = acessorioService;
    }
    create(createAcessorioDto) {
        return this.acessorioService.create(createAcessorioDto);
    }
    findAll() {
        return this.acessorioService.findAll();
    }
    findOne(id) {
        return this.acessorioService.findOne(+id);
    }
    update(id, updateAcessorioDto) {
        return this.acessorioService.update(+id, updateAcessorioDto);
    }
    remove(id) {
        return this.acessorioService.remove(+id);
    }
};
exports.AcessorioController = AcessorioController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_acessorio_dto_1.CreateAcessorioDto]),
    __metadata("design:returntype", void 0)
], AcessorioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AcessorioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AcessorioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_acessorio_dto_1.UpdateAcessorioDto]),
    __metadata("design:returntype", void 0)
], AcessorioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AcessorioController.prototype, "remove", null);
exports.AcessorioController = AcessorioController = __decorate([
    (0, common_1.Controller)('acessorio'),
    __metadata("design:paramtypes", [acessorio_service_1.AcessorioService])
], AcessorioController);
//# sourceMappingURL=acessorio.controller.js.map