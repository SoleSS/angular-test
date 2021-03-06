import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';
import {LessonService} from '../lesson.service';
import {faExclamationCircle, faCheckCircle, faFlag} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  @Input() params;
  @Input() lessonId;
  @Input() totalExercises;

  @Output() notify = new EventEmitter();
  results = [];
  faExclamationCircle = faExclamationCircle;
  faCheckCircle = faCheckCircle;
  faFlag = faFlag;

  currentProgress = 0;

  constructor(
    private lessonService: LessonService,
  ) {

  }

  checkAnswear(id) {
    const userHash = Md5.hashStr(id.toString() as string);
    this.results[this.params.id] = {
      selectedId: parseInt(id, 10),
      hash: userHash,
      solved: (this.params.hash === userHash ? true : false),
    };

    // TODO: сохранить результаты на сервер...
    this.currentProgress = Math.round((this.results.length - 1) / this.totalExercises * 100);
    console.log(this.results);
  }

  ngOnInit() {
  }

}
