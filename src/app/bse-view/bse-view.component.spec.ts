import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BseViewComponent } from './bse-view.component';

describe('BseViewComponent', () => {
  let component: BseViewComponent;
  let fixture: ComponentFixture<BseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
