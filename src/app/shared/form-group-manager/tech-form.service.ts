import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TechFormService {
  group: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.group = this.formBuilder.group({
      tech: new FormControl(""),
      notes: new FormControl("")
    });
  }
}
