"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
const react_1 = __importDefault(require("react"));
// import './web.css'
function reuse(props) {
    return (react_1.default.createElement("div", { className: "ui fluid card" },
        react_1.default.createElement("div", null, props.header),
        react_1.default.createElement("div", { className: "ui bottom attached button" }, props.footer)));
}
exports.default = reuse;
