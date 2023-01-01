export interface DeviceDTO {
  deviceType: DeviceTypeDTO;
  name: string;
  address: string;
  icon: string;
  isOnline: boolean | null;
  isTuyaDevice: boolean;
  tuyaDevice: TuyaDeviceDTO;
  switch: SwitchDTO;
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

export interface SwitchDTO {
  state: boolean | null;
  percentage: number | null;
}
