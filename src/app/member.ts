export class Member {
    id: number;
    name: string;
    surname:string;
    age:number;
    phone:number;
    email:string;
    gender:string;
    language:string;
    occupation:string;
    company:string;
    username:string;
    password:number;

    constructor(id, name, surname, age, phone,
      email, gender, language, occupation, company,
      username, password){
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.age=age;
        this.phone=phone;
        this.email=email;
        this.gender=gender;
        this.language=language;
        this.occupation=occupation;
        this.company=company;
        this.username=username;
        this.password=password;

      }
  }
 