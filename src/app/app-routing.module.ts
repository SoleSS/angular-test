import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {LessonpageComponent} from './lessonpage/lessonpage.component';
import {LessonComponent} from './lesson/lesson.component';
import {ExerciseComponent} from './exercise/exercise.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'lessons', component: LessonpageComponent },
  { path: 'lesson/:lessonId/:exerciseId', component: ExerciseComponent },
  { path: 'lesson/:id', component: LessonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
