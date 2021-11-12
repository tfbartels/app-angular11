import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContadorComponent } from './show-contador.component';

describe('ShowContadorComponent', () => {
  let component: ShowContadorComponent;
  let fixture: ComponentFixture<ShowContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowContadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
