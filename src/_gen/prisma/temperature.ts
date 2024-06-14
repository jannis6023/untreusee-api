import { ApiProperty } from '@nestjs/swagger';

export class Temperature {
  @ApiProperty({ type: BigInt })
  timestamp: BigInt;

  @ApiProperty({ type: String })
  sensorId: string;

  @ApiProperty({ type: Number })
  value: number;
}
