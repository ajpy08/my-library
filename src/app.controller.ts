import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { MyLibraryService } from '../libs/my-library/src';
import { SumDTO } from './dtos/sum.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly myLibraryService: MyLibraryService,
  ) {}

  @Get()
  getHello(): string {
    this.myLibraryService.basic();
    return this.appService.getHello();
  }

  @Get('/sum')
  mySum(@Query() sumDTO: SumDTO) {
    const { number1, number2 } = sumDTO;
    return this.appService.getAddition(number1, number2);
  }
}
