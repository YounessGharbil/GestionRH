import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemandesDeSanctionService } from './demandes-de-sanction.service';


@Component({
  selector: 'app-demandes-de-sanction',
  templateUrl: './demandes-de-sanction.component.html',
  styleUrls: ['./demandes-de-sanction.component.css']
})
export class DemandesDeSanctionComponent implements OnInit {
  
  pdfUrl: string;
  constructor(private demandesDeSanctionService:DemandesDeSanctionService,private route: ActivatedRoute){
    
  }
  ngOnInit(): void {
    this.getDemandePdf();
  }
  getDemandePdf(){
    this.route.paramMap.subscribe(params => {
      console.log("hhhhhh");
      const id = +params.get('id');
      console.log(id);
        this.demandesDeSanctionService.getDemandePdf(id).subscribe((response: HttpResponse<Blob>)=>{
          console.log(response);
        const blob = new Blob([response.body], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download =`demandeN${id}.pdf`;
        document.body.appendChild(a);
        a.click();
      
      });
    });
  }
  

}
