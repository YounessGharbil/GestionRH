import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-get-all-router',
  templateUrl: './get-all-router.component.html',
  styleUrls: ['./get-all-router.component.css']
})
export class GetAllRouterComponent implements OnInit {
  constructor( private router: Router) { 
    
  }
  ngOnInit(): void {
    const navigationExtras: NavigationExtras = {
      state: {
        rapport: history.state.rapport
      }
    };
    switch (localStorage.getItem('userRole')) {
      case "ROLE_TEAM_LEADER":
        this.router.navigate(['/demandes-de-sanction/getAllTeamLeaderRapports'],navigationExtras);
        break;
      case "ROLE_SUPERVISEUR":
        this.router.navigate(['/demandes-de-sanction/getAllSuperviseurRapports'],navigationExtras);
        break;
      case "ROLE_MANAGER":
        this.router.navigate(['/demandes-de-sanction/getAllManagerRapports'],navigationExtras);
        break;
      case "ROLE_RH":
        this.router.navigate(['/demandes-de-sanction/getAllRhRapports'],navigationExtras);
        break;
      case "ROLE_RH_PLUS1":
        this.router.navigate(['/demandes-de-sanction/getAllRhPlus1Rapports'],navigationExtras);
        break;
      default:
        break;
    }
    
  }

}
