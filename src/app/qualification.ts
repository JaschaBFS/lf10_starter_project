import {Employee} from "./Employee";
import {Observable} from "rxjs";

export class qualification{
  private static skill?:string;
  private static readonly employees?: Observable<Employee[]>;
  constructor(public skill?: string, public employees?: Observable<Employee[]>) {
    this.skill=skill;
    this.employees= employees;
  }
}
