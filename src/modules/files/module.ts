import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { FileController } from './controller';
import { FileService } from './service';
@Module({
  imports: [HttpModule],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
