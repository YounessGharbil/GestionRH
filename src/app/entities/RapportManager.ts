import { IRapport } from "./IRapport";

export class RapportManager implements IRapport{
      id:number;

     demande_de_sanction_id:number;

       user_matricule:string;

       avis_manager:string;

       sanction_demande:string;

      date:string;

      _validated:boolean;
      
      _processed_by_rh:boolean;


    
}