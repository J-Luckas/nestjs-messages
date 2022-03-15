type message = {
  id: string;
  content: string;
};

import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

interface IMessagesRepository {
  findAll(): Promise<message[]>;
  findOne(id: string): Promise<message>;
  create(message: string): Promise<message>;
}

@Injectable()
export class MessagesRepository implements IMessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');

    const messages = JSON.parse(contents);

    return messages.find((m: message) => m.id == id);
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    return JSON.parse(contents);
  }

  async create(message: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const newId = messages[messages.length - 1]?.id + 1 || 1;
    const newMessage = { id: newId, content: message };
    messages.push(newMessage);

    await writeFile('messages.json', JSON.stringify(messages));
    return newMessage;
  }
}
