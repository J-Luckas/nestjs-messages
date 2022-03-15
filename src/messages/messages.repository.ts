type message = {
  id: string;
  content: string;
};

import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
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
    const newMessage = { id: newId, message };
    messages.push(newMessage);

    await writeFile('messages.json', JSON.stringify(messages));
    return newMessage;
  }
}
