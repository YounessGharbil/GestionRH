import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandesDeSanctionService } from '../demandes-de-sanction.service';
import { CreateRapportRhRequest } from '../requests/CreateRapportRhRequest';

@Component({
  selector: 'app-rapport-rh',
  templateUrl: './rapport-rh.component.html',
  styleUrls: ['./rapport-rh.component.css']
})
export class RapportRhComponent implements OnInit {

  constructor(private demandesDeSanctionService:DemandesDeSanctionService,
    private fb: FormBuilder,
    private router:Router,
    private route: ActivatedRoute,
    ){}
  ngOnInit(): void {
    this.getDemandeId();
  }
 

  createRapportRhRequest:CreateRapportRhRequest;
  demandeId:number;

  rapporRhFormGroup: FormGroup = this.fb.group({
    demandeId:['', Validators.required],
    age:['', Validators.required],
    nbrEnfants:['', Validators.required],
    valid:['', Validators.required], 
  });

  createRapportRh(createRapporRhRequest:CreateRapportRhRequest ){
    this.demandesDeSanctionService.createRapportRh(createRapporRhRequest)
    .subscribe({
       next:(response)=>{
      console.log(response);
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

  onSubmit() {
    console.log(this.rapporRhFormGroup.value);
    this.createRapportRhRequest={
      'demandeId':this.rapporRhFormGroup.value.demandeId,
      'age':this.rapporRhFormGroup.value.age,
      'nbrEnfants':this.rapporRhFormGroup.value.nbrEnfants,
      'valid':this.rapporRhFormGroup.value.valid,
      
  }
  this.createRapportRh(this.createRapportRhRequest);  
  this.router.navigate(['demandes-de-sanction/getRhRapports']);
 
  }
  getDemandeId(){
    this.route.queryParamMap.subscribe(params => {
      this.demandeId = +params.get('demande_id');
      console.log(this.demandeId)
    });
  }

}
