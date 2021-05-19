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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const React = __importStar(require("react"));
const server_1 = require("react-dom/server");
const react_router_1 = require("react-router");
const App_1 = require("./App");
const app = express_1.default();
app.use(express_1.default.static(path_1.default.resolve(__dirname, '../dist')));
app.get('/*', (req, res) => {
    const element = (React.createElement(react_router_1.StaticRouter, { location: req.url, context: {} },
        React.createElement(App_1.App, null)));
    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Webpack App</title>
      </head>
      <body>
        <div id="root">${server_1.renderToString(element)}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `;
    res.send(html);
});
app.listen(8080, () => {
    console.log('Server started');
});
