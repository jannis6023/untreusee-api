import { ApiProperty } from '@nestjs/swagger';

export class Temperature {
  @ApiProperty({ type: Number })
  timestamp: number;

  @ApiProperty({ type: String })
  sensorId: string;

  @ApiProperty({ type: Number })
  value: number;
}
