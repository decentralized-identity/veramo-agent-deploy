import { IAgentContext, IMessageHandler } from '@veramo/core';
import { Message, AbstractMessageHandler } from '@veramo/message-handler';
export declare const MessageTypes: {
    chat: string;
};
export declare class DIDCommChatMessageHandler extends AbstractMessageHandler {
    handle(message: Message, context: IAgentContext<IMessageHandler>): Promise<Message>;
    private timestampToDate;
}
//# sourceMappingURL=message-handler.d.ts.map