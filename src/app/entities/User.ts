import { Role } from "../enums/Role";
import { Site } from "../enums/Site";

export class User{
    id:number;

    matricule:string;

    email:string;

    password:string;

    site:Site;
    
    department:string;

    role:Role;
}