import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { Salarie } from 'src/app/entities/Salarie';
import { SalariesService } from '../salaries.service';

@Component({
  selector: 'app-get-all-salaries',
  templateUrl: './get-all-salaries.component.html',
  styleUrls: ['./get-all-salaries.component.css']
})
export class GetAllSalariesComponent implements OnInit,AfterViewInit {

  constructor(private salariesService: SalariesService, private router: Router) {}

  dataSource: MatTableDataSource<Salarie>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;


  salaries: Salarie[] = [];

  displayedColumns: string[] = [
    'matricule',
    'nom',
    'prenom',
    'date_dembauche',
    'segment',
    'bu',
    'site',
    'code_site',
    'departement',
    'local_job_title',
    'position',
    'supervisor',
    'genre',
    'type_de_contrat',
    'status',
    'direct',
    'afficher'
  ];

  ngOnInit(): void {
    this.getAllSalaries();
  }

  ngAfterViewInit() {
  }
 
  getAllSalaries() {
    this.salariesService.getAllSalaries().subscribe({
       next:(response) => {
      this.salaries = response;
      this.dataSource = new MatTableDataSource<Salarie>(this.salaries); 
      this.dataSource.sort=this.matSort;    
      this.dataSource.paginator = this.paginator;

    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{
      console.log("task complete")
    }
    });
  }

  addSalarie() {
    this.router.navigate(['/salaries/create']);
  }
  uploadSalaries(){
    this.router.navigate(['/salaries/upload']);

  }

  showDetails(salarie: Salarie): void {
    const navigationExtras: NavigationExtras = {
      state: {
        salarie: salarie
      }
    };
    this.router.navigate(['/salaries/get'], navigationExtras);
  }

  filter(e:any){
    this.dataSource.filter=e.target.value;
  }

}
