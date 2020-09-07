import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Notification } from "../../models/notification.model";
import { NotificationService } from "../../services/notification.service";
import { Store } from "@ngrx/store";
import { AppState } from "../../state/app.reducer";
import * as AppActions from "src/app/state/app.actions";

@Component({
  selector: "notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.scss"],
})
export class NotificationComponent implements OnInit, OnDestroy {
  public notification: Notification;
  public notificationSubscription: Subscription;

  constructor(
    private store: Store<AppState>,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.notificationSubscription = this.notificationService
      .onNotify()
      .subscribe((notification) => {
        if (!notification || !notification.message) {
          this.notification = null;
        }
        this.notification = notification;
      });

    this.store.dispatch(AppActions.checkNominationStatus());
  }

  ngOnDestroy() {
    this.notificationSubscription.unsubscribe();
  }

  public handleOkClick(): void {
    this.notification = null;
  }

  public get mainClass(): string {
    return this.notification ? "" : "hidden";
  }
}
