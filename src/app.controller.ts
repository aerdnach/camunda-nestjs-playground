import { Controller, Logger } from '@nestjs/common';
import { Ctx, Payload } from '@nestjs/microservices';

import {
  Task,
  TaskService,
  Variables,
  HandleFailureOptions,
} from 'camunda-external-task-client-js';

import { Subscription } from 'nestjs-cambpm';

@Controller()
export class AppController {
  @Subscription('task-a', {
    lockDuration: 500,
  })
  async taskA(@Payload() task: Task, @Ctx() taskService: TaskService) {
    const localVariables = new Variables();
    const processVariables = new Variables();
    processVariables.set('taska', 'ok');

    Logger.log('task A complete', this.constructor.name);
    await taskService.complete(task, processVariables, localVariables);
  }

  @Subscription('task-b', {
    lockDuration: 500,
  })
  async taskB(@Payload() task: Task, @Ctx() taskService: TaskService) {
    const localVariables = new Variables();
    const processVariables = new Variables();
    const randomValue = Math.random() > 0.5 ? 1 : 0;

    processVariables.set('taskb', 'ok');
    processVariables.set('randomValue', randomValue);

    Logger.log(
      `task B complete [randomValue: ${randomValue}]`,
      this.constructor.name,
    );
    await taskService.complete(task, processVariables, localVariables);
  }

  @Subscription('task-c', {
    lockDuration: 500,
  })
  async taskC(@Payload() task: Task, @Ctx() taskService: TaskService) {
    const localVariables = new Variables();
    const processVariables = new Variables();

    processVariables.set('taskc', 'ok');

    Logger.log('task C complete', this.constructor.name);

    await taskService.complete(task, processVariables, localVariables);
  }

  @Subscription('task-d', {
    lockDuration: 500,
  })
  async taskD(@Payload() task: Task, @Ctx() taskService: TaskService) {
    const localVariables = new Variables();
    const processVariables = new Variables();

    processVariables.set('taskd', 'ok');

    Logger.log('task D complete', this.constructor.name);
    try {
      await taskService.complete(task, processVariables, localVariables);
    } catch (e) {
      const errorMessage = e.getMessage();
      const options: HandleFailureOptions = {
        errorMessage: errorMessage,
      };
      await taskService.handleFailure(task, options);
    }
  }

  @Subscription('task-e', {
    lockDuration: 500,
  })
  async taskE(@Payload() task: Task, @Ctx() taskService: TaskService) {
    const localVariables = new Variables();
    const processVariables = new Variables();
    processVariables.set('taske', 'ok');

    Logger.log('task E complete', this.constructor.name);
    try {
      await taskService.complete(task, processVariables, localVariables);
    } catch (e) {
      const errorMessage = e.getMessage();
      const options: HandleFailureOptions = {
        errorMessage: errorMessage,
      };
      await taskService.handleFailure(task, options);
    }
  }

  @Subscription('task-f', {
    lockDuration: 500,
  })
  async taskF(@Payload() task: Task, @Ctx() taskService: TaskService) {
    const localVariables = new Variables();
    const processVariables = new Variables();
    processVariables.set('taskf', 'ok');

    Logger.log('task F complete', this.constructor.name);
    try {
      await taskService.complete(task, processVariables, localVariables);
    } catch (e) {
      const errorMessage = e.getMessage();
      const options: HandleFailureOptions = {
        errorMessage: errorMessage,
      };
      await taskService.handleFailure(task, options);
    }
  }

  @Subscription('task-g', {
    lockDuration: 500,
  })
  async taskG(@Payload() task: Task, @Ctx() taskService: TaskService) {
    const localVariables = new Variables();
    const processVariables = new Variables();
    processVariables.set('taskg', 'ok');

    Logger.log('task G complete', this.constructor.name);

    try {
      await taskService.complete(task, processVariables, localVariables);
    } catch (e) {
      const errorMessage = e.getMessage();
      const options: HandleFailureOptions = {
        errorMessage: errorMessage,
      };
      await taskService.handleFailure(task, options);
    }
  }

  @Subscription('task-h', {
    lockDuration: 500,
  })
  async taskH(@Payload() task: Task, @Ctx() taskService: TaskService) {
    const localVariables = new Variables();
    const processVariables = new Variables();
    processVariables.set('taskh', 'ok');

    Logger.log('task H complete', this.constructor.name);

    try {
      await taskService.complete(task, processVariables, localVariables);
    } catch (e) {
      const errorMessage = e.getMessage();
      const options: HandleFailureOptions = {
        errorMessage: errorMessage,
      };
      await taskService.handleFailure(task, options);
    }
  }

  @Subscription('task-i', {
    lockDuration: 500,
  })
  async taskI(@Payload() task: Task, @Ctx() taskService: TaskService) {
    const localVariables = new Variables();
    const processVariables = new Variables();
    processVariables.set('taski', 'ok');

    Logger.log('task I complete', this.constructor.name);

    try {
      await taskService.complete(task, processVariables, localVariables);
    } catch (e) {
      const errorMessage = e.getMessage();
      const options: HandleFailureOptions = {
        errorMessage: errorMessage,
      };
      await taskService.handleFailure(task, options);
    }
  }
}
