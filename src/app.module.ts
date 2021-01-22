import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ExternalTaskConnector, ExternalTaskModule } from 'nestjs-cambpm';

@Module({
  controllers: [AppController],
  providers: [
    ExternalTaskConnector,
    ExternalTaskModule.createClient({
      //baseUrl: 'http://localhost:8080/engine-rest',
      baseUrl: 'http://10.150.0.192:8080/engine-rest',
    }),
  ],
})
export class AppModule {}
