import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemodalComponent } from './updatemodal.component';

describe('UpdatemodalComponent', () => {
  let component: UpdatemodalComponent;
  let fixture: ComponentFixture<UpdatemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatemodalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
