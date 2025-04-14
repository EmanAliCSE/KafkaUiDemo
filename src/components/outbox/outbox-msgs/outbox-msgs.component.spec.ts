import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboxMsgsComponent } from './outbox-msgs.component';

describe('OutboxMsgsComponent', () => {
  let component: OutboxMsgsComponent;
  let fixture: ComponentFixture<OutboxMsgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutboxMsgsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboxMsgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
