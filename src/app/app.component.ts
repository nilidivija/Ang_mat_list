import { Component, VERSION } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  techList = [
    { id: 101, lang: 'Java' },
    { id: 102, lang: 'Angular' },
    { id: 103, lang: 'Hibernate' },
  ];
  constructor(private formBuidler: FormBuilder) {}
  techForm = this.formBuidler.group({
    selectedTech: '',
  });
  onFormSubmit() {
    console.log(this.techForm.get('selectedTech').value);
  }
}
