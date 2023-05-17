import { IRapport } from "./IRapport";

export class RapportSuperviseur implements IRapport{
      id:number;

     demande_de_sanction_id:number;

       user_matricule:string;

       avis:string;

       sanction_demande:string;

      date:string;

      _validated:boolean;

      processed_by_manager:boolean;

      escalated_to_rh:boolean;
    
}