import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { DetailRestaurantComponent } from './components/detail-restaurant/detail-restaurant.component';

const routes: Routes = [
  { path: 'restaurants/:id', component: RestaurantsComponent },
  { path: '', redirectTo: '/restaurants/74', pathMatch: 'full' },  
  { path: 'restaurants-detail', component: DetailRestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
