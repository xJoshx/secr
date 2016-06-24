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
var form_component_1 = require('../form/form.component');
var HelloComponent = (function () {
    function HelloComponent(router) {
        this.router = router;
        this.title = 'Secr Security Assignment';
        this.showForm = true;
    }
    HelloComponent.prototype.toggleForm = function () {
        this.showForm = !this.showForm;
        console.log(this.showForm);
    };
    HelloComponent.prototype.goToForm = function () {
        this.router.navigate(['Form']);
    };
    HelloComponent = __decorate([
        core_1.Component({
            selector: 'hello',
            directives: [form_component_1.FormComponent],
            template: "\n  <div class=\"wrapper\">\n    <h1 class=\"title\">{{title}}</h1>\n    <a id=\"navigation\" (click)=\"goToForm()\" class=\"btn btn-default centered button-go-to-form\">Go to form</a>\n    <a id='show-form' (click)=\"toggleForm()\" class=\"btn btn-default centered button-show-form\">Show me the form!!!1</a>\n    <div class=\"wrapper-form\">\n      <form-component [hidden]=\"showForm\"></form-component>\n    </div>\n  </div>\n  ",
            styles: ["\n    .wrapper {\n      width: 100%;\n      margin: 0 auto;\n    }\n    .title {\n      text-align: center;\n      margin-bottom: 30px;\n    }\n    .centered {\n      display: block;\n      margin: 0 auto;\n    }\n    .button-go-to-form {\n      margin-bottom: 30px;\n    }\n    .button-show-form {\n      margin-bottom: 30px;\n    }\n    .wrapper-form {\n      position: relative;\n    }\n    @media (min-width: 720px) {\n      .wrapper {\n        max-width: 75%;\n      }\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], HelloComponent);
    return HelloComponent;
}());
exports.HelloComponent = HelloComponent;
//# sourceMappingURL=hello.component.js.map