import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandesDeSanctionService } from '../demandes-de-sanction.service';
import { CreateRapportRhPlus1Request } from '../requests/CreateRapportRhPlus1Request';

@Component({
  selector: 'app-rapport-rh-plus1',
  templateUrl: './rapport-rh-plus1.component.html',
  styleUrls: ['./rapport-rh-plus1.component.css']
})
export class RapportRhPlus1Component implements OnInit {

  constructor(private demandesDeSanctionService:DemandesDeSanctionService,
    private fb: FormBuilder,
    private router:Router,
    private route: ActivatedRoute,
    ){}
  ngOnInit(): void {
    this.getDemandeId();
  }
 

  createRapportRhPlus1Request:CreateRapportRhPlus1Request;
  demandeId:number;

  rapportRhPlus1FormGroup: FormGroup = this.fb.group({
    demandeId:['', Validators.required],
    commentaire:['', Validators.required],
    decisionFinal:['', Validators.required],
    valid:['', Validators.required], 
  });

  createRapportRhPlus1(  createRapportRhPlus1Request:CreateRapportRhPlus1Request){
    this.demandesDeSanctionService.createRapportRhPlus1(  createRapportRhPlus1Request)
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
    }
     
    );
  }

  onSubmit() {
    console.log(this.rapportRhPlus1FormGroup.value);
    this.createRapportRhPlus1Request={
      'demandeId':this.rapportRhPlus1FormGroup.value.demandeId,
      'commentaire':this.rapportRhPlus1FormGroup.value.commentaire,
      'decisionFinal':this.rapportRhPlus1FormGroup.value.decisionFinal,
      'valid':this.rapportRhPlus1FormGroup.value.valid,
      
  }
  this.createRapportRhPlus1(this.createRapportRhPlus1Request); 
  this.router.navigate(['demandes-de-sanction/getRhPlus1Rapports']);
  
  }
  getDemandeId(){
    this.route.queryParamMap.subscribe(params => {
      this.demandeId = +params.get('demande_id');
    });
  }

}
