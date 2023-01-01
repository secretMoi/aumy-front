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
  public heightInPercent: number = 0;
  public isClicked: boolean = false;
  public devices: DeviceDTO[] = [];
  public isLightOn: boolean = true;

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
        this.switchDimmerServiceService.getDeviceInfo(devices[0].tuyaDevice.deviceId).subscribe(
          deviceInfo => {
            if(deviceInfo.state)
              this.isLightOn = !deviceInfo.state;

            if(deviceInfo.brightness)
              this.heightInPercent = deviceInfo.brightness;
          }
        );
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

  // private getDeviceById(deviceId: string): TuyaDeviceApiInfo {
  //   return this.devices.filter(x => x.id == deviceId)[0];
  // }

  mouseMoved($event: MouseEvent) {
    if(!this.isClicked) return;

    this.x = $event.clientX - this.myDiv.nativeElement.offsetLeft;
    this.y = $event.clientY - this.myDiv.nativeElement.offsetTop;

    let newHeight = this.myDiv.nativeElement.clientHeight - this.y;
    this.heightInPercent = newHeight / this.myDiv.nativeElement.clientHeight * 100;

    if(this.heightInPercent < 0 || this.heightInPercent > 100) return;
  }

  mouseDown($event: MouseEvent) {
    this.isClicked = true;

    this.mouseMoved($event);
  }

  mouseUp() {
    this.isClicked = false;

    this.switchDimmerServiceService.setBrightness(this.devices[0].tuyaDevice.deviceId, this.heightInPercent).subscribe();
  }

  onStateChanged(state: boolean) {
    // this.switchDimmerServiceService.setState(this.devices[4].id, state).subscribe();
  }

  devicesToDisplay(): DeviceDTO[] {
    return this.devices.filter(x => x.deviceType == DeviceTypeDTO.DimmerSwitch);
  }
}
