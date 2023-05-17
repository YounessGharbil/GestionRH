import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandesDeSanctionService } from '../demandes-de-sanction.service';
import { CreateRapportSuperviseurRequest } from '../requests/CreateRapportSuperviseurRequest';

@Component({
  selector: 'app-rapport-superviseur',
  templateUrl: './rapport-superviseur.component.html',
  styleUrls: ['./rapport-superviseur.component.css']
})
export class RapportSuperviseurComponent implements OnInit {

  constructor(private demandesDeSanctionService:DemandesDeSanctionService,
    private fb: FormBuilder,
    private router :Router,
    private route: ActivatedRoute,
    ){}
  ngOnInit(): void {
    this.getDemandeId();
  }
 
  demandeId:number;
  createRapportSperviseurRequest:CreateRapportSuperviseurRequest;


  rapportSperviseurFormGroup: FormGroup = this.fb.group({
    demandeId:['', Validators.required],
    avis:['', Validators.required],
    sanctionDemandé:['', Validators.required],
    valid:['', Validators.required], 
  });
  
  createRapportSuperviseur(createRapportSperviseurRequest:CreateRapportSuperviseurRequest){
    this.demandesDeSanctionService.createRapportSuperviseur(createRapportSperviseurRequest)
    .subscribe({
       next:(response)=>{
        console.log(response)
    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{
      console.log("task complete")
    }
    });

  }

  onSubmit() {
    console.log(this.rapportSperviseurFormGroup.value);
    this.createRapportSperviseurRequest={
      'demandeId':this.rapportSperviseurFormGroup.value.demandeId,
      'avis':this.rapportSperviseurFormGroup.value.avis,
      'sanctionDemandé':this.rapportSperviseurFormGroup.value.sanctionDemandé,
      'valid':this.rapportSperviseurFormGroup.value.valid,
      
  }
  this.createRapportSuperviseur(this.createRapportSperviseurRequest);   
  this.router.navigate(['demandes-de-sanction/getSuperviseurRapports']);

  }
  getDemandeId(){
    this.route.queryParamMap.subscribe(params => {
      this.demandeId = +params.get('demande_id');
    });
  }

}
