import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from '../domain/add-component';

import { Account } from '../domain/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements AdComponent<Account>, OnInit {

  @Input()
  data: Account;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  public processe() {
    this.message = 'Processando alguma coisa em AccountComponent';
  }

}
