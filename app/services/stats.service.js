"use strict";
var core_1 = require('@angular/core');
var http_service_1 = require('./http.service');
var StatsService = (function () {
    function StatsService(http) {
        this.http = http;
    }
    StatsService.prototype.scrobbleCount = function () {
        return this.http.get('scrobbles/count');
    };
    StatsService.prototype.popularArtists = function () {
        return this.http.get('artists/popular');
    };
    StatsService.prototype.popularSongs = function () {
        return this.http.get('songs/popular');
    };
    StatsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], StatsService);
    return StatsService;
}());
exports.StatsService = StatsService;
//# sourceMappingURL=stats.service.js.map