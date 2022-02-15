import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

@Controller()
export class AppController {
  private logger = new Logger('AppController');
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'search' })
  getHello(): string {
    this.logger.log(`Getting Hello`);
    return this.appService.getHello();
  }
}
