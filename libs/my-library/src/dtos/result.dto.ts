import { Type } from 'class-transformer';

const DEFAULT = 0;
export class ResultDto {
  @Type(() => Number)
  result: number = DEFAULT;
}
