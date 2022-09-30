import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have Secure in "A tag"', () => {
    const a = fixture.debugElement.nativeElement.querySelector('#secure');
    expect(a.innerHTML).toBe('Secure');
  });
  it('should have Lazy in "A tag"', () => {
    const a = fixture.debugElement.nativeElement.querySelector('#lazy');
    expect(a.innerHTML).toBe('Lazy');
  });
});
