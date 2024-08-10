import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QSetFormService {
  group: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.group = this.formBuilder.group({
      questionSet: new FormControl(""),
      tech: new FormControl(""),
      notes: new FormControl("")
    });
  }
}
