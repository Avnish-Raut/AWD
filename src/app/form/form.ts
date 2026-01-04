import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './form.html',
  imports: [ReactiveFormsModule, CommonModule],
})
export class Form {
  public form: FormGroup;
  public submitted = false;
  public submissionSuccessful = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  submit() {
    this.submissionSuccessful = false;
    this.submitted = true;

    if (this.form.valid) {
      this.submissionSuccessful = true;
    }
  }
}
