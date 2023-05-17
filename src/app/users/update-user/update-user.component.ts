import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/entities/User';
import { Role } from 'src/app/enums/Role';
import { Site } from 'src/app/enums/Site';
import { UpdateUserRequest } from '../requests/UpdateUserRequest';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  constructor(private usersService:UsersService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router:Router){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.usersService.getUser(id).subscribe(response =>{
        this.user=response;
      });
 
    });
  }

  updateUserRequest:UpdateUserRequest;
  user:User=new User();
  hide:any;
  
  roleOptions = [
    { value:"ROLE_TEAM_LEADER", label: 'Team Leader' },
    { value:"ROLE_SUPERVISEUR", label: 'Superviseur' },
    { value:"ROLE_MANAGER", label: 'Manager' },
    { value:"ROLE_RH", label: 'RH' },
    { value:"ROLE_RH_PLUS1", label: 'RHPlus1' },
  ];

  userFormGroup: FormGroup = this.fb.group({
    username:['', Validators.required],
    password:['', Validators.required],
    userRole:['', Validators.required],
  });


  updateUser(updateUserRequest:UpdateUserRequest){
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.usersService.updateUser(updateUserRequest).subscribe({
        next:(response=>
          {
            console.log("updated");
            this.router.navigate(['/users']);
            
          }),
          error:(err=>{
            console.log(err)
          }),
          complete:(()=>{
            console.log('task complete')
          })
      }
       
        );
    });
  }

  onSubmit(){
    this.updateUserRequest={
      'id':this.user.id,
      'email':this.userFormGroup.value.username,
      'password':this.userFormGroup.value.password,
      'role':this.userFormGroup.value.userRole,
    };
    this.updateUser(this.updateUserRequest);
  }

}
