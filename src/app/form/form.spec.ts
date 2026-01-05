import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Form } from './form';

describe('Login Component', () => {
  let component: Form;
  let fixture: ComponentFixture<Form>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Form, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Form);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty values', () => {
    const form = component.form;
    expect(form).toBeDefined();
    expect(form.get('email')?.value).toBe('');
    expect(form.get('password')?.value).toBe('');
  });

  it('should mark form as invalid if empty', () => {
    component.submit();
    expect(component.submitted).toBeTruthy();
    expect(component.form.invalid).toBeTruthy();
  });

  it('should mark form as valid when valid values are set', () => {
    component.form.get('email')?.setValue('test@example.com');
    component.form.get('password')?.setValue('password123');
    component.submit();
    expect(component.form.valid).toBeTruthy();
  });
});
