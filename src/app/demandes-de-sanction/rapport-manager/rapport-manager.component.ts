import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandesDeSanctionService } from '../demandes-de-sanction.service';
import { CreateRapportManagerRequest } from '../requests/CreateRapportManagerRequest';

@Component({
  selector: 'app-rapport-manager',
  templateUrl: './rapport-manager.component.html',
  styleUrls: ['./rapport-manager.component.css']
})
export class RapportManagerComponent implements OnInit {

  constructor(
    private demandesDeSanctionService:DemandesDeSanctionService,
    private fb: FormBuilder,
    private router:Router,
    private route: ActivatedRoute,
    ){}
  ngOnInit(): void {
    this.getDemandeId();
  }
 

  createRapportManagerRequest:CreateRapportManagerRequest;
  demandeId:number;

  rapportManagerFormGroup: FormGroup = this.fb.group({
    demandeId:['', Validators.required],
    avisManager:['', Validators.required],
    sanctionDemandé:['', Validators.required],
    valid:['', Validators.required], 
  });


  createRapportManager(createRapportManagerRequest:CreateRapportManagerRequest){
    this.demandesDeSanctionService.createRapportManager(createRapportManagerRequest)
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
  console.log(this.rapportManagerFormGroup.value);
  this.createRapportManagerRequest={
    'demandeId':this.rapportManagerFormGroup.value.demandeId,
    'avisManager':this.rapportManagerFormGroup.value.avisManager,
    'sanctionDemandé':this.rapportManagerFormGroup.value.sanctionDemandé,
    'valid':this.rapportManagerFormGroup.value.valid,
    
}
this.createRapportManager(this.createRapportManagerRequest);   
this.router.navigate(['demandes-de-sanction/getManagerRapports']);
}

getDemandeId(){
  this.route.queryParamMap.subscribe(params => {
    this.demandeId = +params.get('demande_id');
  });
}

}
