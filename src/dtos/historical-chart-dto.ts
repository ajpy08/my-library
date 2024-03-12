import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class HistoricalChartDto {
  @Type(() => String)
  @IsNotEmpty()
  instrumentKey: string;
}
