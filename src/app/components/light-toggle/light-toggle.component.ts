import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-light-toggle',
  templateUrl: './light-toggle.component.html',
  styleUrls: ['./light-toggle.component.scss']
})
export class LightToggleComponent implements AfterViewInit {
  @Input() state: boolean | null | undefined = false;

  @Output() stateChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('toggleLabel') toggleLabel?: ElementRef;
  private contentHeight: number | undefined;

  ngAfterViewInit() {
    this.contentHeight = this.toggleLabel?.nativeElement.offsetHeight;
  }

  onStateChanged() {
    this.stateChanged.emit(!this.state);
  }
}
