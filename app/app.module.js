"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var app_component_1 = require("./app.component");
var http_1 = require('@angular/http');
var http_service_1 = require('./services/http.service');
var stats_service_1 = require('./services/stats.service');
var sidebar_component_1 = require('./components/sidebar.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                sidebar_component_1.Sidebar
            ],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_1.NativeScriptModule,
                http_1.HttpModule
            ],
            providers: [
                http_service_1.HttpService,
                stats_service_1.StatsService
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map