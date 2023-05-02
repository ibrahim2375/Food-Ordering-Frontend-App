import { Component, Input, OnInit } from '@angular/core';
//icons 
import {faShoppingBag ,faList } from '@fortawesome/free-solid-svg-icons'
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css']
})
export class MobileNavComponent implements OnInit {
  //icons
  faShoppingBag = faShoppingBag;
  faList = faList;
    // nav state in mobile
  navState:Boolean = false;
  @Input() user!:User;
  @Input() isLoggedIn = '';
  constructor(private userService:UserService) {
    window.addEventListener('resize', () => {
      if(window.innerWidth > 768){
        this.navState = false;
      }
    }) 
  }

  ngOnInit(): void {
  }
    // change nav menu state show/hide
  changeNavState(){
    this.navState = !this.navState;
  }
  logout() {
    this.userService.logout();
  }

}
