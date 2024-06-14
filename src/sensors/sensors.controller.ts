import {Controller, Get, Param} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";

@Controller('sensors')
export class SensorsController {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  @Get()
  getSensors(){
    return this.prisma.sensor.findMany();
  }

  @Get(":id")
  getSensor(@Param("id") id: string){
    return this.prisma.sensor.findUnique({
      where: {
        id
      },
      include: {
        temperatures: {
          orderBy: {
            timestamp: 'desc'
          },
          take: 1
        }
      }
    })
  }
}
