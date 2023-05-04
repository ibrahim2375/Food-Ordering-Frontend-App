import { Component, OnInit } from '@angular/core';
import { sample_craving_food } from 'src/data';

@Component({
  selector: 'app-craving-section',
  templateUrl: './craving-section.component.html',
  styleUrls: ['./craving-section.component.css']
})
export class CravingSectionComponent implements OnInit {
  cravingItems!:any;
  constructor() { }

  ngOnInit(): void {
    this.cravingItems = sample_craving_food;
  }

}
