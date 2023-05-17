import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DemandesDeSanctionService } from '../demandes-de-sanction.service';
import { CreateRapportTeamLeaderRequest } from '../requests/CreateRapportTeamLeaderRequest';

@Component({
  selector: 'app-rapport-team-leader',
  templateUrl: './rapport-team-leader.component.html',
  styleUrls: ['./rapport-team-leader.component.css']
})
export class RapportTeamLeaderComponent{
  constructor(private demandesDeSanctionService:DemandesDeSanctionService,
    private fb: FormBuilder,
    private router:Router){


  }
  temoins:string[];
 

  createRapportTeamLeaderRequest:CreateRapportTeamLeaderRequest;


  rapportTeamLeaderFormGroup: FormGroup = this.fb.group({
    salariéMatricule:['', Validators.required],
    dateCommis:['', Validators.required],
    laFaute:['', Validators.required],
    temoin:['', Validators.required],
    valid:['', Validators.required], 
  });
  createRapportTeamLeader(createRapportTeamLeaderRequest:CreateRapportTeamLeaderRequest){
    this.demandesDeSanctionService.createRapportTeamLeader(createRapportTeamLeaderRequest)
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
    });    

  }

  onSubmit(){
    
    this.createRapportTeamLeaderRequest={
      'salariéMatricule':this.rapportTeamLeaderFormGroup.value.salariéMatricule,
      'laFaute':this.rapportTeamLeaderFormGroup.value.laFaute,
      'dateCommis':this.rapportTeamLeaderFormGroup.value.dateCommis,
      'temoin':this.rapportTeamLeaderFormGroup.value.temoin,
      'valid':this.rapportTeamLeaderFormGroup.value.valid,
      
  }
  this.createRapportTeamLeader(this.createRapportTeamLeaderRequest);   
  this.router.navigate(['demandes-de-sanction/getTeamLeaderRapports'])


}
}
