import {CarType} from './car-type';
import {Station} from './station';

export interface Garage {
  id: number;
  codeNumber: number;
  carType: CarType;
  station: Station;
  locationStart: string;
  locationEnd: string;
  phone: string;
  email: string;
  timeStart: string;
  timeEnd: string;
}
