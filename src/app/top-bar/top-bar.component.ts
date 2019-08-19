import { Component, OnInit } from '@angular/core';
import { faChalkboardTeacher, faFileSignature, faSchool, faGamepad } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  faChalkboardTeacher = faChalkboardTeacher;
  faFileSignature = faFileSignature;
  faSchool = faSchool;
  faGamepad = faGamepad;

  constructor() { }

  ngOnInit() {
  }

}
