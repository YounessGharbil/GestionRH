import { IRapport } from "./IRapport";

export class RapportTeamLeader implements IRapport{

   
      id:number;

     demande_de_sanction_id:number;

       user_matricule:string;

       salarie_matricule:string;

       fonction:string;

      section:string;

      date_commis:string;

      la_faut:string;

      temoin:string;

      date:string;

      _validated:boolean;

      processed_by_superviseur:boolean;

      escalated_to_rh:boolean;

}