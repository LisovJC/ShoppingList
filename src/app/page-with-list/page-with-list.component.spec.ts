/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageWithListComponent } from './page-with-list.component';

describe('PageWithListComponent', () => {
  let component: PageWithListComponent;
  let fixture: ComponentFixture<PageWithListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWithListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWithListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
