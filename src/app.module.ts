import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyLibraryModule, MyLibraryService } from '@app/my-library';
// import { MyLibraryModule, MyLibraryService } from '@angelpuc08/my-library';

@Module({
  imports: [MyLibraryModule],
  controllers: [AppController],
  providers: [AppService, MyLibraryService],
})
export class AppModule {}
