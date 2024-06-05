import { Component } from '@angular/core';
import { ITech } from 'src/app/utils/interfaces/ITech';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent {
  techs: ITech[] = [
    {
      tech: "Angular",
      notes: "Frontend Framework"
    }
  ];
}
