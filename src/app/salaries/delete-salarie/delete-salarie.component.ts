import { Component, OnInit } from '@angular/core';
import { SalariesService } from '../salaries.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-delete-salarie',
  templateUrl: './delete-salarie.component.html',
  styleUrls: ['./delete-salarie.component.css']
})
export class DeleteSalarieComponent implements OnInit{
  constructor(
    private salariesService:SalariesService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
    ){ 
  }

 
  ngOnInit(): void {
   this.deleteSalarie();
  }
  deleteSalarie(){
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');

      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: { message: 'Are you sure you want to delete this Employee?' }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result === 'confirm') {
          this.salariesService.deleteSalarie(id).subscribe({
             next:response=>{
            this.router.navigate(['/salaries']);
          },
          error:(err)=>{
            console.log(err)
          },
          complete:()=>{
            console.log("task complete")
          }
          });
        }
        else{
          this.router.navigate(['/salaries']);
          
        }
       
      });      
    });
  }
}
