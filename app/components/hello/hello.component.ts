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
    <div class="wrapper-form show-popover" [hidden]="showForm">
      <div class="arrow"></div>
      <form-component></form-component>
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
    .show-popover {
      border-radius: 8px;
      padding: 20px 20px 0;
      box-sizing: border-box;
      width: 100%;

      -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
      box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
    }
    .show-popover > .arrow {
      top: -11px;
      left: 50%;
      margin-left: -11px;
      border-top-width: 0;
      border-bottom-color: #999;
      border-bottom-color: rgba(0, 0, 0, .25);
    }
    .show-popover > .arrow {
      border-width: 11px;
    }
    .show-popover > .arrow:after {
      content: "";
      border-width: 10px;
    }
    .show-popover > .arrow, .show-popover > .arrow:after {
      position: absolute;
      display: block;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
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
