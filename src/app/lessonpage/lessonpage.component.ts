import { Component, OnInit } from '@angular/core';
import {LessonService} from '../lesson.service';


@Component({
  selector: 'app-lessonpage',
  templateUrl: './lessonpage.component.html',
  styleUrls: ['./lessonpage.component.scss']
})
export class LessonpageComponent implements OnInit {
  lessonsList;

  constructor(
    private lessonService: LessonService,
  ) {
    lessonService.getLessonsList().subscribe(
      data => {
        this.lessonsList = data;
      },
      err => console.error(err),
      () => console.log('getLessonsList() completed')
    );
  }

  ngOnInit() {
  }

}
