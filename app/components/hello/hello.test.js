"use strict";
require('zone.js');
require('reflect-metadata');
var hello_component_1 = require('./hello.component');
describe('Hello Component', function () {
    beforeEach(function () {
        this.hello = new hello_component_1.Hello();
    });
    it('should hello as path', function () {
        expect(window.location.pathname).toBe('/hello');
    });
    it('should go to the form when clicking in the button', function () {
        document.getElementById('navigation').click();
        expect(window.location.pathname).toBe('/form');
    });
});
//# sourceMappingURL=hello.test.js.map