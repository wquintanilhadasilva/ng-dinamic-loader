import { Component, OnInit, ViewChild } from '@angular/core';
import { AdItem } from './domain/ad-item';
import { AccountComponent } from './account/account.component';
import { UserComponent } from './user/user.component';
import { BseViewComponent } from './bse-view/bse-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Componente dinâmico';

  showView: string;

  @ViewChild('tela') tela: BseViewComponent;

  view1: AdItem = {component: UserComponent, data: {'nome': 'Nome do Usuário XPTO', 'email': 'endereco@email.com'}};
  view2: AdItem = {component: AccountComponent, data: {'nome': 'CONTA HUM', 'status': true}};

  ngOnInit() {
    this.load(this.view1);
  }

  load(view: AdItem) {
    this.tela.setView(view);
    this.showView = view.component.name;
  }

}
