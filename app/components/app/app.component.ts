import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { HelloComponent } from '../hello/hello.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app',
  template: `
  <div class='wrapper'>
    <router-outlet></router-outlet>
  </div>
  `,
  styles: [`
    .wrapper {
      width: 50%;
      margin: 0 auto;
    }
  `],
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path: '/hello', name: 'Hello', component: HelloComponent, useAsDefault: true},
  {path: '/form', name: 'Form', component: FormComponent}
])

export class AppComponent { }
