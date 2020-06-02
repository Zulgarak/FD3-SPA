import {Directive, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';
import {OnDestroy} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {Subscription} from 'rxjs';


@Directive({
  selector: '[appBreakpointObserver]'
})
export class BreakpointObserverDirective implements OnInit, OnDestroy {

  @Input() appBreakpointObserver: number;

  private subscriber: Subscription;


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

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
