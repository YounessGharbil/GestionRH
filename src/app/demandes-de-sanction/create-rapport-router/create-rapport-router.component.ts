import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-rapport-router',
  templateUrl: './create-rapport-router.component.html',
  styleUrls: ['./create-rapport-router.component.css']
})
export class CreateRapportRouterComponent {
  constructor( private router: Router) { 
    
  }
  ngOnInit(): void {
    switch (localStorage.getItem('userRole')) {
      case "ROLE_TEAM_LEADER":
        this.router.navigate(['/demandes-de-sanction/createRapportTeamLeader']);
        break;
      case "ROLE_SUPERVISEUR":
        this.router.navigate(['/demandes-de-sanction/createRapportSuperviseur']);
        break;
      case "ROLE_MANAGER":
        this.router.navigate(['/demandes-de-sanction/createRapportManager']);
        break;
      case "ROLE_RH":
        this.router.navigate(['/demandes-de-sanction/createRapportRh']);
        break;
      case "ROLE_RH_PLUS1":
        this.router.navigate(['/demandes-de-sanction/createRapportRhPlus1']);
        break;
      default:
        break;
    }
    
  }


}
