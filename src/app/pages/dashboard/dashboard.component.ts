import {Component, OnInit} from '@angular/core';
import {DeviceDTO, DeviceTypeDTO} from "../../services/backend-models/device-dto";
import {SwitchDimmerServiceService} from "../../services/switch-dimmer-service.service";
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
