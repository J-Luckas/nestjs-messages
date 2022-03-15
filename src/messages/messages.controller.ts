import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';

interface ParamRequest {
  id: string;
}

@Controller('messages')
export class MessagesController {
  
  @Get()
  listMessages(): string {
    return 'Listing!';
  }

  @Post()
  createMessage( @Body() { content }: CreateMessageDTO ): string {
    return JSON.stringify({
      "message": content
    });
  }

  @Get(':id')
  getMessage(@Param('id') { id }:ParamRequest, @Query() { lastName }, @Body() { name }): string {
    return `Messages to ${id}: ${lastName}, ${name}`;
  }
}
