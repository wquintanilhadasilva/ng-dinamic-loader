import { Component, OnInit, OnDestroy, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { AdItem } from '../domain/ad-item';
import { AdViewDirective } from '../directives/ad-view.directive';
import { AdComponent } from '../domain/add-component';

@Component({
  selector: 'app-bse-view',
  templateUrl: './bse-view.component.html',
  styleUrls: ['./bse-view.component.css']
})
export class BseViewComponent implements OnInit, OnDestroy {

  @Input() ads: AdItem;

  @ViewChild(AdViewDirective) adHost: AdViewDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  load() {
    const itemAds = this.ads;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(itemAds.component);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    const compRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent<any>>compRef.instance).data = itemAds.data;
  }

  public setView(view: AdItem) {
    this.ads = view;
    this.load();
  }

}
