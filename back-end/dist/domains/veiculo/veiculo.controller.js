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
exports.VeiculoController = void 0;
const common_1 = require("@nestjs/common");
const veiculo_service_1 = require("./veiculo.service");
const create_veiculo_dto_1 = require("./dto/create-veiculo.dto");
const update_veiculo_dto_1 = require("./dto/update-veiculo.dto");
let VeiculoController = class VeiculoController {
    constructor(veiculoService) {
        this.veiculoService = veiculoService;
    }
    async create(createVeiculoDto) {
        return this.veiculoService.create(createVeiculoDto);
    }
    async findAll() {
        return this.veiculoService.findAll();
    }
    async findOne(modelo) {
        return this.veiculoService.findByModel(modelo);
    }
    async update(modelo, updateVeiculoDto) {
        return this.veiculoService.update(modelo, updateVeiculoDto);
    }
    async remove(modelo) {
        return this.veiculoService.remove(modelo);
    }
    async addAcessorio(modelo, acessorioId) {
        return this.veiculoService.addAcessorio(modelo, acessorioId);
    }
    async removeAcessorio(modelo, acessorioId) {
        return this.veiculoService.removeAcessorio(modelo, acessorioId);
    }
};
exports.VeiculoController = VeiculoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_veiculo_dto_1.CreateVeiculoDto]),
    __metadata("design:returntype", Promise)
], VeiculoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VeiculoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':modelo'),
    __param(0, (0, common_1.Param)('modelo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VeiculoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':modelo'),
    __param(0, (0, common_1.Param)('modelo')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_veiculo_dto_1.UpdateVeiculoDto]),
    __metadata("design:returntype", Promise)
], VeiculoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':modelo'),
    __param(0, (0, common_1.Param)('modelo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VeiculoController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':modelo/acessorio/:acessorioId'),
    __param(0, (0, common_1.Param)('modelo')),
    __param(1, (0, common_1.Param)('acessorioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], VeiculoController.prototype, "addAcessorio", null);
__decorate([
    (0, common_1.Post)(':modelo/acessorio-rm/:acessorioId'),
    __param(0, (0, common_1.Param)('modelo')),
    __param(1, (0, common_1.Param)('acessorioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], VeiculoController.prototype, "removeAcessorio", null);
exports.VeiculoController = VeiculoController = __decorate([
    (0, common_1.Controller)('veiculo'),
    __metadata("design:paramtypes", [veiculo_service_1.VeiculoService])
], VeiculoController);
//# sourceMappingURL=veiculo.controller.js.map