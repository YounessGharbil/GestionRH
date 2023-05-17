import { IRapport } from "./IRapport";

export class RapportRhPlus1 implements IRapport{

      id:number;

     demande_de_sanction_id:number;

       user_matricule:string;

       commentaire:string;

       decision_final:string;

      date:string;
    
      _validated:boolean;
    
}