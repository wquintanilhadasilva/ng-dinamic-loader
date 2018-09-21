import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from '../domain/add-component';
import { User } from '../domain/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements AdComponent<User>, OnInit {

  @Input()
  data: User;

  message = '';

  constructor() { }

  ngOnInit() {
  }

  public fazAlgo() {
    this.message = 'Algo foi feito em UserComponent';
  }

}
