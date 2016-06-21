import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { FormComponent } from '../form/form.component';

@Component({
  selector: 'hello',
  template: `
    <h1 class='title'>{{title}}</h1>
    <a id="navigation" (click)="goToForm()" class="btn btn-default centered">Go to form</a>
  `,
  styles: [`
    .title {
      text-align: center;
      margin-bottom: 30px;
    }
    .centered {
      display: block;
      margin: 0 auto;
    }
  `]
})

export class HelloComponent {
  constructor(
    private router: Router) {}

  title = 'Secr Security Assignment';

  goToForm() {
    this.router.navigate(['Form']);
  }
}
