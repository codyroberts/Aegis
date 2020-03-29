'use strict';

interface Message {
    name: string;
    message: string;
}

export default class UserMessage implements Message {
    private data: { name: string, message: string }

    constructor(payload: any) {
        const data = JSON.parse(payload)

        if(!data.name || !data.message) {
            throw new Error('Invalid Message Payload Received: ' + payload)
        }

        this.data = data
    }

    get name(): string {
        return this.data.name
    }

    get message(): string {
        return this.data.message
    }
}