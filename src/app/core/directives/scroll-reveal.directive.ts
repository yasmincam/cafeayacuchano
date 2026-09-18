import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.el.nativeElement.classList.add('reveal-magic');
    if (typeof IntersectionObserver !== 'undefined') {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('is-visible');
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      }, { threshold: 0.12 });
      this.observer.observe(this.el.nativeElement);
    } else {
      this.el.nativeElement.classList.add('is-visible');
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
