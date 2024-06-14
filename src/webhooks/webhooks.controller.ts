import {Body, Controller, Post, Req, UnauthorizedException} from '@nestjs/common';
import {WeatherData} from "./dto/ttn";
import {PrismaService} from "../prisma/prisma.service";
import {Request} from "express";
import {ConfigService} from "@nestjs/config";
import * as bcrypt from "bcrypt";

@Controller('webhooks')
export class WebhooksController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService
  ) {
  }

  @Post('ttn')
  async onTemperatureReceived(@Body() body: WeatherData, @Req() req: Request){
    console.log("Webhook called!")

    if(!req.headers.authorization){
      throw new UnauthorizedException();
    }

    const webhookSecretBrcyptHash = this.config.get('WEBHOOK_SECRET_HASH');

    if(!(await bcrypt.compare(webhookSecretBrcyptHash, req.headers.authorization))){
      return false;
    }

    await this.prisma.temperature.create({
      data: {
        timestamp: new Date().getTime(),
        sensor: {
          connect: {
            id: 'red'
          }
        },
        value: body.uplink_message.decoded_payload.Temp_Red
      }
    })

    await this.prisma.temperature.create({
      data: {
        timestamp: new Date().getTime(),
        sensor: {
          connect: {
            id: 'black'
          }
        },
        value: body.uplink_message.decoded_payload.Temp_Black
      }
    })

    await this.prisma.temperature.create({
      data: {
        timestamp: new Date().getTime(),
        sensor: {
          connect: {
            id: 'white'
          }
        },
        value: body.uplink_message.decoded_payload.Temp_White
      }
    })

    return true;
  }
}
