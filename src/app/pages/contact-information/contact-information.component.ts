import { Component, OnInit, Input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css']
})
export class ContactInformationComponent implements OnInit {
  @Input()
  isFormSubmitted: boolean;

  constructor() {}

  ngOnInit(): void {}

  /*onAddressSubmit() {
    console.log(this.contactDetailsFormGroup.value);
  }*/
}
