import { Component, OnInit } from '@angular/core';
import { SalariesService } from '../salaries.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Salarie } from 'src/app/entities/Salarie';

@Component({
  selector: 'app-get-salarie',
  templateUrl: './get-salarie.component.html',
  styleUrls: ['./get-salarie.component.css']
})
export class GetSalarieComponent implements OnInit {
  constructor(private salariesService:SalariesService,
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    if(history.state.salarie){
      this.setSalarie(history.state.salarie);
    }
    else{
      this.getSalarie();
    }
    
  }
  salarie:Salarie;
  getSalarie(){
    this.route.queryParamMap.subscribe(params => {
      const id = +params.get('id');
      this.salariesService.getSalarie(id).subscribe({
          next:(response)=>{
        this.salarie=response
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
  setSalarie(salarie:Salarie){
    this.salarie=salarie;
   
  }

  updateSalarie(){
    this.router.navigate(['/salaries/update/'+this.salarie.id]);
  }
  deleteSalarie(){
    console.log("inside delete"+"  "+this.salarie.id);
    this.router.navigate(['/salaries/delete/'+this.salarie.id]);
  }

}
