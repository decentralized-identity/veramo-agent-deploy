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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DIDCommChatMessageHandler = exports.MessageTypes = void 0;
const message_handler_1 = require("@veramo/message-handler");
const blakejs_1 = require("blakejs");
const debug_1 = __importDefault(require("debug"));
const debug = debug_1.default('veramo:selective-disclosure:message-handler');
exports.MessageTypes = {
    chat: 'veramo.io-chat-v1',
};
class DIDCommChatMessageHandler extends message_handler_1.AbstractMessageHandler {
    handle(message, context) {
        const _super = Object.create(null, {
            handle: { get: () => super.handle }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.log(message);
            console.log(exports.MessageTypes.chat);
            if (message.type == exports.MessageTypes.chat) {
                debug('Message type is', exports.MessageTypes.chat);
                const raw = JSON.parse(message.raw);
                message.threadId = message.id;
                message.id = blakejs_1.blake2bHex(message.raw);
                message.from = raw.from;
                message.to = raw.to;
                message.createdAt = this.timestampToDate(raw.iat).toISOString();
                console.log(message);
                return message;
            }
            return _super.handle.call(this, message, context);
        });
    }
    timestampToDate(timestamp) {
        const date = new Date(0);
        date.setUTCSeconds(timestamp);
        return date;
    }
}
exports.DIDCommChatMessageHandler = DIDCommChatMessageHandler;
//# sourceMappingURL=message-handler.js.map