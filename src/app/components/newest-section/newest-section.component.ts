import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-newest-section',
  templateUrl: './newest-section.component.html',
  styleUrls: ['./newest-section.component.css']
})
export class NewestSectionComponent implements OnInit {
  scrollLeft = 0;
  startX=0;
  isDown = false;
  @ViewChild('items',{static:true}) elementRef!:ElementRef;
  constructor() { }

  ngOnInit(): void {
      this.ScrollByMouse();
  }
ScrollByMouse = () => {
    this.elementRef.nativeElement.addEventListener('mousedown', (e:any) => {
        this.isDown = true;
        //get start point in page
        this.startX = e.pageX - this.elementRef.nativeElement.offsetLeft;
        this.scrollLeft = this.elementRef.nativeElement.scrollLeft;
    })
    this.elementRef.nativeElement.addEventListener("mouseleave", () => {
        this.isDown = false;
    });
    this.elementRef.nativeElement.addEventListener("mouseup", () => {
        this.isDown = false;
    });
    this.elementRef.nativeElement.addEventListener("mousemove", (e:any) => {
        //check if its down
        if (!this.isDown) return;
        // e.preventDefault();
        if (this.isDown) {
            //calculate cursor position
            let currentX = e.pageX - this.elementRef.nativeElement.offsetLeft;
            //minse from the start point
            let moved = currentX - this.startX;
            //assign moved value to scroll left
            this.elementRef.nativeElement.scrollLeft = this.scrollLeft - moved;
        }
    });
}
}
