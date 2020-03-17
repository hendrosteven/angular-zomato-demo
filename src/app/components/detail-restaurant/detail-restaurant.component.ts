import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-detail-restaurant',
  templateUrl: './detail-restaurant.component.html',
  styleUrls: ['./detail-restaurant.component.css']
})
export class DetailRestaurantComponent implements OnInit {

  data: any;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    console.log(this.restaurantService.selectedRestaurant);
    this.data = this.restaurantService.selectedRestaurant;
  }

}
