import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {LessonService} from '../lesson.service';
import {Helper} from '../helper';
import { faBookmark, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  lesson;
  createdAgoTxt = '***';
  faBookmark = faBookmark;
  faEllipsisV = faEllipsisV;

  constructor(
    private route: ActivatedRoute,
    private lessonService: LessonService,
    private helper: Helper,
  ) {
    this.route.paramMap.subscribe(params => {
      lessonService.getLesson(params.get('id')).subscribe(
        data => {
          this.lesson = data;

          const diff = new Date().getTime() / 1000 - this.lesson.created_at;
          if (diff < 86400 && new Date(this.lesson.created_at).getDate() === new Date().getDate()) {
            this.createdAgoTxt = 'Сегодня';
          } else if (diff < 86400 * 2) {
            this.createdAgoTxt = 'Вчера';
          } else {
            const days = Math.round(diff / 86400);
            this.createdAgoTxt = helper.stringPluralForm(days, ['день', 'дня', 'дней']) + ' назад';
          }

        },
        err => console.error(err),
        () => console.log('getLesson() completed')
      );
    });
  }


  ngOnInit() {

  }

}
