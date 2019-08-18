import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MessagesComponent } from "./messages/messages.component";

@NgModule({
  declarations: [AppComponent, MessagesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: "api", useValue: "http://localhost:3000/api" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
