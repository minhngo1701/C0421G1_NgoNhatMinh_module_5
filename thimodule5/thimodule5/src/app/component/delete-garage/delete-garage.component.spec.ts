import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGarageComponent } from './delete-garage.component';

describe('DeleteGarageComponent', () => {
  let component: DeleteGarageComponent;
  let fixture: ComponentFixture<DeleteGarageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteGarageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
