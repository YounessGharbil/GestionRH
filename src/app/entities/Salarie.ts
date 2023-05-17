import { BusinessUnit } from "../enums/BusinessUnit"
import { CodeSite } from "../enums/CodeSite"
import { Direct } from "../enums/Direct"
import { Genre } from "../enums/Genre"
import { Segment } from "../enums/Segment"
import { Site } from "../enums/Site"
import { TypeContrat } from "../enums/TypeContrat"

export class Salarie{
      id:number;

      matricule:string;

      nom:string;

      prenom:string;

      date_dembauche:string;

      segment:Segment;

      bu:BusinessUnit;

      site:Site;

      code_site:CodeSite;

      departement:string;

      local_job_title:string;

      position:string;

      supervisor:string;

      genre:Genre;

      type_de_contrat:TypeContrat;

      status:string;
      
      direct:Direct;
}