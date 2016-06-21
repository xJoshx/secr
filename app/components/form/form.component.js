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
var FormComponent = (function () {
    function FormComponent() {
    }
    FormComponent = __decorate([
        core_1.Component({
            selector: 'form',
            template: "\n    <form class=\"form\">\n      <div class=\"form-group\">\n        <label for=\"email\">Email address</label>\n        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\">\n      </div>\n      <br>\n      <div class=\"form-group\">\n        <label for=\"site\">Site</label>\n        <input type=\"text\" class=\"form-control\" id=\"site\" placeholder=\"Site\">\n      </div>\n      <br>\n      <div class=\"dropdown\">\n        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdown\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n          Dropdown Menu\n          <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"#\"><i class=\"glyphicon glyphicon-bitcoin\"></i> Bitcoin</a></li>\n          <li><a href=\"#\"><i class=\"glyphicon glyphicon-euro\"></i> Euro</a></li>\n          <li><a href=\"#\"><i class=\"glyphicon glyphicon-yen\"></i> Yen</a></li>\n          <li><a href=\"#\"><i class=\"glyphicon glyphicon-ruble\"></i> Ruble</a></li>\n        </ul>\n      </div>\n    </form>\n  ",
            styles: ["\n    .form {\n      width: 100%;\n      display: block;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map