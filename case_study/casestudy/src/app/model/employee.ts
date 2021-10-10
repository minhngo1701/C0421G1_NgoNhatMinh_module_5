import {EducationDegree} from "./education-degree";
import {Division} from "./division";
import {Position} from "./position";

export interface Employee {
  id?:number;
  codeEmployee?: string;
  name?: string;
  dateOfBirth?: string;
  idCard?: number;
  salary?: number;
  phone?: number;
  email?: string;
  address?: string;
  position?: Position;
  educationDegree?: EducationDegree;
  division?: Division;
}
