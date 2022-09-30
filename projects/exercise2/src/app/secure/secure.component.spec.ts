import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureComponent } from './secure.component';

describe('SecureComponent', () => {
  let component: SecureComponent;
  let fixture: ComponentFixture<SecureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecureComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have Secure Works in "P tag"', () => {
    const p = fixture.debugElement.nativeElement.querySelector('#p');
    expect(p.innerHTML).toBe('secure works!');
  });
});
