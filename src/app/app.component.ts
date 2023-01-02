import {Component, OnInit} from '@angular/core';
import {SwitchDimmerServiceService} from "./services/switch-dimmer-service.service";
import {DeviceDTO, DeviceTypeDTO} from "./services/backend-models/device-dto";
import {DeviceService} from "./services/device.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public devices: DeviceDTO[] = [];

  public deviceType = DeviceTypeDTO;

  constructor(private switchDimmerServiceService: SwitchDimmerServiceService,
              private deviceService: DeviceService) {
  }

  ngOnInit(): void {
    this.deviceService.list().subscribe(
      devices => {
        this.devices = devices;
      }
    );
  }

  devicesToDisplay(): DeviceDTO[] {
    return this.devices.filter(x => x.deviceType == DeviceTypeDTO.DimmerSwitch || x.deviceType == DeviceTypeDTO.Socket);
  }
}
