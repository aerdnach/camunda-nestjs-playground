import { Injectable, Logger } from '@nestjs/common';
import { Subscription } from 'nestjs-cambpm';
import { Ctx, Payload } from '@nestjs/microservices';

import { Task, TaskService, Variables } from 'camunda-external-task-client-js';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  @Subscription('task-g', {
    lockDuration: 500,
  })
  async taskG(@Payload() task: Task, @Ctx() taskService: TaskService) {
    const localVariables = new Variables();
    const processVariables = new Variables();
    processVariables.set('taskg', 'ok');

    Logger.log('task G complete');
    await taskService.complete(task, processVariables, localVariables);
  }
}
