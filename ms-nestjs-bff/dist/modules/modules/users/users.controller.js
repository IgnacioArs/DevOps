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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async findAll(token) {
        return this.usersService.findAll(token);
    }
    async findOne(id, token) {
        return this.usersService.findOne(id, token);
    }
    async update(id, createUserDto, token) {
        const usuarioUpdate = await this.usersService.update(id, createUserDto, token);
        return;
    }
    async remove(id, token) {
        return this.usersService.remove(id, token);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/obtener-usuarios/:token'),
    (0, swagger_1.ApiOperation)({ summary: 'Devuelve todos los usuarios' }),
    (0, swagger_1.ApiParam)({
        name: 'token',
        description: 'Código único token.',
    }),
    __param(0, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/:id/:token'),
    (0, swagger_1.ApiOperation)({ summary: 'Devuelve un usuario por ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Código único id.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'token',
        description: 'Código único token.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/:id/:token'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualiza un usuario por ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Código único id.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'token',
        description: 'Código único token.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_user_dto_1.CreateUserDto, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/:id/:token'),
    (0, swagger_1.ApiOperation)({ summary: 'Elimina un usuario por ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Código único id.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'token',
        description: 'Código único token.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "remove", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map