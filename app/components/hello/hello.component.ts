import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { FormComponent } from '../form/form.component';

@Component({
  selector: 'hello',
  directives: [FormComponent],
  template: `
  <div class="wrapper">
    <h1 class="title">{{title}}</h1>
    <a id="navigation" (click)="goToForm()" class="btn btn-default centered button-go-to-form">Go to form</a>
    <a id='show-form' (click)="toggleForm()" class="btn btn-default centered button-show-form">Show me the form!!!1</a>
    <div class="wrapper-form">
      <form-component [hidden]="showForm"></form-component>
    </div>
  </div>
  `,
  styles: [`
    .wrapper {
      width: 100%;
      margin: 0 auto;
    }
    .title {
      text-align: center;
      margin-bottom: 30px;
    }
    .centered {
      display: block;
      margin: 0 auto;
    }
    .button-go-to-form {
      margin-bottom: 30px;
    }
    .button-show-form {
      margin-bottom: 30px;
    }
    .wrapper-form {
      position: relative;
    }
    @media (min-width: 720px) {
      .wrapper {
        max-width: 75%;
      }
    }
  `]
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
