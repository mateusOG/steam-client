"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SteamClient = void 0;
const steam_user_1 = __importDefault(require("steam-user"));
class SteamClient {
    client;
    constructor() {
        this.client = new steam_user_1.default();
    }
    async login(accountName, password) {
        return new Promise((resolve, reject) => {
            this.client.logOn({
                accountName,
                password
            });
            this.client.once("loggedOn", () => {
                resolve();
            });
            this.client.once("error", (err) => {
                reject(err);
            });
        });
    }
    getSteamID() {
        return this.client.steamID?.getSteamID64() ?? null;
    }
    logout() {
        this.client.logOff();
    }
}
exports.SteamClient = SteamClient;
