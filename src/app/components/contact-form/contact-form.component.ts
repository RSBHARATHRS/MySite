import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactForm } from 'src/app/models/forms.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup<ContactForm>;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.nonNullable.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      org: ['', [Validators.required]],
      msg: ['', [Validators.required]],
      tAndC: [false, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  reset() {
    console.log(this.contactForm.value)
  }
  submit() {
    console.log(this.contactForm.value)
  }

}
