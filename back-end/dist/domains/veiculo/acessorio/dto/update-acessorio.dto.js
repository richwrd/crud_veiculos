"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAcessorioDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_acessorio_dto_1 = require("./create-acessorio.dto");
class UpdateAcessorioDto extends (0, mapped_types_1.PartialType)(create_acessorio_dto_1.CreateAcessorioDto) {
}
exports.UpdateAcessorioDto = UpdateAcessorioDto;
//# sourceMappingURL=update-acessorio.dto.js.map