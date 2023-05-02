import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { FoodComponent } from './pages/food/food.component';
import { CartComponent } from './pages/cart/cart.component';
import { FoodsComponent } from './pages/foods/foods.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
//services
import { LoginGuardService } from './services/login-guard.service';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'foods',component:FoodsComponent},
  {path:'search/:query',component:FoodsComponent},
  {path:'tag/:tag',component:FoodsComponent},
  {path:'food/:id',component:FoodComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent,canActivate:[LoginGuardService]},
  {path:'register',component:RegisterComponent,canActivate:[LoginGuardService]},
  { path: '**', component: ErrorComponent }, //should be always last route path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
