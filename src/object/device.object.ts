export type DeviceType = "browser" | "desktop";

export class DeviceObject {
  id: number;
  type: DeviceType;
  userAgent: string;
  ip: string;
  createdAt: string;
  isInUse: boolean;

  constructor(data: {
    id: number;
    type: DeviceType;
    userAgent: string;
    ip: string;
    isInUse: boolean;
    createdAt: string;
  }) {
    this.id = data.id;
    this.type = data.type;
    this.userAgent = data.userAgent;
    this.ip = data.ip;
    this.isInUse = data.isInUse;
    this.createdAt = data.createdAt;
  }
}
