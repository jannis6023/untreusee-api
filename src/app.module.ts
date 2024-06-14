import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PrismaModule} from "./prisma/prisma.module";
import { SensorsModule } from './sensors/sensors.module';
import { WebhooksModule } from './webhooks/webhooks.module';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    PrismaModule,
    SensorsModule,
    WebhooksModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env"
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
