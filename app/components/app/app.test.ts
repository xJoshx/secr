// import 'zone.js';
// import 'reflect-metadata';
import { AppComponent } from './app.component';

describe('App', () => {

  beforeEach(function() {
    this.app = new AppComponent();
  });

  it('should use hello as default route', function() {
    expect(window.location.pathname).toBe('/hello');
  });

});
