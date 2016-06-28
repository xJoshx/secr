// import 'zone.js';
import 'reflect-metadata';
import { FormComponent } from './form.component';
import { Router } from '@angular/router-deprecated';
import { FormBuilder } from '@angular/common';

describe('Form Component', () => {

  beforeEach(function() {
    const fb = new FormBuilder;
    this.form = new FormComponent(fb);
  });

  it('should hello as path', function() {
    expect(window.location.pathname).toBe('/hello');
  });

  it('should go to the form when clicking in the button', function() {
    document.getElementById('navigation').click()
    expect(window.location.pathname).toBe('/form');
  });

});
