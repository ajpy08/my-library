import { Injectable } from '@nestjs/common';
import { MyLibraryService } from '@angelpuc08/my-library';

@Injectable()
export class AppService {
  constructor(private readonly myLibraryService: MyLibraryService) {}
  getHello(): string {
    return 'Hello World!';
  }

  getAddition(num1: number, num2: number) {
    return this.myLibraryService.addition(num1, num2);
  }

  getSubtraction(num1: number, num2: number) {
    return this.myLibraryService.subtraction(num1, num2);
  }

  getMultiplication(num1: number, num2: number) {
    return this.myLibraryService.multiplication(num1, num2);
  }

  getDivision(num1: number, num2: number) {
    return this.myLibraryService.division(num1, num2);
  }
}
