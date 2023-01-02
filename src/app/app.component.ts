import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SwitchDimmerServiceService} from "./services/switch-dimmer-service.service";
import {LightToggleComponent} from "./components/light-toggle/light-toggle.component";
import {DeviceDTO, DeviceTypeDTO} from "./services/backend-models/device-dto";
import {DeviceService} from "./services/device.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'aumy-front';

  public x: number = -1;
  public y: number = -1;
  public isClicked: boolean = false;
  public devices: DeviceDTO[] = [];

  @ViewChild('myDiv') myDiv: ElementRef<HTMLDivElement> = {} as any;
  @ViewChild('progressValue') progressValue: ElementRef<HTMLDivElement> = {} as any;
  @ViewChild('lightToggle') lightToggle: ElementRef<LightToggleComponent> = {} as any;

  constructor(private switchDimmerServiceService: SwitchDimmerServiceService,
              private deviceService: DeviceService) {
  }

  ngOnInit(): void {
    this.deviceService.list().subscribe(
      devices => {
        this.devices = devices;
      }
    );

    // this.switchDimmerServiceService.getDevices().subscribe(
    //   devices => {
    //     this.devices = devices;
    //     this.switchDimmerServiceService.getDeviceInfo('').subscribe(
    //       deviceInfo => {
    //         if(deviceInfo.state)
    //           this.isLightOn = !deviceInfo.state;
    //
    //         if(deviceInfo.brightness)
    //           this.heightInPercent = deviceInfo.brightness;
    //       }
    //     );
    //   }
    // );
  }

  mouseMoved($event: MouseEvent, device: DeviceDTO) {
    if(!this.isClicked) return;

    this.x = $event.clientX - this.myDiv.nativeElement.offsetLeft;
    this.y = $event.clientY - this.myDiv.nativeElement.offsetTop;

    let newHeight = this.myDiv.nativeElement.clientHeight - this.y;
    device.switch.percentage = newHeight / this.myDiv.nativeElement.clientHeight * 100;

    // if(device.switch.percentage < 0 || device.switch.percentage > 100) return;
  }

  mouseDown($event: MouseEvent, device: DeviceDTO) {
    this.isClicked = true;

    this.mouseMoved($event, device);
  }

  mouseUp(device: DeviceDTO) {
    this.isClicked = false;

    this.switchDimmerServiceService
      .setBrightness(device.tuyaDevice.deviceId, device.switch.percentage as number)
      .subscribe();
  }

  onStateChanged(device: DeviceDTO, state: boolean) {
    this.switchDimmerServiceService.setState(device.tuyaDevice.deviceId, state).subscribe();
  }

  devicesToDisplay(): DeviceDTO[] {
    return this.devices.filter(x => x.deviceType == DeviceTypeDTO.DimmerSwitch);
  }
}
