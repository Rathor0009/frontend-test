import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DataService } from './service/data.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: DataService
  let randomNumber: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        DataService,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.get(DataService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('dataService should return value that contains number', (async () => {
    service.subjectdata();
    let data;
    randomNumber = await service.dataState.subscribe((value: number) => {
      data = value;
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(10);
    });

    if (data) {
      expect(data).toBeGreaterThanOrEqual(0);
      expect(data).toBeLessThanOrEqual(10);
    }
    randomNumber.unsubscribe();
  }));

  it('should have Random Number: in "H4 tag"', () => {
    const h = fixture.debugElement.nativeElement.querySelector('#random');
    expect(h.innerHTML).toBe('Random Number: <input _ngcontent-a-c43="" type="number" id="input" readonly="">');
  });

  it('should have Previous Number: in "H4 tag"', () => {
    const h = fixture.debugElement.nativeElement.querySelector('#previous');
    expect(h.innerHTML).toBe('Previous Number: <input _ngcontent-a-c43="" type="number" id="input" readonly="">');
  });
});
