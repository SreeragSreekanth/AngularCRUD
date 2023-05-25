import { Component, OnInit } from '@angular/core';
import { LapserviceService } from '../lapservice.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor( private lapservice:LapserviceService, private router: Router ){}
  laptoparray:any[]=[]
  ngOnInit(){
      this.lapservice.getLap().subscribe((data)=>{
        console.log({data});
        this.laptoparray = data;
      })
  }
  deleteLap(id: number) {
    this.lapservice.deleteLap(id).subscribe(() => {
      console.log('Laptop deleted successfully');
      // Refresh the laptop array after deletion
      this.laptoparray = this.laptoparray.filter((laptop) => laptop.id !== id);
    });
  }
  
}
