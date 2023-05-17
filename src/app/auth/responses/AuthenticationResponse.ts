import { Role } from "../../enums/Role";
import { Site } from "../../enums/Site";

export class AuthenticationResponse{
      token:string;
      username:string;
      userRole:Role;
      matricule:string;
      department:string;
      site:Site;
}