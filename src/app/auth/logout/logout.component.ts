import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{
  constructor(private authservice:AuthService,private router: Router){

  }
  ngOnInit(): void {
    if(localStorage.getItem('authenticatedUser')){
      this.authservice.clearLocalStorage();
    }
    this.router.navigate(['/login']);
  }
  
}
