import { IRapport } from "./IRapport";

export class RapportRh implements IRapport{
    id:number;

    demande_de_sanction_id:number;

    user_matricule:string;

    date_embauche:string;

    age:string;

    nbr_enfants:string;
    
    date:string;

    _validated:boolean;
    processed_by_rhplus1:boolean;

    
}