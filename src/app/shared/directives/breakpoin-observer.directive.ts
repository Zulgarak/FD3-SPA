import {Directive, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';
import {OnDestroy} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';


@Directive({
  selector: '[appBreakpoinObserver]'
})
export class BreakpoinObserverDirective implements OnInit, OnDestroy {

  @Input() appBreakpoinObserver: number;

  private subscriber;

  // matcher: MediaQueryList;

  constructor(private breakpointObserver: BreakpointObserver,
              private renderer: Renderer2,
              private containerRef: ViewContainerRef,
              private templateRef: TemplateRef<any>
  ) { }


  ngOnInit() {
    // this.breakpointObserver
    //   .observe([`(min-width: ${this.appBreakpoinObserver}px)`])
    //   .subscribe((state: BreakpointState) => {
    //     if (state.matches) {
    //       console.log('Viewport is 960px or over!');
    //       this.containerRef.createEmbeddedView(this.templateRef);
    //     } else {
    //       console.log('Viewport is getting smaller!');
    //       this.containerRef.clear();
    //     }
    //   });
    this.subscriber = this.breakpointObserver
      .observe([`(min-width: ${this.appBreakpoinObserver}px)`])
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


  //Почему-то вебшторм пишет что MediaQueryList.addListener() is depricated
  //with observable better for me
  // ngOnInit() {
  //   this.matcher = this.mediaMatcher.matchMedia('(min-width: 960px)');
  //   console.log(this.matcher);
  //   this.matcher.addListener(this.myListener);
  // }


  // myListener(event) {
  //   if (event.matches) {
  //     console.log('match');
  //   } else {
  //     console.log('no match');
  //   }
  // }

}
