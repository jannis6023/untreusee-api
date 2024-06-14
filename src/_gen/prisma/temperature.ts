import { ApiProperty } from '@nestjs/swagger';

export class Temperature {
  @ApiProperty({ type: Date })
  timestamp: Date;

  @ApiProperty({ type: String })
  sensorId: string;

  @ApiProperty({ type: Number })
  value: number;
}
