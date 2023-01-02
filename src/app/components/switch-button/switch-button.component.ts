import {Component, Input} from '@angular/core';
import {DeviceDTO} from "../../services/backend-models/device-dto";

@Component({
  selector: 'app-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss']
})
export class SwitchButtonComponent {

  @Input() device!: DeviceDTO;

  static ToggleButtonId: number = 0;
  toggleButtonId: number;

  constructor() {
    SwitchButtonComponent.ToggleButtonId++;
    this.toggleButtonId = SwitchButtonComponent.ToggleButtonId
  }
}
