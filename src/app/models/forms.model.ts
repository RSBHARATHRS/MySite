import { FormControl } from "@angular/forms";

export interface ContactForm {
  name : FormControl<string>,
  email: FormControl<string>,
  org: FormControl<string>,
  msg: FormControl<string>,
  tAndC: FormControl<boolean>
}
