import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appEnvironnment } from 'src/modules/configuration/environments/app.environement';
import { databasesVariableEnvironments } from 'src/modules/configuration/environments/databases.environment';
import { microservicesVariableEnvironments } from './environments/microservices.environment';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      load: [
        databasesVariableEnvironments,
        appEnvironnment,
        microservicesVariableEnvironments,
      ],
    }),
  ],
})
export class ConfigurationModule {}
