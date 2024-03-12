import { Injectable } from '@nestjs/common';
import { ResultDto } from './dtos/result.dto';

@Injectable()
export class MyLibraryService {
  basic = (): string => {
    return 'Hello World!';
  };

  addition = (num1: number, num2: number): ResultDto => {
    const result = num1 + num2;
    console.log(`addition: ${result}`);

    return { result };
  };

  subtraction = (num1: number, num2: number): ResultDto => {
    const result = num1 - num2;
    console.log(`subtraction: ${result}`);

    return { result };
  };

  multiplication = (num1: number, num2: number): ResultDto => {
    const result = num1 * num2;
    console.log(`multiplication: ${result}`);

    return { result };
  };

  division = (num1: number, num2: number): ResultDto => {
    if (num2 === 0) {
      throw new Error('Cannot divide by zero');
    }
    const result = num1 / num2;
    console.log(`division: ${result}`);

    return { result };
  };
}
