import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import {
  Notification,
  NotificationType,
} from "../../models/notification.model";
import { NotificationService } from "../../services/notification.service";

@Component({
  selector: "notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.scss"],
})
export class NotificationComponent implements OnInit, OnDestroy {
  public notification: Notification;
  public notificationSubscription: Subscription;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationSubscription = this.notificationService
      .onNotify()
      .subscribe((notification) => {
        if (!notification.message) {
          return;
        }
        this.notification = notification;
      });
  }

  ngOnDestroy() {
    this.notificationSubscription.unsubscribe();
  }

  public get notificationClass(): string {
    return "";
  }
}
