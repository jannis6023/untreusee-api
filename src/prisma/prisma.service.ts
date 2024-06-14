import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
    })
  }

  async onModuleInit() {
    this.$use(async (params, next) => {
      const result = await next(params);

      if (Array.isArray(result)) {
        return result.map(item => ({ ...item, modelName: params.model }));
      } else if (typeof result === 'object' && result !== null) {
        return { ...result, modelName: params.model };
      }

      return result;
    });

    await this.$connect();
  }
}