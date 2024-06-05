import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-p',
  template: '<p class="p">{{labelName}}</p>',
  styles: [ '.p { font-size: 16px; margin: 1%; }' ]
})
export class LabelComponent {
  @Input() labelName: string = "";
}
