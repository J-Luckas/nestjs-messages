import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  
  @Get()
  listMessages(): string {
    return 'Listing!';
  }

  @Post()
  createMessage(): string {
    return 'Creating!';
  }

  @Get(':name')
  getMessage(@Param() {name}): string {
    return `Messages to ${name}`;
  }
}
