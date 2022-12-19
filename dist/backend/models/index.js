"use strict";
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
exports.startSequelize = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const DB_PASS = process.env.DB_PASS;
const DB_USER = process.env.DB_USER;
const DB_NAME = process.env.DB_NAME;
const DB_HOSTNAME = process.env.DB_HOSTNAME;
exports.sequelize = new sequelize_1.Sequelize(DB_NAME, DB_USER, DB_PASS, {
    dialect: 'postgres',
    host: DB_HOSTNAME,
});
const startSequelize = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.sequelize.sync();
        console.info('DB and Express server is up and running!!!!');
    }
    catch (error) {
        console.log(error);
    }
});
exports.startSequelize = startSequelize;
