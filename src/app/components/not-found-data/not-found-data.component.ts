import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-data',
  templateUrl: './not-found-data.component.html',
  styleUrls: ['./not-found-data.component.css']
})
export class NotFoundDataComponent implements OnInit {
  @Input() visiable = false;
  @Input() message = "Nothing Found";
  @Input() link = "/";
  @Input() linkText = "Reset";
  constructor() { }

  ngOnInit(): void {
  }

}
