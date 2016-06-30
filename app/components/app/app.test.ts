// import 'zone.js';
// import 'reflect-metadata';
import { AppComponent } from './app.component';

const chai = require('chai');
const expect = chai.expect;

describe('App', () => {

  beforeEach(function() {
    this.app = new AppComponent();
  });

  it('should use hello as default route', function() {
    expect(window.location.pathname).toBe('/hello');
  });

});
