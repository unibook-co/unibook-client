export type DeviceType = "browser" | "desktop";

export class DeviceObject {
  id: number;
  type: DeviceType;
  userAgent: string;
  ip: string;
  createdAt: string;

  constructor(data: {
    id: number;
    type: DeviceType;
    userAgent: string;
    ip: string;
    createdAt: string;
  }) {
    this.id = data.id;
    this.type = data.type;
    this.userAgent = data.userAgent;
    this.ip = data.ip;
    this.createdAt = data.createdAt;
  }
}
