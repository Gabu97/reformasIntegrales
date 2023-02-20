import { Component, OnInit, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { HostListener, ElementRef } from '@angular/core';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition('void <=> *', animate(3000)),
    ]),
    trigger('fadeInOnScroll', [
      state(
        'show',
        style({
          opacity: 1,
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      transition('show => hide', animate('300ms ease-out')),
      transition('hide => show', animate('300ms ease-in')),
    ]),
  ],
})
export class HeroComponent implements OnInit {
  fadeInOut = 'in';
  state = 'hide';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const componentPosition = this.el.nativeElement.offsetTop/ 1.33;

    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= componentPosition) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }
  }
  constructor(private el: ElementRef) {}
  ngOnInit() {
    this.fadeInOut = 'in';
  }
}
