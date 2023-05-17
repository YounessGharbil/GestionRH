import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RapportRhPlus1 } from 'src/app/entities/RapportRhPlus1';
import { DemandesDeSanctionService } from '../demandes-de-sanction.service';

@Component({
  selector: 'app-get-one-rapport-rh-plus1',
  templateUrl: './get-one-rapport-rh-plus1.component.html',
  styleUrls: ['./get-one-rapport-rh-plus1.component.css']
})
export class GetOneRapportRhPlus1Component implements OnInit {
  constructor(private demandesDeSanctionService:DemandesDeSanctionService,
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    if(history.state.rapport){
      this.setRapport(history.state.rapport);
    }
    else{
      this.getRapport();
    }
    
  }
  rapport:RapportRhPlus1;
  getRapport(){
    this.route.queryParamMap.subscribe(params => {
      const id = +params.get('id');
      this.demandesDeSanctionService.getRapportRhPlus1(id).subscribe({
         next:(response)=>{
        this.rapport=response
        
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        console.log("task complete")
      }
      }
       
      );
    });
  }
  setRapport(rapport:RapportRhPlus1){
    this.rapport=rapport;
   
  }

  updateSalarie(){
    // this.router.navigate(['/salaries/update/'+this.salarie.id]);
  }
  deleteSalarie(){
    // console.log("inside delete"+"  "+this.salarie.id);
    // this.router.navigate(['/salaries/delete/'+this.salarie.id]);
  }


}
