import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  constructor(
    private usersService:UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
    ){}
  ngOnInit(): void {
    this.deleteUser();
  }

  deleteUser(){
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      // this.usersService.deleteUser(id).subscribe();
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: { message: 'Are you sure you want to delete this User?' }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result === 'confirm') {
          this.usersService.deleteUser(id).subscribe({
            next:(response)=>{
              this.router.navigate(['/users']);
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
          this.router.navigate(['/users']);
          
        }
       
      });    
      
    });
    
  }

}
