import { Component, OnInit } from '@angular/core';
import { LapserviceService } from '../lapservice.service';

@Component({
  selector: 'app-lap',
  templateUrl: './lap.component.html',
  styleUrls: ['./lap.component.css']
})
export class LapComponent implements OnInit {
  confirmationString: string = 'New Product has been Added !!';
  isAdded: boolean = false;
  laptopData: any = {};

  constructor(private lapService: LapserviceService) { }

  ngOnInit(): void {
  }

  createLaptop(): void {
    this.lapService.createLaptop(this.laptopData).subscribe((response) => {
      console.log(response);
      this.isAdded = true;
    });
  }
}