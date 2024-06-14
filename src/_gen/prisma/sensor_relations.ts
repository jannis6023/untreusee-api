import { Temperature } from './temperature';
import { ApiProperty } from '@nestjs/swagger';

export class SensorRelations {
  @ApiProperty({ isArray: true, type: () => Temperature })
  temperatures: Temperature[];
}
