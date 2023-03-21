import { Controller, Get } from '@nestjs/common';

@Controller('notification')
export class NotificationController {
  @Get('hello')
  getHello(): string {
    return 'Hello Worl';
  }
}
