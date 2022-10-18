
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  regionSearch:any[]=[{"val":"Africa","name":"Africa"},{"val":"Americas","name":"Americas"},
  {"val":"Asia","name":"Asia"},{"val":"Europe","name":"Europe"},{"val":"Oceania","name":"Oceania"}]


  constructor() { }

  ngOnInit(): void {
  }

}
