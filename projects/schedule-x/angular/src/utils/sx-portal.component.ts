import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  Input,
  ViewEncapsulation,
  ViewChild,
  TemplateRef,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'sx-portal',
  imports: [NgTemplateOutlet],
  templateUrl: './sx-portal.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class SxPortalComponent implements AfterViewInit {
  @Input() wrapperElement!: HTMLElement;
  @Input() elementTag!: string;
  @Input() template!: TemplateRef<any>;
  @Input() props?: any;

  @ViewChild('rootEl') rootElRef?: ElementRef;

  ngAfterViewInit() {
    const rootEl: HTMLElement = this.rootElRef?.nativeElement;
    if (
      this.wrapperElement instanceof HTMLElement &&
      rootEl instanceof HTMLElement
    ) {
      this.wrapperElement.appendChild(rootEl);
    } else {
      console.error(
        'wrapperElement or rootEl is not an HTMLElement',
        this.wrapperElement,
        rootEl,
      );
    }
  }
}
