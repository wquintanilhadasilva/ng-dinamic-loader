import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BseViewComponent } from './bse-view/bse-view.component';
import { AdViewDirective } from './directives/ad-view.directive';
import { UserComponent } from './user/user.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    BseViewComponent,
    AdViewDirective,
    UserComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [ UserComponent, AccountComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
