import { HttpClient } from '@angular/common/http';
import { Component, inject ,} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-enquiries',
  standalone: true,
  imports: [],
  templateUrl: './enquiries.component.html',
  styleUrl: './enquiries.component.css'
})
export class EnquiriesComponent {


  allEnquiries: any [] = [];


  constructor(private http: HttpClient) {
     this.getAllEnquiries();

  }

  getAllEnquiries(){
    this.http.get("https://fsboafrica.com/api/enquiries/all").subscribe((res:any)=>{

      this.allEnquiries = res.data;

    })
  }



}
