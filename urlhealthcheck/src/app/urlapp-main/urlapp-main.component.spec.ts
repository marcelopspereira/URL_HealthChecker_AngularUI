import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { URLAppMainComponent } from './urlapp-main.component';

describe('URLAppMainComponent', () => {
  let component: URLAppMainComponent;
  let fixture: ComponentFixture<URLAppMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ URLAppMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(URLAppMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
