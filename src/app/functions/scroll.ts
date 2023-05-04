import { ElementRef } from "@angular/core";

export const scroll_to_left = (elementRef:ElementRef) => {
  elementRef.nativeElement.scrollLeft -= elementRef.nativeElement.getBoundingClientRect().width;
}
export const scroll_to_right = (elementRef:ElementRef)  => {
  elementRef.nativeElement.scrollLeft += elementRef.nativeElement.getBoundingClientRect().width;
}