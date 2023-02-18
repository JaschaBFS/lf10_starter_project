export class Employee {
  private static id?:number;
  private static lastName?:number;
  private static firstName?: string;
  private static street?: string;
  private static postcode?: string;
  private static city?: string;
  private static phone?: string;
  private static skillSet?: string [] = [];
  constructor(public id?: number,
              public lastName?: string,
              public firstName?: string,
              public street?: string,
              public postcode?: string,
              public city?: string,
              public phone?: string,
              public skillSet?: string[]) {
    this.id=id;
    this.city= city;
    this.phone=phone;
    this.firstName=firstName;
    this.postcode=postcode;
    this.lastName=lastName;
    this.street=street;
    this.skillSet=skillSet;

  }
}
