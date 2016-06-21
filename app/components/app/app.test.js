"use strict";
require('zone.js');
require('reflect-metadata');
var app_component_1 = require('./app.component');
describe('App', function () {
    beforeEach(function () {
        this.app = new app_component_1.App();
    });
    it('should use hello as default route', function () {
        expect(window.location.pathname).toBe('/hello');
    });
});
//# sourceMappingURL=app.test.js.map