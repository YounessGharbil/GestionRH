import { Role } from "src/app/enums/Role";
import { Site } from "src/app/enums/Site";

export interface    UpdateUserRequest{
    id:number,
    email:string,
    password:string,
    role:Role,
}
