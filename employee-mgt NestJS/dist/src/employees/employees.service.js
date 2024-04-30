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
exports.EmployeesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const employee_entity_1 = require("./entities/employee.entity");
const typeorm_2 = require("typeorm");
let EmployeesService = class EmployeesService {
    constructor(empRepo) {
        this.empRepo = empRepo;
    }
    create(createEmployeeDto) {
        const employee = this.empRepo.create({ ...createEmployeeDto });
        return this.empRepo.save(employee);
    }
    findAll() {
        return this.empRepo.find({});
    }
    findOne(id) {
        return this.empRepo.findOne({ where: { id: id } });
    }
    async update(id, updateEmployeeDto) {
        const emp = await this.empRepo.findOne({ where: { id: id } });
        if (!emp) {
            return undefined;
        }
        const updatedEmployee = Object.assign(emp, updateEmployeeDto);
        return this.empRepo.save(updatedEmployee);
    }
    async remove(id) {
        const emp = await this.empRepo.findOne({ where: { id: id } });
        if (!emp) {
            return undefined;
        }
        await this.empRepo.remove(emp);
        return emp;
    }
};
exports.EmployeesService = EmployeesService;
exports.EmployeesService = EmployeesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employee_entity_1.Employee)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmployeesService);
//# sourceMappingURL=employees.service.js.map