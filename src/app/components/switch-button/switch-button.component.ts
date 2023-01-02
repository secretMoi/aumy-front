import {Component, Input} from '@angular/core';
import {DeviceDTO} from "../../services/backend-models/device-dto";
import {TuyaSocketService} from "../../services/tuya-socket.service";

@Component({
  selector: 'app-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss']
})
export class SwitchButtonComponent {

  @Input() device!: DeviceDTO;

  static ToggleButtonId: number = 0;
  toggleButtonId: number;

  constructor(private tuyaSocketService: TuyaSocketService) {
    SwitchButtonComponent.ToggleButtonId++;
    this.toggleButtonId = SwitchButtonComponent.ToggleButtonId
  }

  onStateChanged() {
    this.tuyaSocketService.setState(this.device.tuyaDevice.deviceId, this.device.socket.state).subscribe();
  }
}
