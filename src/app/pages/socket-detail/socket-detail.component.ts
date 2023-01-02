import {Component, OnInit} from '@angular/core';
import {DeviceService} from "../../services/device.service";
import {DeviceDTO} from "../../services/backend-models/device-dto";
import {TuyaSocketService} from "../../services/tuya-socket.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-socket-detail',
  templateUrl: './socket-detail.component.html',
  styleUrls: ['./socket-detail.component.scss']
})
export class SocketDetailComponent implements OnInit {
  public device!: DeviceDTO;

  constructor(private deviceService: DeviceService, private tuyaSocketService: TuyaSocketService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let deviceId: string = this.route.snapshot.paramMap.get('deviceId') as string;
    this.deviceService.getById(deviceId).subscribe(
      device => this.device = device
    );
  }

  onStateChanged() {
    this.tuyaSocketService.setState(this.device.tuyaDevice.deviceId, this.device.socket.state).subscribe();
  }
}
