import 'zone.js';
import 'reflect-metadata';
import { Hello } from './hello.component';
import { Router } from '@angular/router-deprecated';

describe('Hello Component', () => {

  beforeEach(function() {
    this.hello = new Hello();
  });

  it('should hello as path', function() {
    expect(window.location.pathname).toBe('/hello');
  });

  it('should go to the form when clicking in the button', function() {
    document.getElementById('navigation').click()
    expect(window.location.pathname).toBe('/form');
  });

});