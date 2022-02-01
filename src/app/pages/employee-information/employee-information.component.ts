import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.css']
})
export class EmployeeInformationComponent implements OnInit {
  employeeFormGroup: FormGroup = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl('', [Validators.required, Validators.minLength(3)]),
    contactDetailsFormGroup: new FormGroup({
      landlineNumber: new FormControl(),
      mobileNumber: new FormControl(),
      addressLine1: new FormControl(),
      addressLine2: new FormControl(),
      surburb: new FormControl(),
      streetName: new FormControl(),
      city: new FormControl(),
      postalCode: new FormControl(),
      isSameAddress: new FormControl(),
      socialMedia: new FormControl()
    })
  });

  email = new FormControl('', [Validators.required, Validators.email]);
  isFormSubmitted: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onFormSubmit() {
    this.isFormSubmitted = true;
    console.log(this.employeeFormGroup.value);
  }
}
