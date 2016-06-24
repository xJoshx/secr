import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { DATEPICKER_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'form-component',
  directives: [DATEPICKER_DIRECTIVES],
  template: `
  <div class="wrapper">
    <form class="form">
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="Email">
      </div>
      <br>
      <div class="form-group">
        <label for="site">Site</label>
        <input type="text" class="form-control" id="site" placeholder="Site">
      </div>
      <br>
      <div class="dropdown">
        <button class="btn btn-default dropdown-toggle" type="button" id="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Dropdown Menu
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item"><i class="glyphicon glyphicon-bitcoin"></i> Bitcoin</a></li>
          <li><a class="dropdown-item"><i class="glyphicon glyphicon-euro"></i> Euro</a></li>
          <li><a class="dropdown-item"><i class="glyphicon glyphicon-yen"></i> Yen</a></li>
          <li><a class="dropdown-item"><i class="glyphicon glyphicon-ruble"></i> Ruble</a></li>
        </ul>
      </div>
      <div style="wrapper-datepicker">
        <datepicker [(ngModel)]="dt" [minDate]="minDate" [showWeeks]="true"></datepicker>
      </div>
    </form>
  </div>
  `,
  styles: [`
    .wrapper {
      width: 100%;
      margin: 0 auto;
    }
    .dropdown {
      margin-bottom: 30px;
    }
    .dropdown-item {
      cursor: pointer;
    }
    .wrapper-datepicker {
      display: inline-block;
      min-height: 290px;
      max-width: 100%;
    }
    @media (min-width: 720px) {
      .wrapper {
        max-width: 50%;
      }
    }
  `]
})

export class FormComponent { }
