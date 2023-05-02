import { Component, OnInit } from '@angular/core';
import {faPlay} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
faPlay = faPlay;
  constructor() { }

  ngOnInit(): void {
  }

}
