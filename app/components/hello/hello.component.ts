import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { FormComponent } from '../form/form.component';

@Component({
  selector: 'hello',
  directives: [FormComponent],
  templateUrl: './app/components/hello/hello.component.html',
  styleUrls: ['./app/components/hello/hello.component.css']
})

export class HelloComponent {
  constructor(
    private router: Router) {}

  title = 'Secr Security Assignment';
  showForm = true;

  toggleForm () {
    this.showForm = !this.showForm;
    console.log(this.showForm);
  }

  goToForm () {
    this.router.navigate(['Form']);
  }
}
