import { SensorRelations as _SensorRelations } from './sensor_relations';
import { TemperatureRelations as _TemperatureRelations } from './temperature_relations';
import { Sensor as _Sensor } from './sensor';
import { Temperature as _Temperature } from './temperature';

export namespace PrismaModel {
  export class SensorRelations extends _SensorRelations {}
  export class TemperatureRelations extends _TemperatureRelations {}
  export class Sensor extends _Sensor {}
  export class Temperature extends _Temperature {}

  export const extraModels = [
    SensorRelations,
    TemperatureRelations,
    Sensor,
    Temperature,
  ];
}
