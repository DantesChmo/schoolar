"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const React = __importStar(require("react"));
const react_router_1 = require("react-router");
const mobx_react_lite_1 = require("mobx-react-lite");
const useSSR_1 = require("./useSSR");
const About_1 = require("./About");
const Home_1 = require("./Home");
const App = () => {
    const inBrowser = useSSR_1.useSSR();
    mobx_react_lite_1.enableStaticRendering(!inBrowser);
    return (React.createElement(react_router_1.Switch, null,
        React.createElement(react_router_1.Route, { path: "/about", component: About_1.AboutPage }),
        React.createElement(react_router_1.Route, { path: "/", component: Home_1.HomePage })));
};
exports.App = App;
