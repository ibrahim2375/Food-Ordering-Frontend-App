import { ElementRef } from "@angular/core";

export const ScrollByMouse = (element:ElementRef, startPoint:number, scrollLeft:number, isMouseDown:Boolean) => {
    element.nativeElement.addEventListener('mousedown', () => {
        isMouseDown = true;
        //get start point in page
        startPoint = element.nativeElement.pageX - element.nativeElement.offsetLeft;
        scrollLeft = element.nativeElement.scrollLeft;
    })
    element.nativeElement.addEventListener("mouseleave", () => {
        isMouseDown = false;
    });
    element.nativeElement.addEventListener("mouseup", () => {
        isMouseDown = false;
    });
    element.nativeElement.addEventListener("mousemove", () => {
        //check if its down
        if (!isMouseDown) return;
        // e.preventDefault();
        if (isMouseDown) {
            //calculate cursor position
            let currentX = element.nativeElement.pageX - element.nativeElement.offsetLeft;
            //minse from the start point
            let moved = currentX - startPoint;
            //assign moved value to scroll left
            element.nativeElement.scrollLeft = scrollLeft - moved;
        }
    });
}