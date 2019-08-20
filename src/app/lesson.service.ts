import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  getLessonsList() {
    return this.http.get('/assets/data/lessons.json');
  }

  getLesson(id) {
    return this.http.get('/assets/data/lessons/' + id + '.json');
  }

  constructor(
    private http: HttpClient,
  ) { }
}
