import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowgrievanceComponent } from './showgrievance.component';

describe('ShowgrievanceComponent', () => {
  let component: ShowgrievanceComponent;
  let fixture: ComponentFixture<ShowgrievanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowgrievanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowgrievanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
