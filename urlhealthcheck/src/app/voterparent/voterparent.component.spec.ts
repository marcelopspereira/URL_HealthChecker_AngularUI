import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterparentComponent } from './voterparent.component';

describe('VoterparentComponent', () => {
  let component: VoterparentComponent;
  let fixture: ComponentFixture<VoterparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
