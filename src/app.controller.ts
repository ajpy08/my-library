import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { SumDTO } from './dtos/sum.dto';
// import { MyLibraryService } from '@angelpuc08/my-library';
import { HistoricalChartDto } from './dtos/historical-chart-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/sum')
  mySum(@Query() sumDTO: SumDTO) {
    const { number1, number2 } = sumDTO;
    return this.appService.getAddition(number1, number2);
  }

  @Get('/historical/chart')
  historicalChart(@Query() dto: HistoricalChartDto) {
    const { instrumentKey } = dto;
    return this.appService.historicalChart(instrumentKey);
  }
}
