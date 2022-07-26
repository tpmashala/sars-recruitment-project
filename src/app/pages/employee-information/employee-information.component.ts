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
import { Employee } from '../../shared/models/Employee';
import { PhoneNumber } from '../../shared/models/PhoneNumber';
import { PhonenumberType } from '../../shared/models/PhoneNumberType';
import { EmployeeService } from '../../core/services/employee.service';
import { AddressType } from '../../shared/models/AddressType';
import { Address } from 'src/app/shared/models/Address';
import { SocialMedia } from '../../shared/models/SocialMedia';
import { SocialMediaType } from 'src/app/shared/models/SocialMediaType';

@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.css']
})
export class EmployeeInformationComponent implements OnInit {
  employee: Employee = {
    //employee_id:"",
    firstName: "",
    lastName: "",
    employeeNumber: "",
    emailAddress: "",
    phoneNumbers: [],
    addresses: [],
    socialMedia: []
  };

  employeeFormGroup: FormGroup = new FormGroup({
    firstname: new FormControl(this.employee.firstName, [
      Validators.required,
      Validators.minLength(2)
    ]),
    lastname: new FormControl(this.employee.lastName, [
      Validators.required,
      Validators.minLength(2)
    ]),
    email: new FormControl(this.employee.emailAddress, [
      Validators.required, 
      Validators.minLength(3),
    Validators.email]),
    contactDetailsFormGroup: new FormGroup({
      landlineNumber: new FormControl(),
      mobileNumber: new FormControl(),
      addressLine1: new FormControl(),
      addressLine2: new FormControl(),
      surburb: new FormControl(),
      city: new FormControl(),
      postalCode: new FormControl(),
      isSameAddress: new FormControl(),
      socialMedia: new FormControl()
    })
  });

  isFormSubmitted: boolean = false;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}

  onFormSubmit() {
    if (this.employeeFormGroup.valid) {
      this.employee.firstName = this.firstname?.value;
      this.employee.lastName = this.lastname?.value;
      this.employee.emailAddress = this.email?.value;

      let phoneNumber = new Array<PhoneNumber>({phoneNumber: this.contactDetailsFormGroup?.mobileNumber, 
        phoneNumberType: PhonenumberType.MOBILE});

      let residentialAddress = new Array<Address>({addressLine1: this.contactDetailsFormGroup?.addressLine1,
        addressLine2:this.contactDetailsFormGroup?.addressLine2, 
        surburb:this.contactDetailsFormGroup?.surburb, 
        city:this.contactDetailsFormGroup?.city, postalCode:this.contactDetailsFormGroup?.postalCode, 
        addressType:AddressType.POSTAL});

      let socialMedia = new Array<SocialMedia>({socialMediaHandle: this.contactDetailsFormGroup?.socialMedia, 
        socialMediaType: SocialMediaType.TWITTER})

      this.employee.phoneNumbers = phoneNumber;
      this.employee.addresses = residentialAddress;
      this.employee.socialMedia = socialMedia;
      this.isFormSubmitted = true;
      
      this.employeeService.addEmployee(this.employee).subscribe((response)=>{
        console.log("=====response=====");
        console.log(response);
      });
    }
    
  }

  get firstname() { return this.employeeFormGroup.get('firstname'); }
  get lastname() { return this.employeeFormGroup.get('lastname'); }
  get email() { return this.employeeFormGroup.get('email'); }
  get contactDetailsFormGroup() { return this.employeeFormGroup.get('contactDetailsFormGroup').value; }
}
