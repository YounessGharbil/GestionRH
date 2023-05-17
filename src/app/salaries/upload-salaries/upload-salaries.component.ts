import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SalariesService } from '../salaries.service';

@Component({
  selector: 'app-upload-salaries',
  templateUrl: './upload-salaries.component.html',
  styleUrls: ['./upload-salaries.component.css']
})
export class UploadSalariesComponent {
  constructor(private salariesService:SalariesService,private router: Router){

  }
  onFileSelect(event: any) {
    const file = event.target.files[0];
    this.salariesService.uploadSalariesExcel(file).subscribe({
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
  

}
