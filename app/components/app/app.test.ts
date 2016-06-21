import 'zone.js';
import 'reflect-metadata';
import { App } from './app.component';

describe('App', () => {

  beforeEach(function() {
    this.app = new App();
  });

  it('should use hello as default route', function() {
    expect(window.location.pathname).toBe('/hello');
  });

});
