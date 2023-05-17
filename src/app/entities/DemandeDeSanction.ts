import { Site } from "../enums/Site";
import { RapportManager } from "./RapportManager";
import { RapportRh } from "./RapportRh";
import { RapportRhPlus1 } from "./RapportRhPlus1";
import { RapportSuperviseur } from "./RapportSuperviseur";
import { RapportTeamLeader } from "./RapportTeamLeader";

export class demandeDeSanction{
   
     id:number;
    
      salarie:number;

      user:number;
  
      teamLeaderValidation:boolean;
      superviseurValidation:boolean;
      managerValidation:boolean;
      rhValidation:boolean;
      rhPlus1Validation:boolean;
      demandeStatus:string;
      niveauDeTraitement:string;
      rapportRhplus1: number;
      rapportRh: number;
      rapportManager: number;
      rapportSuperviseur: number;
      rapportTeamLeader: number;
      departement:string;
      site:Site;
}