import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags:Tag[] = [];
  // scrollLeft = 0;
  // startX=0;
  // isDown = false;
  // @ViewChild('tagsRef',{static:true}) elementRef!:ElementRef;
  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    // this.ScrollByMouse();
    this.foodService.getAllTags().subscribe( tags => {
      this.tags = tags;
    });
  }
//   ScrollByMouse = () => {
//     this.elementRef.nativeElement.addEventListener('mousedown', (e:any) => {
//         this.isDown = true;
//         //get start point in page
//         this.startX = e.pageX - this.elementRef.nativeElement.offsetLeft;
//         this.scrollLeft = this.elementRef.nativeElement.scrollLeft;
//     })
//     this.elementRef.nativeElement.addEventListener("mouseleave", () => {
//         this.isDown = false;
//     });
//     this.elementRef.nativeElement.addEventListener("mouseup", () => {
//         this.isDown = false;
//     });
//     this.elementRef.nativeElement.addEventListener("mousemove", (e:any) => {
//         //check if its down
//         if (!this.isDown) return;
//         // e.preventDefault();
//         if (this.isDown) {
//             //calculate cursor position
//             let currentX = e.pageX - this.elementRef.nativeElement.offsetLeft;
//             //minse from the start point
//             let moved = currentX - this.startX;
//             //assign moved value to scroll left
//             this.elementRef.nativeElement.scrollLeft = this.scrollLeft - moved;
//         }
//     });
// }
}
