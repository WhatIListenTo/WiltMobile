"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var isDev = false;
var apiUrl;
if (!isDev) {
    apiUrl = 'https://wilt.fm/api/';
}
else {
    apiUrl = 'http://localhost:8000/api/';
}
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
    }
    HttpService.prototype.resetHeaders = function () {
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
    };
    HttpService.prototype.updateHeader = function (key, value) {
        this.headers[key] = value;
    };
    HttpService.prototype.clearToken = function (key) {
        delete this.headers[key];
    };
    HttpService.prototype.get = function (url, params) {
        if (params === void 0) { params = {}; }
        url = "" + apiUrl + url;
        return this.request('get', url, {}, params);
    };
    HttpService.prototype.post = function (url, body, params) {
        if (body === void 0) { body = {}; }
        if (params === void 0) { params = {}; }
        url = "" + apiUrl + url;
        return this.request('post', url, body, params);
    };
    HttpService.prototype.put = function (url, body, params) {
        if (body === void 0) { body = {}; }
        if (params === void 0) { params = {}; }
        return this.request('put', url, body, params);
    };
    HttpService.prototype.patch = function (url, data) {
        if (data === void 0) { data = {}; }
        url = "" + apiUrl + url;
        var headers = new http_1.Headers(this.headers);
        var options = new http_1.RequestOptions({ headers: headers });
        console.log(headers);
        return this.request('patch', url, data);
    };
    // let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    // let options = new RequestOptions({ headers: headers });
    //
    // get(path: string){
    //     return this.http.get(path, options)
    // };
    HttpService.prototype.delete = function (url) {
        url = "" + apiUrl + url;
        var headers = new http_1.Headers(this.headers);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.delete(url, options);
    };
    HttpService.prototype.request = function (method, url, body, params) {
        if (body === void 0) { body = {}; }
        if (params === void 0) { params = {}; }
        var headers = new http_1.Headers(this.headers);
        var endsInSlashOrParams = /.*\/$|.*\?.*/g;
        if (!endsInSlashOrParams.test(url)) {
            url += '/';
        }
        // build param string
        var paramStr = Object.keys(params).reduce(function (acc, cur, i) { return ("" + acc + (i > 0 ? '&' : '') + cur + "=" + params[cur]); }, '');
        var options = new http_1.RequestOptions({ headers: headers, search: paramStr });
        var obs;
        if (method.toLowerCase() === 'get') {
            obs = this.http[method](url, options);
        }
        else {
            obs = this.http[method](url, body, options);
        }
        return obs.map(function (res) {
            try {
                return res.json();
            }
            catch (e) {
                // tslint:disable-next-line:no-console
                console.log(e);
            }
            return {};
        });
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map