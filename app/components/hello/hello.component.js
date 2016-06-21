"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var HelloComponent = (function () {
    function HelloComponent(router) {
        this.router = router;
        this.title = 'Secr Security Assignment';
    }
    HelloComponent.prototype.goToForm = function () {
        this.router.navigate(['Form']);
    };
    HelloComponent = __decorate([
        core_1.Component({
            selector: 'hello',
            template: "\n    <h1 class='title'>{{title}}</h1>\n    <a id=\"navigation\" (click)=\"goToForm()\" class=\"btn btn-default centered\">Go to form</a>\n  ",
            styles: ["\n    .title {\n      text-align: center;\n      margin-bottom: 30px;\n    }\n    .centered {\n      display: block;\n      margin: 0 auto;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], HelloComponent);
    return HelloComponent;
}());
exports.HelloComponent = HelloComponent;
//# sourceMappingURL=hello.component.js.map