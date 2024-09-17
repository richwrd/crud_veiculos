"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVeiculoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_veiculo_dto_1 = require("./create-veiculo.dto");
class UpdateVeiculoDto extends (0, mapped_types_1.PartialType)(create_veiculo_dto_1.CreateVeiculoDto) {
}
exports.UpdateVeiculoDto = UpdateVeiculoDto;
//# sourceMappingURL=update-veiculo.dto.js.map