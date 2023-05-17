import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { User } from 'src/app/entities/User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent implements OnInit,AfterViewInit {
  constructor(private usersService:UsersService,private router: Router){}
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;

  users: User[] = [];

  
  displayedColumns: string[] = ['matricule', 'email','role','department',
                                'site','afficher'];

  ngOnInit(): void {
    this.getAllUsers();
  }

  ngAfterViewInit(): void {
    
  }
  
  getAllUsers(){
    this.usersService.getAllUsers().subscribe({
      next:(response)=>{
        this.users=response;
        this.dataSource = new MatTableDataSource<User>(this.users);
        this.dataSource.sort=this.matSort;    
        this.dataSource.paginator = this.paginator;
  
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

  addUser() {
    this.router.navigate(['/users/create']);
    }

    showDetails(user: User): void {
      const navigationExtras: NavigationExtras = {
        state: {
          user: user
        }
      };
      this.router.navigate(['/users/get'], navigationExtras);
    }
    filter(e:any){
      this.dataSource.filter=e.target.value;
    }
  
}
