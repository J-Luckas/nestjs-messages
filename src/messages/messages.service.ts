import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepository: MessagesRepository;

  constructor() {
    this.messagesRepository = new MessagesRepository();
  }

  async findOne(id: string) {
    return await this.messagesRepository.findOne(id);
  }

  async findAll() {
    return await this.messagesRepository.findAll();
  }

  async create(message: string) {
    return await this.messagesRepository.create(message);
  }
}
