import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PflanzenCardComponent } from './pflanzen-card.component';

describe('PflanzenCardComponent', () => {
  let component: PflanzenCardComponent;
  let fixture: ComponentFixture<PflanzenCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PflanzenCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PflanzenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
