import { Injectable } from "@angular/core";
import { Notification, NotificationType } from "../models/notification.model";
import { Subject, Observable } from "rxjs";

@Injectable()
export class NotificationService {
  private subject = new Subject<Notification>();

  // enable subscribing to alerts observable
  // onAlert(id = this.defaultId): Observable<Alert> {
  //   return this.subject.asObservable().pipe(filter((x) => x && x.id === id));
  // }

  public onNotify(): Observable<Notification> {
    return this.subject.asObservable();
  }

  public notify(notification: Notification): void {
    this.subject.next(notification);
  }

  public success(message: string, options?: any): void {
    this.notify(
      new Notification({ ...options, type: NotificationType.Success, message })
    );
  }

  public info(message: string, options?: any): void {
    this.notify(
      new Notification({ ...options, type: NotificationType.Info, message })
    );
  }

  public warning(message: string, options?: any): void {
    this.notify(
      new Notification({ ...options, type: NotificationType.Warning, message })
    );
  }

  // // clear alerts
  // clear(id = this.defaultId) {
  //   this.subject.next(new Alert({ id }));
  // }
}