import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-light-toggle',
  templateUrl: './light-toggle.component.html',
  styleUrls: ['./light-toggle.component.scss']
})
export class LightToggleComponent implements AfterViewInit {
  @Input() state: boolean = false;

  get internalState(): boolean {
    return !this.state;
  }
  set internalState(newState: boolean) {
    this.state = !newState;
  }

  @Output() stateChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('toggleLabel') toggleLabel?: ElementRef;
  private contentHeight: number | undefined;

  ngAfterViewInit() {
    this.contentHeight = this.toggleLabel?.nativeElement.offsetHeight;
  }

  onStateChanged() {
    this.stateChanged.emit(this.state);
  }
}
