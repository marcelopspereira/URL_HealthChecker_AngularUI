import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotechildComponent } from './votechild.component';

describe('VotechildComponent', () => {
  let component: VotechildComponent;
  let fixture: ComponentFixture<VotechildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotechildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
