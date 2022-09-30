import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ]
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

  it('Reactive form validation - ProductName check', () => {
    let productName = component.productForm.controls['productName'];
    expect(productName.valid).toBeFalsy();
    expect(productName.errors).toBeTruthy();
  });

  it('Reactive form validation - Price check', () => {
    let price = component.productForm.controls['price'];
    expect(price.valid).toBeFalsy();
    expect(price.errors).toBeTruthy();
  });

  it('Submit button should click', fakeAsync(() => {
    spyOn(component, 'onSubmit');

    let button = fixture.debugElement.nativeElement.querySelector('#save-button');
    button.click();
    tick();
    expect(component.onSubmit).toHaveBeenCalled();

  }));
  it('Reset button should click', fakeAsync(() => {
    spyOn(component, 'onReset');

    let button = fixture.debugElement.nativeElement.querySelector('#reset-button');
    button.click();
    tick();
    expect(component.onReset).toHaveBeenCalled();

  }));

  it('should have Submit in "Submit Button"', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#save-button');
    expect(btn.innerHTML).toBe('Submit');
  });
  it('should have Reset in "Reset Button"', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#reset-button');
    expect(btn.innerHTML).toBe('Reset');
  });

  it('form invalid when empty', () => {
    expect(component.productForm.valid).toBeFalsy();
  });

  it('product name field validity', () => {
    let errors: any = {};
    let productName = component.productForm.controls['productName'];
    expect(productName.valid).toBeFalsy();

    // product name field is required
    errors = productName.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set product name to something
    productName.setValue("testing");
    errors = productName.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('price field validity', () => {
    let errors: any = {};
    let price = component.productForm.controls['price'];

    // price field is required
    errors = price.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set price to something
    price.setValue("4");
    errors = price.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['min']).toBeTruthy();

    // Set price to something correct
    price.setValue(10);
    errors = price.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['min']).toBeFalsy();
  });

  it('submitting a form', () => {
    expect(component.productForm.valid).toBeFalsy();
    component.productForm.controls['productName'].setValue("testing");
    component.productForm.controls['price'].setValue(10);
    expect(component.productForm.valid).toBeTruthy();

    // Trigger the Submit function
    component.onSubmit();

    // Now we can check to make sure the value is correct
    expect(component.productForm.controls['productName'].value).toBe("testing");
    expect(component.productForm.controls['price'].value).toBe(10);
  });

});
