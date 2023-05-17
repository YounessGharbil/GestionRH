import { Role } from "src/app/enums/Role";

export class CreateUserRequest{
    matricule:string;
    email:string;
    password:string;
    role:Role;
}
