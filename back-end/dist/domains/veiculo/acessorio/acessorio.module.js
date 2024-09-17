"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcessorioModule = void 0;
const common_1 = require("@nestjs/common");
const acessorio_service_1 = require("./acessorio.service");
const acessorio_controller_1 = require("./acessorio.controller");
const mongoose_1 = require("@nestjs/mongoose");
const acessorio_entity_1 = require("./entities/acessorio.entity");
let AcessorioModule = class AcessorioModule {
};
exports.AcessorioModule = AcessorioModule;
exports.AcessorioModule = AcessorioModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: acessorio_entity_1.Acessorio.name, schema: acessorio_entity_1.AcessorioSchema }])],
        controllers: [acessorio_controller_1.AcessorioController],
        providers: [acessorio_service_1.AcessorioService],
    })
], AcessorioModule);
//# sourceMappingURL=acessorio.module.js.map