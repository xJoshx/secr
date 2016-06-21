import { Component } from '@angular/core';

@Component({
  selector: 'form',
  template: `
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
          <li><a href="#"><i class="glyphicon glyphicon-bitcoin"></i> Bitcoin</a></li>
          <li><a href="#"><i class="glyphicon glyphicon-euro"></i> Euro</a></li>
          <li><a href="#"><i class="glyphicon glyphicon-yen"></i> Yen</a></li>
          <li><a href="#"><i class="glyphicon glyphicon-ruble"></i> Ruble</a></li>
        </ul>
      </div>
    </form>
  `,
  styles: [`
    .form {
      width: 100%;
      display: block;
    }
  `]
})

export class FormComponent { }
