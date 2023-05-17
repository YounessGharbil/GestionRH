import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Salarie } from 'src/app/entities/Salarie';
import { UpdateSalarieResquest } from '../requests/UpdateSalarieRequest';
import { SalariesService } from '../salaries.service';

@Component({
  selector: 'app-update-salarie',
  templateUrl: './update-salarie.component.html',
  styleUrls: ['./update-salarie.component.css']
})
export class UpdateSalarieComponent implements OnInit  {
  constructor(private salariesService:SalariesService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router ){
      
    }
    salarie:Salarie=new Salarie();

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.salariesService.getSalarie(id).subscribe(response =>{
        
        this.salarie=response;
      });
 
    });
  }
  
  buOptions = [
    { value:"APPLICATION_TOOLING" , label: 'APPLICATION_TOOLING' },
    { value:"GLOBAL_AUTOMOTIVE" , label: 'GLOBAL_AUTOMOTIVE' },
    { value:"GLOBAL_FINANCE" , label: 'GLOBAL_FINANCE' },
    { value:"GLOBAL_OPERATIONS" , label: 'GLOBAL_OPERATIONS' },
    { value:"GLOBAL_TEIS" , label: 'GLOBAL_TEIS' },
    { value:"INDUSTRIAL" , label: 'INDUSTRIAL' },
    { value:"INDUSTRIAL_COMMERCIAL_TRANSPORTATION" , label: 'INDUSTRIAL_COMMERCIAL_TRANSPORTATION' },
    { value:"SENSORS_SOLUTIONS" , label: 'SENSORS_SOLUTIONS' },
    { value:"TE_ENERGY" , label: 'TE_ENERGY' },
   
  ];


  segmentOptions=[
    { value:"CORPORATE" , label: 'CORPORATE' },
    { value:"INDUSTRIAL_SOLUTIONS" , label: 'INDUSTRIAL_SOLUTIONS' },
    { value:"TRANSPORTATION_SOLUTIONS" , label: 'TRANSPORTATION_SOLUTIONS' },
  ];
  
 
  siteOptions=[
    { value:"TFZ_AUTO" , label: 'TFZ_AUTO' },
    { value:"TAC1_ICT" , label: 'TAC1_ICT' },
    { value:"TAC2_INDUS" , label: 'TAC2_INDUS' },
    { value:"TAC1_AUTO" , label: 'TAC1_AUTO' },

  ];

  
  codeSiteOptions=[
    { value:"L74" , label: 'L74' },
    { value:"N61" , label: 'N61' },
    { value:"TM1" , label: 'TM1' },
    { value:"N96" , label: 'N96' },


  ];

  salarieStatusOptions=[
    { value:"VIDE" , label: 'VIDE' },
    { value:"AVERTISSEMENT" , label: 'AVERTISSEMENT' },
    { value:"BLAME1" , label: 'BLAME1' },
    { value:"BLAME2" , label: 'BLAME2' },
    { value:"MISE_A_PIED" , label: 'MISE_A_PIED' },
    { value:"LICENCIE" , label: 'LICENCIE' },
    { value:"INACTIF" , label: 'INACTIF' },
    

  ];

  typeContratOptions=[
    { value:"ANAPEC" , label: 'ANAPEC' },
    { value:"CDI" , label: 'CDI' },
  ];

  genreOptions=[
    { value:"MALE" , label: 'MALE' },
    { value:"FEMALE" , label: 'FEMALE' },

  ];

  directOptions=[
    { value:"DIRECT" , label: 'DIRECT' },
    { value:"INDIRECT" , label: 'INDIRECT'},
  ];
  
  updatedSalarie:UpdateSalarieResquest;

  salarieFormGroup: FormGroup = this.fb.group({
    id:[''],
    nom:['', Validators.required],
    prenom:['', Validators.required],
    segment:['', Validators.required],
    bu:['', Validators.required],
    site:['', Validators.required],
    code_site:['', Validators.required],
    departement:['', Validators.required],
    local_job_title:['', Validators.required],
    position:['', Validators.required],
    supervisor:['', Validators.required],
    genre:['', Validators.required],
    type_de_contrat:['', Validators.required],
    status:['', Validators.required],
    direct:['', Validators.required],
    
    
  });


  updateSalarie(updatedSalarie:UpdateSalarieResquest){
         this.salariesService.updateSalarie(updatedSalarie)
         .subscribe({
           next:(response=>{
          this.router.navigate(['/salaries']);
          
        }),
        error:(err)=>{
          console.log(err)
        },
        complete:()=>{
          console.log("task complete")
        }
         });

  }
  onSubmit(){
   
this.updatedSalarie={
      'id':this.salarie.id,
      'nom':this.salarieFormGroup.value.nom,
      'prenom':this.salarieFormGroup.value.prenom,
      'segment':this.salarieFormGroup.value.segment,
      'bu':this.salarieFormGroup.value.bu,
      'site':this.salarieFormGroup.value.site,
      'code_site':this.salarieFormGroup.value.code_site,
      'departement':this.salarieFormGroup.value.departement,
      'local_job_title':this.salarieFormGroup.value.local_job_title,
      'position':this.salarieFormGroup.value.position,
      'supervisor':this.salarieFormGroup.value.supervisor,
      'genre':this.salarieFormGroup.value.genre,
      'type_de_contrat':this.salarieFormGroup.value.type_de_contrat,
      'status':this.salarieFormGroup.value.status,
      'direct':this.salarieFormGroup.value.direct
  }
  this.updateSalarie(this.updatedSalarie);
}

}
