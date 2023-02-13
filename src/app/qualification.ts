import {Employee} from "./Employee";
import {Observable} from "rxjs";

export class qualification{
  private static skill?:string;
  private static employees?: Employee[];
  constructor(public skill?: string, public employees?: Employee[]) {
    this.skill=skill;
    this.employees= employees;
  }

  public getEmployees() : Employee[] | undefined{
    return this.employees;
  }
}
