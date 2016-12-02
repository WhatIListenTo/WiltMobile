"use strict";
var core_1 = require("@angular/core");
var page_1 = require('ui/page');
var AppComponent = (function () {
    function AppComponent(page) {
        this.counter = 16;
        page.actionBarHidden = true;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [page_1.Page])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map