import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/entities/User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {

  constructor(
    private usersService:UsersService,
    private route: ActivatedRoute,
    private router: Router
    ){}
  ngOnInit(): void {

    if(history.state.user){
      this.setUser(history.state.user);
      console.log(this.user);
    }
    else{
      console.log(this.user);
      this.getUser();
    }
  }
  setUser(user: User) {
    this.user=user;
  }
  user:User;

  

  getUser(){
    this.route.queryParamMap.subscribe(params => {
      const id = +params.get('id');
      this.usersService.getUser(id).subscribe({
        next: (response)=>{
          console.log(response);
          this.user=response;

        },
        error:(err)=>{
          console.log(err)
        },
        complete:()=>{
          console.log("task complete")
        }
      });
    });
  }

  deleteUser() {
  this.router.navigate(['/users/delete/'+this.user.id]);
}
updateUser() {
  this.router.navigate(['/users/update/'+this.user.id]);
}

}
