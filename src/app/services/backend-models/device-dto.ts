export interface DeviceDTO {
  deviceType: DeviceTypeDTO;
  name: string;
  address: string;
  icon: string;
  isOnline: boolean | null;
  isTuyaDevice: boolean;
  tuyaDevice: TuyaDeviceDTO;
  switch: SwitchDTO;
  socket: SocketDTO;
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
  state: boolean;
  percentage: number | null;
}

export interface SocketDTO {
  state: boolean;
  current: number | null;
  voltage: number | null;
  power: number | null;
}
