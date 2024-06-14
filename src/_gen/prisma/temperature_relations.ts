import { Sensor } from './sensor';
import { ApiProperty } from '@nestjs/swagger';

export class TemperatureRelations {
  @ApiProperty({ type: () => Sensor })
  sensor: Sensor;
}
