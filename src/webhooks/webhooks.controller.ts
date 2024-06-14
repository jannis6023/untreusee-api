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

    if(!req.headers.authorization){
      console.log("Unauthorized.")
      throw new UnauthorizedException();
    }

    const webhookSecretBrcyptHash = this.config.get('WEBHOOK_SECRET_HASH');

    if(!(await bcrypt.compare(req.headers.authorization, webhookSecretBrcyptHash))){
      console.log("Hash wrong.")
      return false;
    }

    console.log("Webhook called!", body.uplink_message.decoded_payload)

    await this.prisma.temperature.create({
      data: {
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
