import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: any;

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  laodDetail(restaurant: any){
    this.restaurantService.selectedRestaurant = restaurant;
    this.router.navigate(['restaurants-detail'],)
  }

  loadData() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.restaurantService.getRestaurantsByCity(id).subscribe((results) => {
      this.restaurants = results.restaurants;
      console.log(this.restaurants);
    });
  }

}
