import { Injectable } from "@angular/core";
import { Notification, NotificationType } from "../models/notification.model";
import { Subject, Observable } from "rxjs";

@Injectable()
export class NotificationService {
  private subject = new Subject<Notification>();

  public onNotify(): Observable<Notification> {
    return this.subject.asObservable();
  }

  public notify(notification: Notification): void {
    this.subject.next(notification);
  }

  public success(message: string): void {
    this.notify(new Notification({ type: NotificationType.Success, message }));
  }

  public info(message: string): void {
    this.notify(new Notification({ type: NotificationType.Info, message }));
  }

  public warning(message: string): void {
    this.notify(new Notification({ type: NotificationType.Warning, message }));
  }

  public clear(): void {
    this.subject.next();
  }
}
