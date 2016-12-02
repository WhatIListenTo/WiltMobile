import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";

import { AppComponent } from "./app.component";
import { HttpModule, Headers } from '@angular/http';
import { HttpService } from './services/http.service';
import { StatsService } from './services/stats.service';
import { Sidebar } from './components/sidebar.component';

@NgModule({
    declarations: [
      AppComponent,
      Sidebar
    ],
    bootstrap: [AppComponent],
    imports: [
      NativeScriptModule,
      HttpModule
    ],
    providers: [
      HttpService,
      StatsService
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
