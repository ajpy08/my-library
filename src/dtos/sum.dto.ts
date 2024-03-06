import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class SumDTO {
  @Type(() => Number)
  @IsNotEmpty()
  number1: number;

  @Type(() => Number)
  @IsNotEmpty()
  number2: number;
}
