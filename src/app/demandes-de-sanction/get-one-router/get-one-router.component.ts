import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-one-router',
  templateUrl: './get-one-router.component.html',
  styleUrls: ['./get-one-router.component.css']
})
export class GetOneRouterComponent {
  constructor( private router: Router) { 
    
  }
  ngOnInit(): void {
    switch (localStorage.getItem('userRole')) {
      case "ROLE_TEAM_LEADER":
        this.router.navigate(['/demandes-de-sanction/getOneTeamLeaderRapport']);
        break;
      case "ROLE_SUPERVISEUR":
        this.router.navigate(['/demandes-de-sanction/getOneSuperviseurRapport']);
        break;
      case "ROLE_MANAGER":
        this.router.navigate(['/demandes-de-sanction/getOneManagerRapport']);
        break;
      case "ROLE_RH":
        this.router.navigate(['/demandes-de-sanction/getOneRhRapport']);
        break;
      case "ROLE_RH_PLUS1":
        this.router.navigate(['/demandes-de-sanction/getOneRhPlus1Rapport']);
        break;
      default:
        break;
    }
    
  }

}
