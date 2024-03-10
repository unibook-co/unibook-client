export class UserSettingObject {
  isPushNotificationEnabled: boolean;

  constructor(data: { isPushNotificationEnabled: boolean }) {
    this.isPushNotificationEnabled = data.isPushNotificationEnabled;
  }
}
