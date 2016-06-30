import 'reflect-metadata';
import { FormComponent } from './form.component';
import { Router } from '@angular/router-deprecated';
import { FormBuilder } from '@angular/common';

const chai = require('chai');
const expect = chai.expect;

describe('Form Component', () => {

  beforeEach(function() {
    const fb = new FormBuilder;
    this.form = new FormComponent(fb);
  });    
});

