import {Movie} from "./movie";

export interface Cinema {
  id: number;
  code: string;
  movie: Movie;
  dateStart: string;
  amount: number;
}
