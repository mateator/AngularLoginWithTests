export class Employee {
  id: number;
  //phone es type string por qué la api que empleo para mock data me devuelve nums americanos
  phone: string;
  job: string;
  fullname: string;
  email: string;
  image: string;

  constructor(data: any) {
    this.id = data.id;

    this.phone = data.phone;
    this.job = data.job;
    this.fullname = data.fullname;
    this.email = data.email;
    this.image = data.image;
  }
}
