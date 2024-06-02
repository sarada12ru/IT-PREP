import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preparation',
  templateUrl: './preparation.component.html',
  styleUrls: ['./preparation.component.scss']
})
export class PreparationComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get("tech"));
  }
  
  ngOnInit(): void {
    
  }
}
