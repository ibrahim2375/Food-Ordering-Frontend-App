import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { FoodComponent } from './pages/food/food.component';
import { CartComponent } from './pages/cart/cart.component';
import { FoodsComponent } from './pages/foods/foods.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'foods',component:FoodsComponent},
  {path:'search/:query',component:FoodsComponent},
  {path:'tag/:tag',component:FoodsComponent},
  {path:'food/:id',component:FoodComponent},
  {path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent},
  { path: '**', component: ErrorComponent }, //should be always last route path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
