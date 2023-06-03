import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesageBoxComponent } from './mesage-box.component';

describe('MesageBoxComponent', () => {
  let component: MesageBoxComponent;
  let fixture: ComponentFixture<MesageBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesageBoxComponent]
    });
    fixture = TestBed.createComponent(MesageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
