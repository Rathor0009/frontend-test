import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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

  it('should have Header in "div"', () => {
    const div = fixture.debugElement.nativeElement.querySelector('.header');
    expect(div.innerHTML).toBe(' Header ');
  });
  it('should have Sidebar in "div"', () => {
    const div = fixture.debugElement.nativeElement.querySelector('.sidebar');
    expect(div.innerHTML).toBe(' Sidebar ');
  });
  it('should have Featured in "div"', () => {
    const div = fixture.debugElement.nativeElement.querySelector('.featured');
    expect(div.innerHTML).toBe(' Featured ');
  });
  it('should have A in "div"', () => {
    const div = fixture.debugElement.nativeElement.querySelector('.A');
    expect(div.innerHTML).toBe(' A ');
  });
  it('should have B in "div"', () => {
    const div = fixture.debugElement.nativeElement.querySelector('.B');
    expect(div.innerHTML).toBe(' B ');
  });
});
