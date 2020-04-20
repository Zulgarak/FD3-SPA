enum State {
  more,
  less
}

import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appHideMobile]'
})

export class HideMobileDirective implements OnInit {
  @HostListener('mouseenter') onClick(event: MouseEvent) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
  }

  constructor(
    private elementRef: ElementRef<any>,
    private containerRef: ViewContainerRef,
    private renderer: Renderer2,
  ) { }

  prevState: number;

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
  }


}
