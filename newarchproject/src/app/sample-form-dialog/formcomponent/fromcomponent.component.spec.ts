import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromcomponentComponent } from './fromcomponent.component';

describe('FromcomponentComponent', () => {
  let component: FromcomponentComponent;
  let fixture: ComponentFixture<FromcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
