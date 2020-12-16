import { Controller, Logger } from '@nestjs/common';
import { Ctx, Payload } from '@nestjs/microservices';

import { Task, TaskService, Variables } from 'camunda-external-task-client-js';

import { Subscription } from 'nestjs-cambpm';

@Controller()
export class AppController {
  @Subscription('task-a', {
    lockDuration: 500,
  })
  async parallelTestA(@Payload() task: Task, @Ctx() taskService: TaskService) {
    const localVariables = new Variables();
    const processVariables = new Variables();
    processVariables.set('status', 'ok');

    Logger.log('task A complete');
    await taskService.complete(task, processVariables, localVariables);
  }

  @Subscription('task-b', {
    lockDuration: 500,
  })
  async parallelTestB(@Payload() task: Task, @Ctx() taskService: TaskService) {
    const localVariables = new Variables();
    const processVariables = new Variables();

    processVariables.set('status', 'ok');

    Logger.log('task B complete');
    await taskService.complete(task, processVariables, localVariables);
  }

  @Subscription('task-c', {
    lockDuration: 500,
  })
  async parallelTestC(@Payload() task: Task, @Ctx() taskService: TaskService) {
    const localVariables = new Variables();
    const processVariables = new Variables();

    processVariables.set('status', 'ok');
    Logger.log('task C complete');
    await taskService.complete(task, processVariables, localVariables);
  }

  @Subscription('task-d', {
    lockDuration: 500,
  })
  async parallelTestD(@Payload() task: Task, @Ctx() taskService: TaskService) {
    const localVariables = new Variables();
    const processVariables = new Variables();

    processVariables.set('status', 'ok');

    Logger.log('task D complete');
    await taskService.complete(task, processVariables, localVariables);
  }

  @Subscription('task-e', {
    lockDuration: 500,
  })
  async parallelEndTask(
    @Payload() task: Task,
    @Ctx() taskService: TaskService,
  ) {
    const localVariables = new Variables();
    const processVariables = new Variables();
    processVariables.set('status', 'ok');

    Logger.log('task E complete');
    await taskService.complete(task, processVariables, localVariables);
  }

  @Subscription('task-f', {
    lockDuration: 500,
  })
  async parallelEndTaskC(
    @Payload() task: Task,
    @Ctx() taskService: TaskService,
  ) {
    const localVariables = new Variables();
    const processVariables = new Variables();
    processVariables.set('status', 'ok');

    Logger.log('task F complete');
    await taskService.complete(task, processVariables, localVariables);
  }

  @Subscription('task-g', {
    lockDuration: 500,
  })
  async parallelEndTaskD(
    @Payload() task: Task,
    @Ctx() taskService: TaskService,
  ) {
    const localVariables = new Variables();
    const processVariables = new Variables();
    processVariables.set('status', 'ok');

    Logger.log('task G complete');
    await taskService.complete(task, processVariables, localVariables);
  }
}
