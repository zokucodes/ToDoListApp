"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//const res = require('express/lib/response');
const app = (0, express_1.default)(); //instantiate express app
dotenv_1.default.config();
const port = process.env.PORT; //define server port
//create default route
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(port); //start listening to requests on the defined port
