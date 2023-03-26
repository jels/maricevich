import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlegandoComponent } from './llegando.component';

describe('LlegandoComponent', () => {
  let component: LlegandoComponent;
  let fixture: ComponentFixture<LlegandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlegandoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlegandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
