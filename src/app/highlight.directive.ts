import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) {
    
   }
   @Input() defaultColor: string='';
   @Input('appHighlight') highlightColor: string='';

   @HostListener('mouseenter') onMouseEnter(){
     this.highlight(this.defaultColor || this.highlightColor || 'yellow');
   }
   @HostListener('mouseleave') onMouseLeave() {
     this.highlight('');
   }
   private highlight(color: string) {
     this.elem.nativeElement.style.backgroundColor = color;
   }
}
