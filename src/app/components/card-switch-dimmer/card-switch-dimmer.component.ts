import {Component, ElementRef, Input, Output, ViewChild} from '@angular/core';
import {DeviceDTO} from "../../services/backend-models/device-dto";
import {SwitchDimmerServiceService} from "../../services/switch-dimmer-service.service";

@Component({
  selector: 'app-card-switch-dimmer',
  templateUrl: './card-switch-dimmer.component.html',
  styleUrls: ['./card-switch-dimmer.component.scss']
})
export class CardSwitchDimmerComponent {
  @Input() device!: DeviceDTO;

  @Output() newValue!: (value: number | null) => {};
  @Output() stateChanged!: (state: boolean) => {};

  @ViewChild('myDiv') myDiv: ElementRef<HTMLDivElement> = {} as any;
  @ViewChild('progressValue') progressValue: ElementRef<HTMLDivElement> = {} as any;

  public isClicked: boolean = false;
  public x: number = -1;
  public y: number = -1;

  constructor(private switchDimmerServiceService: SwitchDimmerServiceService) {
  }

  mouseMoved($event: MouseEvent) {
    if(!this.isClicked) return;

    this.x = $event.clientX - this.myDiv.nativeElement.offsetLeft;
    this.y = $event.clientY - this.myDiv.nativeElement.offsetTop;

    let newHeight = this.myDiv.nativeElement.clientHeight - this.y;
    this.device.switch.percentage = newHeight / this.myDiv.nativeElement.clientHeight * 100;
  }

  mouseDown($event: MouseEvent) {
    this.isClicked = true;

    this.mouseMoved($event);
  }

  mouseUp() {
    this.isClicked = false;

    // this.newValue(this.dimmerSwitch.percentage);

    this.switchDimmerServiceService
      .setBrightness(this.device.tuyaDevice.deviceId, this.device.switch.percentage as number)
      .subscribe();
  }

  // mouseUp(device: DeviceDTO) {
  //   this.switchDimmerServiceService
  //     .setBrightness(device.tuyaDevice.deviceId, device.switch.percentage as number)
  //     .subscribe();
  // }

  onStateChanged(newState: boolean) {
    this.switchDimmerServiceService.setState(this.device.tuyaDevice.deviceId, newState).subscribe();
  }

  // onStateChanged($event: boolean) {
  //   this.stateChanged(this.dimmerSwitch.state);
  // }
}
