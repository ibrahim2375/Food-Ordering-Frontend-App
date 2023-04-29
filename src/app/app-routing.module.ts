import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { FoodComponent } from './pages/food/food.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:query',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'food/:id',component:FoodComponent},
  {path:'cart',component:CartComponent},
  { path: '**', component: ErrorComponent }, //should be always last route path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
