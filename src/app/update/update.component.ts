import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LapserviceService } from '../lapservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  laptopId: number;
  laptopData: any = {}; // You can define the type of laptopData based on your data structure

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lapService: LapserviceService
  ) { }
  confirmationString: string = 'Product updated successfully !!';
  isUpdated: boolean = false;
  ngOnInit() {
    // Get the laptop ID from the route parameter
    this.route.params.subscribe(params => {
      this.laptopId = params['id'];
      // Call the service method to fetch the laptop data based on the ID
      this.lapService.getLaptopById(this.laptopId).subscribe(data => {
        this.laptopData = data;
      });
    });
  }

  updateLaptop() {
    this.lapService.updateLaptop(this.laptopId, this.laptopData).subscribe(() => {
      console.log('Laptop updated successfully');
      this.isUpdated = true;
    });
  }
}

