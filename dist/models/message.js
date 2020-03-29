'use strict';
export default class UserMessage {
    constructor(payload) {
        const data = JSON.parse(payload);
        if (!data.name || !data.message) {
            throw new Error('Invalid Message Payload Received: ' + payload);
        }
        this.data = data;
    }
    get name() {
        return this.data.name;
    }
    get message() {
        return this.data.message;
    }
}
//# sourceMappingURL=message.js.map