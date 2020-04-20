import {Directive, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';
import {OnDestroy} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';


@Directive({
  selector: '[appBreakpointObserver]'
})
export class BreakpointObserverDirective implements OnInit, OnDestroy {

  @Input() appBreakpointObserver: number;

  private subscriber;


  constructor(private breakpointObserver: BreakpointObserver,
              private renderer: Renderer2,
              private containerRef: ViewContainerRef,
              private templateRef: TemplateRef<any>
  ) { }


  ngOnInit() {
    this.subscriber = this.breakpointObserver
      .observe([`(min-width: ${this.appBreakpointObserver}px)`])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.containerRef.createEmbeddedView(this.templateRef);
        } else {
          this.containerRef.clear();
        }
      });
  }
//не до конца понимаю работу стримов, изучить
  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
