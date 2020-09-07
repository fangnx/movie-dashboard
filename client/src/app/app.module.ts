import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./components/material/material.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { NotificationComponent } from "./components/notification/notification.component";
import { ResultPanelComponent } from "./components/dashboard/result-panel/result-panel.component";
import { NominationPanelComponent } from "./components/dashboard/nomination-panel/nomination-panel.component";
import { OmdbService } from "./services/omdb.service";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { appReducer, localStorageSyncReducer } from "./state/app.reducer";
import { AppEffects } from "./state/app.effects";
import { NotificationService } from "./services/notification.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ResultPanelComponent,
    NominationPanelComponent,
    NotificationComponent,
  ],
  imports: [
    StoreModule.forRoot(
      { app: appReducer },
      { metaReducers: [localStorageSyncReducer] }
    ),
    EffectsModule.forRoot([AppEffects]),

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [OmdbService, NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
