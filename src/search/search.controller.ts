import { Controller } from '@nestjs/common';
import { SearchService } from './search.service';
import { CreateSearchDto } from './dto/create-search.dto';
import { UpdateSearchDto } from './dto/update-search.dto';
import { MessagePattern } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

@Controller('search')
export class SearchController {
  logger = new Logger('SearchController');
  constructor(private readonly searchService: SearchService) {}

  @MessagePattern({ cmd: 'search' })
  findAll(data) {
    this.logger.log(`Getting Search`);
    return this.searchService.findAll(data);
  }
}
