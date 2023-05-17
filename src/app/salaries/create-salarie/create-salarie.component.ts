import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusinessUnit } from 'src/app/enums/BusinessUnit';
import { CodeSite } from 'src/app/enums/CodeSite';
import { Direct } from 'src/app/enums/Direct';
import { Genre } from 'src/app/enums/Genre';
import { Segment } from 'src/app/enums/Segment';
import { Site } from 'src/app/enums/Site';
import { TypeContrat } from 'src/app/enums/TypeContrat';
import { CreateSalarieRequest } from '../requests/CreateSalarieRequest';
import { SalariesService } from '../salaries.service';

@Component({
  selector: 'app-create-salarie',
  templateUrl: './create-salarie.component.html',
  styleUrls: ['./create-salarie.component.css']
})
export class CreateSalarieComponent {
  constructor(private salariesService:SalariesService,private fb: FormBuilder,
    private router: Router){

  }




    buOptions = [
    { value:BusinessUnit.APPLICATION_TOOLING , label: 'APPLICATION_TOOLING' },
    { value:BusinessUnit.GLOBAL_AUTOMOTIVE , label: 'GLOBAL_AUTOMOTIVE' },
    { value:BusinessUnit.GLOBAL_FINANCE , label: 'GLOBAL_FINANCE' },
    { value:BusinessUnit.GLOBAL_OPERATIONS , label: 'GLOBAL_OPERATIONS' },
    { value:BusinessUnit.GLOBAL_TEIS , label: 'GLOBAL_TEIS' },
    { value:BusinessUnit.INDUSTRIAL , label: 'INDUSTRIAL' },
    { value:BusinessUnit.INDUSTRIAL_COMMERCIAL_TRANSPORTATION , label: 'INDUSTRIAL_COMMERCIAL_TRANSPORTATION' },
    { value:BusinessUnit.SENSORS_SOLUTIONS , label: 'SENSORS_SOLUTIONS' },
    { value:BusinessUnit.TE_ENERGY , label: 'TE_ENERGY' },
   
  ];


  segmentOptions=[
    { value:Segment.CORPORATE , label: 'CORPORATE' },
    { value:Segment.INDUSTRIAL_SOLUTIONS , label: 'INDUSTRIAL_SOLUTIONS' },
    { value:Segment.TRANSPORTATION_SOLUTIONS , label: 'TRANSPORTATION_SOLUTIONS' },
  ];
  
 
  siteOptions=[
    { value:Site.TFZ_AUTO , label: 'TFZ_AUTO' },
    { value:Site.TAC1_ICT , label: 'TAC1_ICT' },
    { value:Site.TAC2_INDUS , label: 'TAC2_INDUS' },
    { value:Site.TAC1_AUTO , label: 'TAC1_AUTO' },

  ];

  
  codeSiteOptions=[
    { value:CodeSite.L74 , label: 'L74' },
    { value:CodeSite.N61 , label: 'N61' },
    { value:CodeSite.TM1 , label: 'TM1' },
    { value:CodeSite.N96 , label: 'N96' },


  ];

  typeContratOptions=[
    { value:TypeContrat.ANAPEC , label: 'ANAPEC' },
    { value:TypeContrat.CDI , label: 'CDI' },
  ];

  genreOptions=[
    { value:Genre.MALE , label: 'MALE' },
    { value:Genre.FEMALE , label: 'FEMALE' },

  ];

  directOptions=[
    { value:Direct.DIRECT , label: 'DIRECT' },
    { value:Direct.INDIRECT , label: 'INDIRECT' },

  ];
  
  createSalarieRequest:CreateSalarieRequest;

  salarieFormGroup: FormGroup = this.fb.group({
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
    direct:['', Validators.required]     
    
  });


  createSalarie(createSalarieRequest:CreateSalarieRequest){
    
    this.salariesService.createSalarie(createSalarieRequest).subscribe({
       next:(response)=>{
      console.log(response);
      this.router.navigate(['/salaries']);
    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{
      console.log("task complete")
    }
    }
     
    );

  }

  onSubmit(){
    console.log(this.salarieFormGroup.value);
    this.createSalarieRequest={
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
      'direct':this.salarieFormGroup.value.direct,
    };
    this.createSalarie(this.createSalarieRequest);

  }
  


}
