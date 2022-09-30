import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  productForm!: FormGroup;
  submitted: boolean = false;
  message: any;

  constructor(private fb: FormBuilder, private service: DataService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      price: ['', [Validators.required, Validators.min(5), Validators.max(20)]]
    })
  }

  get fc() {
    return this.productForm.controls;
  }

  //Button to submit form values
  onSubmit() {
    this.submitted = true;
    if (this.productForm.invalid) {
      return;
    }
    if (this.productForm.valid) {
      this.service.getMessage().subscribe(data => {
        this.message = data;
        alert(this.message);

      })
    }

  }

  //Button to reset form
  onReset() {
    this.submitted = false;
    this.productForm.reset();
  }
}
