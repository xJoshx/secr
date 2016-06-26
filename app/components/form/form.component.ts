import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FormBuilder, Validators } from '@angular/common';
import { DATEPICKER_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { Validate } from '../../libs/validate/validate';

@Component({
  selector: 'form-component',
  directives: [DATEPICKER_DIRECTIVES],
  templateUrl: './app/components/form/form.component.html',
  styleUrls: ['./app/components/form/form.component.css']
})

export class FormComponent {
  formStatus = {
    value: 'Hidden'
  };
  form
  validate = new Validate();

  constructor (fb: FormBuilder) {
    this.form = fb.group({
      email: ["", this.validate.Email],
      site: ["", this.validate.validateSite],
      currency: "",
      date: ""
    });
  }

  setDropdownOption (option) {
    this.form.controls['currency'].updateValue(option);
  }

  setDateOption (option) {
    this.form.controls['date'].updateValue(option);
  }

  submitForm (event) {
    console.log('----------');
    console.log('STATUS: ');
    console.log(this.form.status);
    console.log(`email: ${this.form.controls.email.value}`);
    console.log(`site: ${this.form.controls.site.value}`);
    console.log(`currency: ${this.form.controls.currency.value}`);
    console.log(`date: ${this.form.controls.date.value}`);
    console.log('----------');

    switch (this.form.status) {
      case 'VALID':
        this.formStatus.value = 'Success';
        break;
      default:
        this.formStatus.value = 'Error';
        break;

    }

    event.preventDefault();
  }
}
