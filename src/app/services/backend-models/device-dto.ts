export interface DeviceDTO {
  deviceType: DeviceTypeDTO;
  name: string;
  address: string;
  icon: string;
  isOnline: boolean;
  isTuyaDevice: boolean;
  tuyaDevice: TuyaDeviceDTO;
}

export enum DeviceTypeDTO {
  Light,
  Switch,
  DimmerSwitch,
  Socket
}

export interface TuyaDeviceDTO {
  deviceId: string;
}
