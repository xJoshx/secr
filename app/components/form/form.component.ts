import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FormBuilder, Validators } from '@angular/common';
import { DATEPICKER_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { Validate } from '../../libs/validate/validate';

function validateSite (c) {
  const validate = new Validate();
  return validate.FQND(c.value) || validate.IPV4(c.value) || validate.IPV6(c.value) ;
}

@Component({
  selector: 'form-component',
  directives: [DATEPICKER_DIRECTIVES],
  templateUrl: './app/components/form/form.component.html',
  styleUrls: ['./app/components/form/form.component.css']
})

export class FormComponent {
  submitted = false;
  form
  validate = new Validate();

  constructor (fb: FormBuilder) {
    this.form = fb.group({
      email: ["", this.validate.Email],
      site: ["", validateSite],
      currency: ["", Validators.required],
    });
  }
  // date: ["", Validators.required]

  setDropdownOption (option) {
    this.form.value.currency = option;
  }

  submitForm (event) {
    console.log('----------');
    console.log('STATUS: ');
    console.log(this.form.status);
    console.log('----------');
  }
}
