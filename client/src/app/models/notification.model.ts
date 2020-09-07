export class Notification {
  message: string;
  type: NotificationType;

  constructor(init?: Partial<Notification>) {
    Object.assign(this, init);
  }
}

export enum NotificationType {
  Success,
  Info,
  Warning,
}
