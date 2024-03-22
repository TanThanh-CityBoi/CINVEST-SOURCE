import { Controller, Post } from '@nestjs/common';
import { TaskSchedulingService } from './task-scheduling.service';

@Controller('task-scheduling')
export class TaskSchedulingController {
  constructor(private readonly taskSchedulingService: TaskSchedulingService) {}

  @Post('advertising')
  calculateAdvertising() {
    return this.taskSchedulingService.calculateAdvertising();
  }
}
