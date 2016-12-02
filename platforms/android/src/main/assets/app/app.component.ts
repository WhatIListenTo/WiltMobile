import { Component } from "@angular/core";
import { Page } from 'ui/page';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 16;

    constructor(page: Page) {
      page.actionBarHidden = true;
    }
}
