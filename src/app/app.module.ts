import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule , ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './components/search/search.component';
import { ErrorComponent } from './pages/error/error.component';
import { TagsComponent } from './components/tags/tags.component';
import { FoodComponent } from './pages/food/food.component';
import { CartComponent } from './pages/cart/cart.component';
import { NotFoundDataComponent } from './components/not-found-data/not-found-data.component';
import { FoodsComponent } from './pages/foods/foods.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderItemsListComponent } from './components/order-items-list/order-items-list.component';
import { MapComponent } from './components/map/map.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { MobileNavComponent } from './components/mobile-nav/mobile-nav.component';
import { LandingComponent } from './components/landing/landing.component';
import { TrendingSectionComponent } from './components/trending-section/trending-section.component';
import { TrendingItemComponent } from './components/trending-item/trending-item.component';
import { NewestSectionComponent } from './components/newest-section/newest-section.component';
import { NewestItemComponent } from './components/newest-item/newest-item.component';
import { CravingSectionComponent } from './components/craving-section/craving-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { FoodItemComponent } from './components/food-item/food-item.component';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    ErrorComponent,
    TagsComponent,
    FoodComponent,
    CartComponent,
    NotFoundDataComponent,
    FoodsComponent,
    LoginComponent,
    RegisterComponent,
    LoadingComponent,
    CheckoutComponent,
    OrderItemsListComponent,
    MapComponent,
    MobileNavComponent,
    LandingComponent,
    TrendingSectionComponent,
    TrendingItemComponent,
    NewestSectionComponent,
    NewestItemComponent,
    CravingSectionComponent,
    FooterComponent,
    FoodItemComponent,

  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    RatingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
