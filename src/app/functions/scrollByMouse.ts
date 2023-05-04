import { ElementRef } from "@angular/core";
  //scroll var
  var  scrollLeft = 0;
  var startX=0;
  var  isDown = false;
export const ScrollByMouse = (elementRef:ElementRef) => {
elementRef.nativeElement.addEventListener('mousedown', (e:any) => {
        isDown = true;
        //get start point in page
        startX = e.pageX - elementRef.nativeElement.offsetLeft;
        scrollLeft = elementRef.nativeElement.scrollLeft;
    })
    elementRef.nativeElement.addEventListener("mouseleave", () => {
        isDown = false;
    });
    elementRef.nativeElement.addEventListener("mouseup", () => {
        isDown = false;
    });
    elementRef.nativeElement.addEventListener("mousemove", (e:any) => {
        //check if its down
        if (!isDown) return;
        // e.preventDefault();
        if (isDown) {
            //calculate cursor position
            let currentX = e.pageX - elementRef.nativeElement.offsetLeft;
            //minse from the start point
            let moved = currentX - startX;
            //assign moved value to scroll left
            elementRef.nativeElement.scrollLeft = scrollLeft - moved;
        }
    });
}