import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  template: '<label class="label">{{labelName}}</label>',
  styles: [ '.label { font-size: 22px; font-weight: bold; margin: 1%; }' ]
})
export class LabelComponent {
  @Input() labelName: string = "";
}
