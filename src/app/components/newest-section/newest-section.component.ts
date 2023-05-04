import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//icons
import {faArrowLeft , faArrowRight  } from '@fortawesome/free-solid-svg-icons';
import { scroll_to_left, scroll_to_right } from 'src/app/functions/scroll';
import { ScrollByMouse } from 'src/app/functions/scrollByMouse';

@Component({
  selector: 'app-newest-section',
  templateUrl: './newest-section.component.html',
  styleUrls: ['./newest-section.component.css']
})
export class NewestSectionComponent implements OnInit {
    //icons
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight
  @ViewChild('items',{static:true}) elementRef!:ElementRef;
  constructor() { }

  ngOnInit(): void {
      ScrollByMouse(this.elementRef);
  }
  scroll_left = () => {
    scroll_to_left(this.elementRef);
  }
  scroll_right = () => {
    scroll_to_right(this.elementRef);
  }
}
