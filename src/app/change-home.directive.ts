import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { MovieServiceService } from './core/services/movie-service.service';

@Directive({
  selector: '[appChangeHome]'
})
export class ChangeHomeDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef:  ViewContainerRef,
    private movieService: MovieServiceService
  ) { }

  test = 6;
  condition: any;

  ngOnInit() {
    
    if(this.test > 5) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear()
    }
  }

  @Input() set appChangeHome(condition: boolean) {
    this.condition = condition;
  }
}
