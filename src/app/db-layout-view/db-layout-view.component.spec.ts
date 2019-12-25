import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbLayoutViewComponent } from './db-layout-view.component';

describe('DbLayoutViewComponent', () => {
  let component: DbLayoutViewComponent;
  let fixture: ComponentFixture<DbLayoutViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbLayoutViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbLayoutViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
