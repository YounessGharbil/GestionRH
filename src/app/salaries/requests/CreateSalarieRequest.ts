import { Segment } from "src/app/enums/Segment";
import { BusinessUnit } from "../../enums/BusinessUnit";
import { CodeSite } from "../../enums/CodeSite";
import { Genre } from "../../enums/Genre";
import { Site } from "../../enums/Site";
import { TypeContrat } from "../../enums/TypeContrat";

export class CreateSalarieRequest{
     nom:string;
     prenom:string;
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
     direct:string;
}